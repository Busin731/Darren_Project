import React, { Fragment } from "react";
import { 
    FunctionField ,
    Link,

} from "react-admin";

const Resource = (props:any) => {
    const { record } = props;
    return(
        <Fragment>
            {
                record.resource === "user" ? (
                    <Link to={`/users/${record.resourceId}/show`}>
                        <FunctionField render={() => `${record.resource}`}/>
                    </Link>
                ) : (<></>)
            }
            {
                record.resource === "post" ? (
                    <Link to={`/posts/${record.resourceId}/show`}>
                        <FunctionField render={() => `${record.resource}`}/>
                    </Link>
                ) : (<></>)
            }
            {
                record.resource === "comment" ? (
                    <Link to={`/comments/${record.resourceId}/show`}>
                        <FunctionField render={() => `${record.resource}`}/>
                    </Link>
                ) : (<></>)
            }
            
        </Fragment>
    )
}

Resource.defaultProps = {
    addLabel: true,
    source: "Resource"
}

export default Resource;