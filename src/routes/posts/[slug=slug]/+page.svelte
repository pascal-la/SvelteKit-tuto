<script lang="ts">
	import { page } from "$app/stores";

	const { slug } = $page.params;
</script>

<h1>Post {slug}</h1>

<pre>
  {JSON.stringify($page, null, 2)}
</pre>
