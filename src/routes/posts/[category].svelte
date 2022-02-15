<script context="module">
  export async function load({ params, fetch }) {
    let { category } = params;
    const res = await fetch(`/api/posts/${category}`);

    if (res.ok) {
      let posts = await res.json();

      return {
        props: { posts: posts.posts, featuredCategory: category },
      };
    }

    return {
      status: res.status,
      error: new Error(),
    };
  }
</script>

<script>
  export let posts;
  export let featuredCategory;
</script>

<svelte:head>
  <title>Posts from {featuredCategory}</title>
  <meta name="description" content="Using LaunchDarkly flags with Svelte" />
</svelte:head>

<section>
  <h1>
    Featured Blog Posts for: {featuredCategory}
  </h1>

  <ul>
    {#each posts as post (post.id)}
      <li>
        <a href={`/post/${post.username}/${post.slug}`}>
          <strong>{post.title}</strong>
        </a>
        <p>{post.description}</p>
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
  }
</style>
