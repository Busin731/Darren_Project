import { Db } from ".";
import { random } from "faker/locale/en";
import { randomDate, randomInt, weightedArrayElement } from "./utils";

const notifications = (db: Db) => {
    return Array.from(Array(100).keys()).map(id => {
        const post = random.arrayElement<any>(db.posts);
        const status = weightedArrayElement(
            ['DRAFT', 'QUEUED', 'PUBLISHED', 'EXPIRED'],
            [3,3,3,3]
        );
        const scope = weightedArrayElement(
            ['Global', 'User.leaders', 'Students', 'Customers'],
            [3,3,3,3]
        );
        const title = post.title;
        const body = post.body;
        const readCount = randomInt(300, 1000);
        let category = weightedArrayElement(
            ['animals', 'beard', 'business', 'cars', 'city', 'flowers', 'food', 'nature', 'people', 'sports', 'tech', 'travel'],
            [3,3,3,3,3,3,3,3,3,3,3]
        )
        let index = randomInt(1,10);
        const image = {
            'src': 'https://marmelab.com/posters/' + category + '-' + index + '.jpeg'
        }
        const publishAt = randomDate();
        const expireAt = new Date();

        return {
            id,
            scope,
            status,
            title,
            readCount,
            body,
            image,
            publishAt,
            expireAt
        }
    })
}

export default notifications;