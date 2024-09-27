<script lang="ts">
	import { page } from "$app/stores";

	const { lang } = $page.params;
</script>

<h1>About</h1>
<p>Selected language: {lang}</p>

<pre>
  {JSON.stringify($page, null, 2)}
</pre>
