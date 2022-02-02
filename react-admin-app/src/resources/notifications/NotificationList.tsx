import * as React from 'react';
import {
     List ,
     SearchInput,
     SelectInput,
     ListProps,
     TopToolbar,
     ExportButton,
     CreateButton,
     FilterButton
} from 'react-admin';
import ViewAsFeed from './ViewAsFeed';
import NotificationDataGrid from './NotificationDatagrid';

const ListActions = () => (
     <TopToolbar>
          <ViewAsFeed/>
          <FilterButton/>
          <CreateButton basePath="/notifications" />
          <ExportButton />
     </TopToolbar>
 );
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
               actions={<ListActions/>}
          >
               <NotificationDataGrid/>
          </List>
     )
}

export default NotificationList