<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("/api");

    if (res.ok) {
      let data = await res.json();
      return {
        props: { posts: data.posts, featuredUsername: data.featuredUsername },
      };
      return {
        status: res.status,
        error: new Error(),
      };
    }
  }
</script>

<script>
  export let posts;
  export let featuredUsername;
</script>

<svelte:head>
  <title>Basic Svelte Example</title>
  <meta name="description" content="Using LaunchDarkly flags with Svelte" />
</svelte:head>

<section>
  <h1>
    Featured Blog Posts for: {featuredUsername}
  </h1>

  <ul>
    {#each posts as post (post.id)}
      <li>
        <a href={post.slug}>
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
