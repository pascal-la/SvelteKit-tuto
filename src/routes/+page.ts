import type { Post } from "@prisma/client";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, depends }) => {
	// if we use regular `event` parameter, use svelteKit's `event.fetch`
	// or we can destructure like so (to prevent uncomprehensive error)

	const random = Math.round(Math.random() * 30);
	const response = await fetch(`/api/posts?limit=${random}`);

	// const response = await fetch("/api/posts");

	const posts: Post[] = await response.json();

	depends("app:posts");

	return { posts };
};

//? this is great, but sometimes we only want to run code on the server.
//? `+page.ts` is great for fetching data for the page, but we also have to
//? keep in mind that it runs on the server and browser and it won't work
//? if we need to use some secrets or want to use the file system or database
