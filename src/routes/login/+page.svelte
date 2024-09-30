<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<h1>Login</h1>

<form method="POST" use:enhance>
	<input type="text" name="user" />
	<input type="password" name="password" />
	<button type="submit"> Login </button>
</form>
