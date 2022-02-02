import * as React from 'react';
import {
    Datagrid,
    TextField,
    RichTextField
} from 'react-admin';
import RunField from './RunField';
import NotificationAction from './NotificationAction';
import StatusField from './StatusField';
import NotificationDrawerList from './NotificationDrawerList';
import { Fragment, useState, useEffect} from 'react';

const NotificationDataGrid = (props: any) => {
    const [data, setData] = useState<any>({});
    const RowClick = (id: any, basePath: any) => {     
        window.open(data[id].link, '_blank');
        return `${basePath}`
    }
    useEffect(() => {
        setData(props.data);
    },[props])
    return (
        <Fragment>
            <Datagrid rowClick={RowClick}>
                <TextField source='id' label={'Id'} />
                <TextField source='scope' label={'Scope'} />
                <RichTextField source='body' label={'Notifications'} />
                <StatusField />
                <RunField />
                <NotificationAction />
            </Datagrid>
            <NotificationDrawerList props={props}/>
        </Fragment>
    )
}

export default NotificationDataGrid