import * as React from 'react';
import {
     List ,
     Datagrid,
     TextField,
     RichTextField,
     ListProps
} from 'react-admin';

const NotificationList = (props : ListProps) => {
    return(
       <List
            {...props}
            sort={{ field: 'date', order: 'DESC' }}
       >
            <Datagrid>
                <TextField source='id' label={'ID'}/>
                <TextField source='scope' label={'SCOPE'}/>
                <RichTextField source='body' label={'NOTIFICATION'}/>
                <TextField source='status' label={'STATUS'}/>
            </Datagrid>
       </List>
    )
}

export default NotificationList