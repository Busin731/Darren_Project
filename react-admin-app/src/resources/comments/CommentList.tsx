import {
    List,
    Datagrid,
    TextField,
    EmailField,
    DateField,
    ListProps,
    SearchInput,
    DateInput,
    ReferenceInput,
    SelectInput
} from "react-admin";
import Resource from "./Resource";
import ActionButton from "./ActionButton";

const commentFilters = [
    <SearchInput source="q" alwaysOn/>,
    <DateInput source="date_lte" label="Before"/>,
    <DateInput source="date_gte" label="After"/>,
    <ReferenceInput 
        source="userId" 
        label="Author" 
        reference="users" 
        allowEmpty
    >
        <SelectInput optionText="email"/>
    </ReferenceInput>,
];

const CommentList = (props: ListProps) => {
    return (
        <List 
            {...props}
            sort={{ field: 'date', order: 'DESC' }}
            filters={commentFilters}
        >
            <Datagrid >
                <EmailField source="email" label="Author" />
                <Resource/>
                <TextField source="body" label="Comment" />
                <DateField source="date" label="Date" />
                <ActionButton/>
            </Datagrid>
        </List>
    )
}

export default CommentList;