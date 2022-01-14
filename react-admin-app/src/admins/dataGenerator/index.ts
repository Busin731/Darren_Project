import { Record } from "react-admin";
import users from "./users.json";
import posts from "./posts.json";
import generateComments from "./comments";
import generateNotifications from "./notification";

export interface Db {
    users: Record[];
    posts: Record[];
    comments: Record[];
    notifications: Record[];
};

const dataGenerator = (): Db => {
    const db = {} as Db;
    db.users = users;
    db.posts = posts;
    db.comments = generateComments(db);
    db.notifications = generateNotifications(db);
    // finalize(db);
    return db;
};

export default dataGenerator;