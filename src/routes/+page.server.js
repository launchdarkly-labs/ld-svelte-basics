import { getFlagValue } from "../lib/launchdarkly/ldserver.server";

export async function load() {
  const featuredUsername = await getFlagValue("featured-username");
  const response = await fetch(
    `https://dev.to/api/articles?username=${featuredUsername}&page=1&per_page=10`
  );
  let posts = await response.json();

  // clean up the username and organization
  posts = posts.map((post) => {
    post.username = post.organization
      ? post.organization.username
      : post.user.username;
    return post;
  });

  return {
    posts,
    featuredUsername,
  };
}
