<script context="module">
  import { browser, dev } from "$app/env";
  import SvelteMarkdown from "svelte-markdown";

  export const hydrate = dev;
  export const router = browser;

  export async function load({ fetch }) {
    const res = await fetch("/api/about");

    if (res.ok) {
      let { frontMatter, body } = await res.json();
      return {
        props: { frontMatter, body },
      };
    }

    return {
      status: res.status,
      error: new Error(),
    };
  }
</script>

<script>
  export let frontMatter;
  export let body;
</script>

<svelte:head>
  <title>{frontMatter.title}</title>
</svelte:head>

<div class="content">
  <h1>{frontMatter.title}</h1>

  <SvelteMarkdown source={body} />
</div>

<style>
  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
