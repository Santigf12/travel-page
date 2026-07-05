// src/lib/images/loader.ts
import { imageManifest } from "./generated/blur-data";

export default function customLoader({ src, width }: { src: string; width: number }) {
  const manifest = (imageManifest as Record<string, { widths: readonly number[] }>)[src];
  if (!manifest || manifest.widths.length === 0) return src;

  const availableWidths = manifest.widths;
  const nearest = availableWidths.find((w) => w >= width) ?? availableWidths[availableWidths.length - 1];

  const relativePath = src.replace(/^\/images\//, "");
  const lastSlash = relativePath.lastIndexOf("/");
  const dirPart = lastSlash === -1 ? "" : relativePath.substring(0, lastSlash);
  const fileName = relativePath.substring(lastSlash + 1);
  const baseName = fileName.replace(/\.[^.]+$/, "");

  return dirPart ? `/images/generated/${dirPart}/${baseName}-${nearest}.webp` : `/images/generated/${baseName}-${nearest}.webp`;
}
