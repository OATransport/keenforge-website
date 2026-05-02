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
  const out = await sharp(buf)
    .trim({ background: undefined, threshold: 12 })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();

  await fs.writeFile(full, out);
  const after = await sharp(out).metadata();

  console.log(
    `${file}: ${before.width}x${before.height} -> ${after.width}x${after.height}`,
  );
}

for (const t of TARGETS) {
  await trim(t);
}
