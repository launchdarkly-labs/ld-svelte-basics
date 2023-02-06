export async function load({ params }) {
  const { slug } = params;
  const response = await fetch(`https://dev.to/api/articles/${slug}`);
  const post = await response.json();

  return {
    post: post,
  };
}
