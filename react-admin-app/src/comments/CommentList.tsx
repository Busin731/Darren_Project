import React from "react";
import { 
    Datagrid, 
    List,
    TextField,
    TextInput,
    ReferenceInput,
    SelectInput,
    DateInput,
    EditButton,
    ShowButton,
    ReferenceField,
    DateField,
    EmailField,
    TopToolbar,
    FilterButton,
    ExportButton,
    AutocompleteInput
} from "react-admin";

interface CommentProps {
    id: number;
    postId: number;
    userId: number;    
}

const ListActions = () => (
    <TopToolbar>
        <FilterButton/>
        <ExportButton/>
    </TopToolbar>
);

const CommentList: React.FC = (props) => {
    const commentFilters = [
        <TextInput source="q" label="Search" alwaysOn />,
        <ReferenceInput source="email" reference="users" label="Author">
            <SelectInput optionText="email" />
        </ReferenceInput>,
        <DateInput source="created_at" />
    ];

    const ButtonGroup = ({record, ...other}: any) => <ShowButton to={`/posts/${record.postId}/show`} />

    return (
        <List {...props} filters={commentFilters} actions={<ListActions />}>
            <Datagrid>
                <TextField source="id" label={"ID"}/>
                <EmailField source="email" label={"Author"} />
                <ReferenceField source="postId" reference="posts" label={"Resource"}>
                    <TextField source="title" />
                </ReferenceField> 
                {/* { props.userId && 
                    <ReferenceField source="userId" reference="users" label={"Resource"}>
                        <TextField source="name" />
                    </ReferenceField> 
                } */}
                <DateField source="created_at" label={"At"} />
                <TextField source="body" label={"Comment"}/>
                <EditButton />
                <ButtonGroup />                
            </Datagrid>
        </List>
    )
}

export default CommentList;