<script>
  import { browser } from "$app/env";
  import * as LDClient from "launchdarkly-js-client-sdk";

  if (browser) {
    let client = LDClient.initialize("61409b046ca8d52601d179ef", {
      key: "anonymous",
    });
  }
</script>

<header>
  <div class="nav">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/ssr">SSR</a>
      </li>
      <li class="about">
        <a href="/about">About Us</a>
      </li>
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
