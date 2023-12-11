import { compileMDX } from "next-mdx-remote/rsc";

export async function getPostByName(fileName: string) {
  const res = await fetch(
    `https://raw.githubusercontent.com/jacwida/blop/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer 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`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  //   const realSlug = fileName.replace(/\.mdx$/, "");
  const slug = fileName
    .replace(/\.mdx$/, "")
    .split(" ")
    .join("-");

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX({
    source: rawMDX,
    components: {},
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    meta: { ...frontmatter, content: content, slug },
  };
}

export async function getPostsMeta() {
  const res = await fetch(
    "https://api.github.com/repos/jacwida/blop/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer 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`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const repoFiletree = await res.json();

  const filesArray = repoFiletree.tree
    .map((obj: any) => obj.path)
    .filter((path: any) => path.endsWith(".mdx"));

  const posts = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts;
}
