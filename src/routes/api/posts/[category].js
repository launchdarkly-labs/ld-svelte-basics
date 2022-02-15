export async function get({ params }) {
  let { category } = params;
  category = category.toLowerCase();
  const response = await fetch(
    `https://dev.to/api/articles?tag=${category}&page=1&per_page=5`
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
    body: {
      posts: posts,
    },
  };
}
