/*
  Composite each transparent logo over the actual surface color it will sit on
  in the live site. Pure visual verification — outputs go to /tmp.
*/
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd(), "public/brand");

const PREVIEWS = [
  {
    file: "KeenForge_Primary_Logo_Transparent.png",
    bg: { r: 246, g: 242, b: 234 }, // --warm-ivory #F6F2EA
    out: "/tmp/preview_primary_on_warm_ivory.png",
  },
  {
    file: "KeenForge_Dark_Background_Logo_Transparent.png",
    bg: { r: 11, g: 31, b: 51 }, // --forge-navy #0B1F33
    out: "/tmp/preview_dark_on_forge_navy.png",
  },
  {
    file: "KeenForge_Icon_Only_Transparent.png",
    bg: { r: 246, g: 242, b: 234 }, // ivory
    out: "/tmp/preview_icon_on_warm_ivory.png",
  },
];

for (const p of PREVIEWS) {
  const src = path.join(ROOT, p.file);
  const meta = await sharp(src).metadata();
  await sharp({
    create: {
      width: meta.width,
      height: meta.height,
      channels: 4,
      background: { ...p.bg, alpha: 1 },
    },
  })
    .composite([{ input: src }])
    .png()
    .toFile(p.out);
  console.log(`${p.file} composited over rgb(${p.bg.r},${p.bg.g},${p.bg.b}) -> ${p.out}`);
}
