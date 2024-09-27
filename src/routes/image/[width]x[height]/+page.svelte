<script lang="ts">
	import { page } from "$app/stores";

	const { height, width } = $page.params;
</script>

<h1>Dimensions</h1>

<p>
	Height: {height}px.
</p>
<p>
	Width: {width}px.
</p>

<pre>
  {JSON.stringify($page, null, 2)}
</pre>
