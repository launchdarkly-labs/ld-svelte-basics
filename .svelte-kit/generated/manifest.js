const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/posts/[category].svelte"),
	() => import("../../src/routes/post/[username]/[slug].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/posts/[category].svelte
	[/^\/posts\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ category: d(m[1])})],

	// src/routes/post/[username]/[slug].svelte
	[/^\/post\/([^/]+?)\/([^/]+?)\/?$/, [c[0], c[5]], [c[1]], (m) => ({ username: d(m[1]), slug: d(m[2])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];