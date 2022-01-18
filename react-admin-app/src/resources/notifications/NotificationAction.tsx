import * as React from 'react';
import { EditButton,DeleteButton } from "react-admin";
import DuplicateButton from './DuplicateButton';

const NotificationAction = (props: any) => {
    return (
        <div style={{ width : 300}}>
            <EditButton basePath={props.basePath} record={props.record}/>
            <DeleteButton basePath={props.basePath} record={props.record}/>
            <DuplicateButton record = {props.record}/>
        </div>
    )
}

NotificationAction.defaultProps = {
    addLabel: true,
    source: "Actions"
}

export default NotificationAction;