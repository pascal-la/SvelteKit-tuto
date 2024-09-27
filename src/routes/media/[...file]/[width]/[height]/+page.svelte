<script lang="ts">
	import { page } from "$app/stores";

	const { file, width, height } = $page.params;
</script>

<h1>Rest parameters</h1>
<ul>
	<li>{file}</li>
	<li>{width}</li>
	<li>{height}</li>
</ul>

<pre>
  {JSON.stringify($page, null, 2)}
</pre>
