<script lang="ts">
	import { onDestroy, onMount } from "svelte";

	onMount(() => console.log("Mouting Posts page"));
	onDestroy(() => console.log("Destroying Posts page"));
</script>

<h1>Posts page</h1>

<p>You can <a href="/posts/create">+create</a> or edit your posts here.</p>

<ul>
	<li>
		<a href="/image/200x300">Image width: 200px, height: 300px</a>
	</li>
	<li>
		<a href="/media/path/to/image/200/300">/media/path/to/image/200/300</a>
	</li>
</ul>

<p>You can browse posts here.</p>
