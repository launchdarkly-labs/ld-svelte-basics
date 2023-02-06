<script context="module">
  import SvelteMarkdown from "svelte-markdown";
</script>

<script>
  export let data;
  export let post = data.post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="content">
  <h1>{post.title}</h1>

  <SvelteMarkdown source={post.body_markdown} />
</div>
