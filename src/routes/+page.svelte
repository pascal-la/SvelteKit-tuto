<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import "../app.css";

	onMount(() => console.log("Mouting Home page"));
	onDestroy(() => console.log("Destroying Home page"));

	async function getPosts() {
		await fetch("/api/posts", {
			method: "GET"
		});
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
