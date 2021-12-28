import { Record } from 'ra-core';

import generateUsers from './users';
import generateTitles from './titles';
import generateBodies from './bodies';
import generatePosts from './posts';
import generateComments from './comments';
import finalize from './finalize';

export interface Db {
    users: Record[];
    titles: Record[],
    bodies: Record[]
    posts: Record[];
    comments: Record[];
}

export default (options = { serializeDate: true }): Db => {
    const db = {} as Db;
    db.users = generateUsers(db, options);
    db.titles = generateTitles();
    db.bodies = generateBodies();
    db.posts = generatePosts(db);
    db.comments = generateComments(db, options);
    finalize(db);

    return db;
};
