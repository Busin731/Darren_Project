import { random } from "faker/locale/en";
import { Db } from ".";
import { SerializeDate } from "../types";
import { randomDate, weightedArrayElement } from "./utils";

export default (db: Db, { serializeDate }: SerializeDate) => {
	const realUsers = db.users.filter((user) => user.has_ordered);
	return Array.from(Array(300).keys()).map((id) => {
		const user = random.arrayElement<any>(realUsers);
		const body = random.arrayElement<any>(db.bodies);
		const user1 = random.arrayElement<any>(realUsers);
		const post = random.arrayElement<any>(db.posts);
		const date = randomDate(user.first_seen, user.last_seen);
		const resource = weightedArrayElement(
			["post", "user", "comment"],
			[12, 6, 9]
		);
		let resource_id = 0;
		if (resource === "post") resource_id = post.id;
		if (resource === "user") resource_id = user1.id;
		return {
			id,
			parent_id: id,
			resource,
			resource_id,
			email: user.email,
			user_id: user.id,
			date: serializeDate ? date.toISOString() : date,
			body: body["body"],
		};
	});
};
