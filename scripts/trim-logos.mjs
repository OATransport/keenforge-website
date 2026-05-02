/*
  Trim the empty safe-area padding from the approved KeenForge brand JPGs
  so they can be displayed at confident sizes in the header / footer with
  object-contain, without baked whitespace making them look small.

  This does NOT alter the logo design itself. sharp.trim() simply removes
  uniformly colored border pixels around the actual logo content. The
  results overwrite the originals at /public/brand.

  Run once after dropping in new approved assets:
    node scripts/trim-logos.mjs
*/
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd(), "public/brand");

const TARGETS = [
  "KeenForge_Primary_Logo.jpg",
  "KeenForge_Dark_Background_Logo.jpg",
  "KeenForge_Icon_Only.jpg",
];

async function trim(file) {
  const full = path.join(ROOT, file);
  const buf = await fs.readFile(full);
  const before = await sharp(buf).metadata();

  // threshold tuning: the brand backgrounds are flat fills (Warm Ivory or
  // Forge Navy). A modest threshold lets sharp identify them as the border.
  const trimmed = await sharp(buf)
    .trim({ background: undefined, threshold: 12 })
    .toBuffer({ resolveWithObject: true });

  // Add a tiny breathing margin back. Sharp .trim() crops right up to the
  // first non-background pixel; adding 12px of the original background back
  // protects against any perceived clipping at small render sizes while
  // still removing the bulk of the source's safe area.
  //
  // Border color is read from the trimmed image's top-left pixel (which is
  // adjacent to what was just removed), so the padding always matches the
  // logo's native background.
  const { data, info } = trimmed;
  const { dominant } = await sharp(data).stats();
  const bg = {
    r: dominant.r,
    g: dominant.g,
    b: dominant.b,
    alpha: 1,
  };
  const padded = await sharp(data, { failOn: "error" })
    .extend({ top: 12, bottom: 12, left: 16, right: 16, background: bg })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();

  await fs.writeFile(full, padded);
  const after = await sharp(padded).metadata();

  console.log(
    `${file}: ${before.width}x${before.height} -> trimmed ${info.width}x${info.height} -> padded ${after.width}x${after.height}`,
  );
}

for (const t of TARGETS) {
  await trim(t);
}
