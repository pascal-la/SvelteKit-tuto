import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

import db from "$lib/database";

// export const GET: RequestHandler = async (event) => {
// 	// const posts = await db.post.findMany();
// 	const posts = await db.post.findMany({
// 		take: Math.round(Math.random() * 30)
// 	});

// 	event.setHeaders({
// 		// "Cache-Control": "public, max-age=0, s-maxage=60"
// 		"Cache-Control": "max-age=60"
// 	});

// 	// return new Response(JSON.stringify(posts));
// 	return json(posts);

// 	// json(posts):
// 	// Automatically converts the posts object to JSON and sets the correct headers.This is cleaner and recommended for SvelteKit projects.
// 	// new Response(JSON.stringify(posts)):
// 	// Requires you to manually handle the JSON conversion and headers. It works, but it's more verbose and error-prone.
// 	// What Is Different?
// 	// Headers:
// 	// json(posts) automatically sets Content - Type: application / json, whereas with new Response(), you have to manually set the headers.
// 	// Convenience:
// 	// json(posts) is more convenient in SvelteKit and should be your go - to in this context.
// };

export const GET: RequestHandler = async ({ url }) => {
	const limit = Number(url.searchParams.get("limit") ?? 30);
	const order = url.searchParams.get("order") ?? "asc";

	const posts = await db.post.findMany({
		orderBy: { id: order },
		take: limit
	});

	return json(posts);
};
