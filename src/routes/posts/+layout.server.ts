import db from "$lib/database";
import type { LayoutServerData } from "./$types";

export const load: LayoutServerData = async (event) => {
	const posts = await db.post.findMany({
		select: {
			title: true,
			slug: true
		},
		take: 4
	});
	return { posts };
};
