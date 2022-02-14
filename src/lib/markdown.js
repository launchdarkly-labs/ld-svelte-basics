import matter from "gray-matter";
export async function processMarkdown(filename) {
  const data = matter.read(filename);
  const frontMatter = data.data;
  const markdownBody = data.content;

  return {
    frontMatter: frontMatter,
    body: markdownBody,
  };
}
