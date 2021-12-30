import { Db } from ".";
import { uniqueArray } from "./utils";

const finalize = (db: Db) => {
    let comments = db.comments.sort(
        (e1, e2) => new Date(e2.createdAt).getTime() - new Date(e1.createdAt).getTime()
    )
    let ccs = comments.filter(comment => comment.resource === "comment");   // Comments on comment
    let nccs = comments.filter(comment => comment.resource !== "comment");  // None comments on comment
    let pcs = nccs.filter(comment => comment.resource === "post");          // Comments on post
    let ucs = nccs.filter(comment => comment.resource === "user");          // Comments on user
    let pcsResoureIds = pcs.map(comment => comment.resourceId);
    let ucsResoureIds = ucs.map(comment => comment.resourceId);
    let ccsIds = ccs.map(comment => comment.id);
    pcsResoureIds = pcsResoureIds.filter(uniqueArray);
    ucsResoureIds = ucsResoureIds.filter(uniqueArray);
    let chunk = ccs.length / (pcsResoureIds.length + ucsResoureIds.length);
    // @ts-ignore
    let i,j, temporary, chunks: any[] = [];
    for (i = 0, j = ccsIds.length; i < j; i += chunk) {
        temporary = ccsIds.slice(i, i + chunk);
        // @ts-ignore
        chunks.push(temporary);
    }
    let chkIndex = 0;
    // @ts-ignore
    nccs = nccs.map(comment => {
        const { resource, resourceId } = comment
        if (resource === "post" && pcsResoureIds.includes(resourceId)) {
            pcsResoureIds = pcsResoureIds.filter(id => id !== resourceId);
            temporary = chunks[chkIndex];
            comment.childrens = chunks[chkIndex].join(',');
            // @ts-ignore
            ccs = ccs.map(cc => {
                // @ts-ignore
                if (temporary?.includes(cc.id)) {
                    cc.resourceId = resourceId
                }
                return cc;
            })
            chkIndex++;
        }        
        if (resource === "user" && ucsResoureIds.includes(resourceId)) {
            ucsResoureIds = ucsResoureIds.filter(id => id !== resourceId);
            temporary = chunks[chkIndex];
            comment.childrens = chunks[chkIndex].join(',');
            // @ts-ignore
            ccs = ccs.map(cc => {
                // @ts-ignore
                if (temporary?.includes(cc.id)) {
                    cc.resourceId = resourceId
                }
                return cc;
            })
            chkIndex++;            
        }
        return comment;
    });

    db.comments = [...nccs, ...ccs];

    console.log(db);
}

export default finalize;