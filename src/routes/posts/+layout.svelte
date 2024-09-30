<script lang="ts">
	import type { LayoutServerData } from "./$types";

	export let data: LayoutServerData;

	console.log(data);
</script>

<div class="posts">
	<aside>
		<h4>Posts</h4>
		<nav>
			<ul>
				<li><a href="/posts/1">One</a></li>
				<li><a href="/posts/2">Two</a></li>
			</ul>
		</nav>
		<div class="layout">
			<aside>
				<nav>
					<h4>Posts</h4>

					<ul>
						{#each data.posts as { slug, title }}
							<li>
								<a href="/posts/{slug}">{title}</a>
							</li>
						{/each}
					</ul>
				</nav>
			</aside>
		</div>
	</aside>

	<main>
		<slot />
	</main>
</div>

<style>
	.posts {
		display: grid;
		gap: 2rem;
		grid-template-columns: 200px 60ch;
		margin-top: 2rem;
	}
	.layout {
		display: grid;
		grid-template-columns: 200px minmax(auto, 60ch);
		gap: 4rem;
		margin-top: 2rem;
	}
</style>
