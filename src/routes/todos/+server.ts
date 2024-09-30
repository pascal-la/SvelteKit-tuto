// import { json } from "@sveltejs/kit";
// import type { RequestHandler } from "./$types";

// import { addTodo, removeTodo } from "$lib/server/database";

// type Data = {
// 	success: boolean;
// 	errors: Record<string, string>;
// };

// export const POST: RequestHandler = async ({ request }) => {
// 	const formData = await request.formData();
// 	const todo = String(formData.get("todo"));

// 	const data: Data = {
// 		success: false,
// 		errors: {}
// 	};

// 	if (!todo) {
// 		data.errors.todo = "required";
// 		return json(data, { status: 400 });
// 	}

// 	addTodo(todo);
// 	data.success = true;

// 	return json(data);
// };

// export const DELETE: RequestHandler = async ({ request }) => {
// 	const formData = await request.formData();
// 	const todoId = Number(formData.get("id"));

// 	removeTodo(todoId);

// 	return json({ success: true });
// };

//! We have to implement all of this ourselves, which could be
//! really tedious especially with complicated forms.
//! This is why we should use SvelteKit Form Actions (cf. /routes/todos/+page.server.ts)
