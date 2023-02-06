<script>
  export let data;
  export let posts = data.posts;
  export let featuredCategory = data.featuredCategory;
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
