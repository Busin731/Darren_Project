import React from "react";
import { EditButton } from "react-admin";


const ActionButton = (props:any) => {
    return (
        <EditButton basePath={props.basePath} record={props.record}/>
    )
}

ActionButton.defaultProps = {
    addLabel: true,
    source: "Actions"
}

export default ActionButton;