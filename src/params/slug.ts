import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param) => {
	console.log("/posts/[slug=slug] => ", param);
	return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(param);
};
