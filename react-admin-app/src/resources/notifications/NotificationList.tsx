import * as React from 'react';
import {
     List ,
     Datagrid,
     TextField,
     RichTextField,
     SearchInput,
     SelectInput,
     ListProps
} from 'react-admin';
import RunField from './RunField';
import NotificationAction from './NotificationAction';
import StatusField from './StatusField';

const Filters = [
     <SearchInput source='q' alwaysOn/>,
     <SelectInput source="status" choices={[
          { id: 'DRAFT', name: 'Draft' },
          { id: 'PUBLISHED', name: 'Published' },
          { id: 'EXPIRED', name: 'Expired' },
      ]} />
]

const NotificationList = (props : ListProps) => {
     return(
          <List
               {...props}
               sort={{ field: 'publishAt', order: 'DESC' }}
               filters={Filters}
          >
               <Datagrid >
                    <TextField source='id' label={'Id'}/>
                    <TextField source='scope' label={'Scope'}/>
                    <RichTextField  source='body' label={'Notifications'}/>
                    <StatusField/>
                    <RunField/>
                    <NotificationAction/>
               </Datagrid>
          </List>
     )
}

export default NotificationList