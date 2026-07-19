import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"writing">;

export function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function getPosts(includeDrafts = false): Promise<Post[]> {
  const posts = await getCollection("writing");
  return posts
    .filter((p) => includeDrafts || p.data.status !== "draft")
    .sort((a, b) => (a.data.date < b.data.date ? 1 : -1));
}

export async function getSeriesParts(
  name: string,
  includeDrafts = true,
): Promise<Post[]> {
  const posts = await getCollection("writing");
  return posts
    .filter(
      (p) =>
        p.data.series?.name === name &&
        (includeDrafts || p.data.status !== "draft"),
    )
    .sort((a, b) => (a.data.series?.order ?? 0) - (b.data.series?.order ?? 0));
}

export function formatDate(
  date: string,
  opts: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" },
): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", opts);
}
