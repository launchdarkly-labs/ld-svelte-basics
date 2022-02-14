<script context="module">
  import SvelteMarkdown from "svelte-markdown";

  export async function load({ params, fetch }) {
    const { username, slug } = params;
    const res = await fetch(`/api/post/${username}/${slug}`).then((r) =>
      r.json()
    );
    const { post } = res;

    return {
      props: { post },
    };
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="content">
  <h1>{post.title}</h1>

  <SvelteMarkdown source={post.body_markdown} />
</div>
