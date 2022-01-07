import { Db } from ".";
import { random } from "faker/locale/en";
import { randomDate, weightedArrayElement } from "./utils";

const comments = (db: Db) => {
    return Array.from(Array(100).keys()).map(id => {
        const user1 = random.arrayElement<any>(db.users);
        const user2 = random.arrayElement<any>(db.users);
        const post1 = random.arrayElement<any>(db.posts);
        const post2 = random.arrayElement<any>(db.posts);
        const date = randomDate();
        const resource = weightedArrayElement(
            // ["post", "user", "comment"],
            // [3, 3, 6]
            ["post", "user"],
            [3, 3]
        );
        let resourceId = -1;
        switch (resource) {
            case "post":
                resourceId = post1.id;
                break;
            case "user":
                resourceId = user1.id;
                break;
            default:
                break;
        }
        return {
            id,
            resource,
            resourceId,         // Resource Id { postId | userId | -1 }/
            email: user2.email, // Auther
            userId:user2.id, // Author
            body: post2.body,
            childrens: id,       // CSV 1, 3, 33, 42,
            date: date.toISOString()
        }
    })
}

export default comments;