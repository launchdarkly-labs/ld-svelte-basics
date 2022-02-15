<script>
  import { browser } from "$app/env";
  import { getFlagValue } from "../launchdarkly/client";

  let showAboutUs;
  let featuredCategory;
  if (browser) {
    getFlagValue("show-about-us", setShowAboutUs).then(setShowAboutUs);
    getFlagValue("featured-category", setFeaturedCategory).then(
      setFeaturedCategory
    );
  }

  function setShowAboutUs(val) {
    showAboutUs = val;
  }

  function setFeaturedCategory(val) {
    featuredCategory = val.charAt(0).toUpperCase() + val.slice(1);
  }
</script>

<header>
  <div class="nav">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href={`/posts/${featuredCategory}`}>Posts from {featuredCategory}</a>
      </li>
      {#await showAboutUs then showAboutUs}
        {#if showAboutUs}
          <li class="about">
            <a href="/about">About Us</a>
          </li>
        {/if}
      {/await}
    </ul>
  </div>
</header>

<style>
  .nav {
    width: 100%;
  }
  .nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }

  .nav li {
    float: left;
    border-right: 1px solid #bbb;
  }

  .nav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .nav li a:hover {
    background-color: #111;
  }

  li.about {
    float: right;
  }
</style>
