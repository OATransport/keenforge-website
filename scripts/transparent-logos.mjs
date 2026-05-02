/*
  Generate transparent-background PNGs from the approved KeenForge brand JPGs.

  The approved master files in /public/brand are JPGs with a flat baked
  background (Warm Ivory for the light lockups, Forge Navy for the dark one).
  When those JPGs sit on a slightly different surface color in the header or
  footer, the rectangle is visible as a sticker. This script chroma-keys the
  background color out to transparency, with a smooth alpha ramp at the edge
  pixels so the logo's anti-aliasing is preserved instead of producing a
  jagged cutout.

  The logo design itself (mark, divider, wordmark, colors, proportions) is
  not modified. Only background pixels are made transparent.

  Run after dropping in new approved assets:
    node scripts/transparent-logos.mjs
*/
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd(), "public/brand");

const TARGETS = [
  {
    in: "KeenForge_Primary_Logo.jpg",
    out: "KeenForge_Primary_Logo_Transparent.png",
  },
  {
    in: "KeenForge_Dark_Background_Logo.jpg",
    out: "KeenForge_Dark_Background_Logo_Transparent.png",
  },
  {
    in: "KeenForge_Icon_Only.jpg",
    out: "KeenForge_Icon_Only_Transparent.png",
  },
];

/*
  Chroma-key tuning.

  - LOW: pixels within this color distance of the background are fully
    transparent. Larger values strip more of the background but risk
    cutting into faint glyph edges.
  - HIGH: pixels beyond this distance are fully opaque (logo content).
    Pixels in between get a smooth alpha ramp, preserving anti-aliased
    edges so the logo does not look like a hard cutout.
*/
const LOW = 14;
const HIGH = 70;

async function transparentize({ in: inFile, out: outFile }) {
  const src = path.join(ROOT, inFile);
  const dst = path.join(ROOT, outFile);

  // Decode to raw RGBA so we can compute alpha per pixel.
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width: w, height: h, channels } = info;
  if (channels !== 4) {
    throw new Error(`expected 4 channels for ${inFile}, got ${channels}`);
  }

  // Sample background color from the four corners and average. The brand
  // JPGs all have flat color in the corners, so this is reliable.
  const sample = (x, y) => {
    const i = (y * w + x) * 4;
    return [data[i], data[i + 1], data[i + 2]];
  };
  const corners = [
    sample(0, 0),
    sample(w - 1, 0),
    sample(0, h - 1),
    sample(w - 1, h - 1),
  ];
  const bg = corners
    .reduce(
      (acc, [r, g, b]) => [acc[0] + r, acc[1] + g, acc[2] + b],
      [0, 0, 0],
    )
    .map((v) => Math.round(v / corners.length));
  const [bR, bG, bB] = bg;

  const out = Buffer.alloc(w * h * 4);
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const dr = r - bR;
    const dg = g - bG;
    const db = b - bB;
    const dist = Math.sqrt(dr * dr + dg * dg + db * db);

    let alpha;
    if (dist <= LOW) {
      alpha = 0;
    } else if (dist >= HIGH) {
      alpha = 255;
    } else {
      // Smooth ramp between LOW and HIGH so anti-aliased edges fade
      // gracefully instead of forming a hard cutout.
      alpha = Math.round(((dist - LOW) / (HIGH - LOW)) * 255);
    }

    /*
      Color decontamination for partially transparent pixels.

      A semi-transparent pixel still carries some of the original
      background tint. Solving the over-compositing equation:
        observed = a * fg + (1 - a) * bg
      for fg gives the original logo color. This keeps the dark logo's
      ivory text from picking up a navy halo (and vice versa) when laid
      over a different surface color.
    */
    let fr = r;
    let fg2 = g;
    let fb = b;
    if (alpha > 0 && alpha < 255) {
      const a = alpha / 255;
      fr = Math.max(0, Math.min(255, Math.round((r - (1 - a) * bR) / a)));
      fg2 = Math.max(0, Math.min(255, Math.round((g - (1 - a) * bG) / a)));
      fb = Math.max(0, Math.min(255, Math.round((b - (1 - a) * bB) / a)));
    }

    out[i] = fr;
    out[i + 1] = fg2;
    out[i + 2] = fb;
    out[i + 3] = alpha;
  }

  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 9, palette: false })
    .toFile(dst);

  const meta = await sharp(dst).metadata();
  console.log(
    `${inFile} -> ${outFile}  (bg rgb(${bR},${bG},${bB}) -> alpha; ${meta.width}x${meta.height})`,
  );
}

for (const t of TARGETS) {
  await transparentize(t);
}
