<!-- <script lang="ts">
	import type { Post } from "@prisma/client";
	import { onDestroy, onMount } from "svelte";
	import "../app.css";

	onMount(() => console.log("Mouting Home page"));
	onDestroy(() => console.log("Destroying Home page"));

	async function getPosts() {
		// return await fetch("/api/posts");
		const response = await fetch("/api/posts");
		const posts: Post[] = await response.json();

		return posts;
	}

	async function subscribe(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		await fetch("/api/newsletter", {
			method: "POST",
			body: data
		});
	}
</script>

<h1>Home page</h1>

<form on:submit|preventDefault={subscribe}>
	<input type="email" name="email" />
	<button>Subscribe</button>
</form>

<button on:click={getPosts}> Show posts </button>

<h2>Posts</h2>

{#await getPosts()}
	<p>Loading...</p>
{:then posts}
	<pre>
	{JSON.stringify(posts, null, 2)}
 </pre>

	<p>Showing {posts.length} posts.</p>

	<ul>
		{#each posts as post}
			<li>
				<a href="/posts/{post.slug}">{post.title}</a>
			</li>
		{/each}
	</ul>
{:catch error}
	<p>{error.message}</p>
{/await} -->

<!-- 
! THE CODE ABOVE IS WORKING JUST FINE, BUT THE SOURCE CODE IS DISPLAYING <p>Loading...</p>
! TO MAKE THE SEO WORKS ON THE POSTS, WE HAVE TO CREATE THE +page.ts FILE WITH THE LOAD FUNCTION
! WHERE THE DATAS ARE GOING TO BE FETCHED
! cf. +page.ts
-->

<script lang="ts">
	import { invalidate, invalidateAll } from "$app/navigation";
	import type { PageData } from "./$types";

	export let data: PageData;
	// using `data` is going to be a pain having to constantly use `data.something`
	// we can use `const { posts } = data;`, but wouldn't be reactive because when we update this, nothing is going to happen
	// the next step we can do is use a reactive declaration, which is:
	$: ({ posts } = data);

	// What makes a load function rerun:
	// if any reference or property of params or URL changes
	// if the load function calls await parent and the parent reran
	// if you declare a dependency with fetch or `depends` and
	// mark the URL invalid with `invalidate` or `invalidateAll`
	function rerunLoadFunction() {
		// a)
		invalidate("app:posts"); // argument from depends in routes/+page.ts
		// b)
		// invalidate("/api/posts"); // stable URL only
		// c)
		// invalidate((url) => url.href.includes("posts")); // anything related to `posts` is going to rerun it
		// d)
		// invalidateAll(); // nuclear option: avoid this at all cost if possible => force every function load to rerun
	}
</script>

<h1>Posts</h1>

<button on:click={rerunLoadFunction}>Rerun</button>

<p>Showing {posts.length} posts.</p>

<ul>
	{#each posts as { slug, title }}
		<li>
			<a href="/posts/{slug}">{title}</a>
		</li>
	{/each}
</ul>
