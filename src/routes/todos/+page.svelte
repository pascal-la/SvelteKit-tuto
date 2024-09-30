<script lang="ts">
	import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";
	// import { invalidateAll } from "$app/navigation";
	import type { ActionData, PageData } from "./$types";

	// type Data = {
	// 	success: boolean;
	// 	errors: Record<string, string>;
	// };

	export let data: PageData;

	// let form: Data;
	export let form: ActionData;

	let loading = false;

	const addTodo: SubmitFunction = () => {
		// do something before the form submits (validation, etc...)
		loading = true;
		return async ({ update }) => {
			// do something after the form submits
			loading = false;
			await update();
		};
	};

	// cf. SvelteKit Form Actions in /routes/todos/+page.server.ts
	// async function addTodo(event: Event) {
	// 	const formEl = event.target as HTMLFormElement;
	// 	const data = new FormData(formEl);

	// 	console.dir(formEl);

	// 	const response = await fetch(formEl.action, {
	// 		method: "POST",
	// 		body: data
	// 	});

	// 	const responseData = await response.json();

	// 	form = responseData;

	// 	formEl.reset();

	// 	await invalidateAll();
	// }

	// async function removeTodo(event: Event) {
	// 	const formEl = event.target as HTMLFormElement;
	// 	const data = new FormData(formEl);

	// 	const response = await fetch(formEl.action, {
	// 		method: "DELETE",
	// 		body: data
	// 	});

	// 	await invalidateAll();
	// }
</script>

<pre>
	{JSON.stringify(form, null, 2)}
</pre>

<!--
? If we want to preserve awesome single page application
? experience, we can use Progressive Form Enhancement
? Let's pretend that in the previous case, the user doesn't
? have JavaScript because it can fail for whatever reason,
? our form is still going to work, but if the JavaScript
? is available on the page, we can enhance the user experience
? so we can do client-side validation or whatever else we want
? => use:enhance
? It's going to update the form `export let form: ActionData;`.
? It's going to update the `$spage.form` store and the `$spage.status` property.
? It's also going to reset the form and rerun the load function for the page.
? so we don't have to use `invalidateAll()` ourselves.
? In a case fo a redirect, is going to use `goto()`
?
? function handleSubmit() {
?   goto('/thank-you');
? }
-->

{#if form?.success}
	<span class={"toast"}>TOASTED!!!</span>
{/if}

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<!-- <form on:submit|preventDefault={removeTodo} method="POST"> -->
			<form method="POST" action="?/removeTodo" use:enhance>
				<input type="hidden" name="id" value={todo.id} />
				<button class="delete" type="submit">❌</button>
			</form>
		</li>
	{/each}
</ul>

<!-- <form on:submit|preventDefault={addTodo} method="POST"> -->
<form method="POST" action="?/addTodo" use:enhance={addTodo}>
	<input type="text" name="todo" />

	<!-- {#if form?.errors?.todo}
		<p class="error">This field is required</p>
	{/if} -->
	{#if form?.missing}
		<p class="error">This field is required</p>
	{/if}
	<button aria-busy={loading} class:secondary={loading} type="submit">
		{#if !loading}
			+ Add todo
		{/if}
	</button>
	<button formaction="?/clearTodos" class="secondary" type="submit">Clear</button>
</form>

{#if form?.success}
	<p>Added todo! 🥳</p>
{/if}

<style>
	ul {
		padding: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	span {
		text-transform: capitalize;
	}

	.delete {
		margin: 0;
		background: none;
		border: none;
	}

	.error {
		color: tomato;
	}

	.toast {
		position: absolute;
		top: 0;
		right: 0;
		width: 200px;
		height: 100px;
		background-color: #f0f;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
