import * as React from 'react';
import { useListController, ListContextProvider } from 'react-admin';

const ListBase = ({ children, ...props }: any) => (
    <ListContextProvider value={useListController(props)}>
        {children}
    </ListContextProvider>
);

export default ListBase;