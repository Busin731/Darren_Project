import * as React from 'react';
import {
     List ,
     Datagrid,
     TextField,
     RichTextField,
     ListProps
} from 'react-admin';
import RunField from './RunField';
import NotificationAction from './NotificationAction';

const NotificationList = (props : ListProps) => {
    return(
       <List
            {...props}
            sort={{ field: 'date', order: 'DESC' }}
           
       >
            <Datagrid >
                <TextField source='id' label={'Id'}/>
                <TextField source='scope' label={'Scope'}/>
                <RichTextField  source='body' label={'Notifications'}/>
                <TextField source='status' label={'Status'}/>
                <RunField/>
                <NotificationAction/>
            </Datagrid>
       </List>
    )
}

export default NotificationList