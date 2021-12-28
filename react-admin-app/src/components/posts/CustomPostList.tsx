import { keyBy } from 'lodash';
import { Fragment } from 'react';
import {
    useQuery,
    Datagrid,
    TextField,
    Pagination,
    Loading,
} from 'react-admin';
import { useState } from 'react';

const CustomList = () => {
    const [page, setPage] = useState<number>(1);
    const [perPage, setPerPage] = useState(25);
    const [sort, setSort] = useState({ field: 'id', order: 'ASC' })
    const { data, total, loading, error } = useQuery({
        type: 'getList',
        resource: 'posts',
        payload: {
            pagination: { page, perPage },
            sort,
            filter: {},
        }
    });

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <p>ERROR: {error}</p>
    }
    return (
        <Fragment>
            <Datagrid 
                data={keyBy(data, 'id')}
                ids={data.map(({ id }: any) => id)}
                currentSort={sort}
                setSort={(field, order: any) => setSort({ field, order })}
            >
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="body" />
            </Datagrid>
            <Pagination
                // @ts-ignore
                page={page}
                setPage={setPage}
                perPage={perPage}
                setPerPage={setPerPage}
                total={total}
            />
        </Fragment>
    );
}

export default CustomList;