export async function get({ params }) {
  const { username, slug } = params;
  const response = await fetch(
    `https://dev.to/api/articles/${username}/${slug}`
  );
  const post = await response.json();

  return {
    body: {
      post: post,
    },
  };
}
