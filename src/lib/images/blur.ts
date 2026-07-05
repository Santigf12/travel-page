import { blurData } from "./generated/blur-data";

export function getBlurDataURL(imagePath: string) {
  const blurMap = blurData as Record<string, string | undefined>;

  return blurMap[imagePath];
}
