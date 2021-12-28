import { weightedBoolean } from "./utils";
import { random } from "faker/locale/en";

export default function (db: any) {
  // add 'ordered_once' group
  db.users
    .filter((user: any) => user.nb_commands === 1)
    .forEach((user: any) => user.groups.push("ordered_once"));

  // add 'compulsive' group
  db.users
    .filter((user: any) => user.total_spent > 1500)
    .forEach((user: any) => user.groups.push("compulsive"));

  // add 'regular' group
  db.users
    .filter(() => weightedBoolean(20))
    .forEach((user: any) => user.groups.push("regular"));

  const postComments = db.comments.filter(
    (comment: any) => comment.resource === "post"
  );

  const userComments = db.comments.filter(
    (comment: any) => comment.resource === "user"
  );

  const commentComments = db.comments.filter(
    (comment: any) => comment.resource === "comment"
  );

  const parentComments = [...postComments, ...userComments];

  const ccs = commentComments.map((comment: any) => {
    const parentComment = random.arrayElement<any>(parentComments);
    comment.parent_id = parentComment.parent_id;
    return comment;
  });

  db.comments = [...parentComments, ...ccs];

  // add settings
  db.settings = [
    {
      id: 1,
      configuration: {
        url: "http://posters-galore.com/",
        mail: {
          sender: "julio@posters-galore.com",
          transport: {
            service: "fakemail",
            auth: {
              user: "fake@mail.com",
              pass: "f00b@r",
            },
          },
        },
        file_type_whiltelist: [
          "txt",
          "doc",
          "docx",
          "xls",
          "xlsx",
          "pdf",
          "png",
          "jpg",
        ],
      },
    },
  ];
}
