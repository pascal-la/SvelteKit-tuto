<div class="posts">
	<aside>
		<h4>Posts</h4>
		<nav>
			<ul>
				<li><a href="/posts/1">One</a></li>
				<li><a href="/posts/2">Two</a></li>
			</ul>
		</nav>
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
</style>
