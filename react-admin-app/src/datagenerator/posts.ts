import { random } from 'faker/locale/en';
import { Db } from '.';

export default (db: Db) => {
    const realUsers = db.users.filter(user => user.has_ordered);
    return Array.from(Array(100).keys()).map(id => {
        const user = random.arrayElement<any>(realUsers);
        return {
            id,
            user_id: user.id,
            title: db.titles[id]["title"],
            body: db.bodies[id]["body"]
        }
    })
}