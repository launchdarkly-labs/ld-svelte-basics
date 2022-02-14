import { processMarkdown } from "../../lib/markdown";
import { getFlagValue } from "../../lib/launchdarkly/server";

export async function get() {
  const aboutUsPage = await getFlagValue("new-about-us");
  const { frontMatter, body } = await processMarkdown(
    `./src/posts/${aboutUsPage}.md`
  );

  return {
    body: {
      frontMatter: frontMatter,
      body: body,
    },
  };
}
