import {
	List,
	Datagrid,
	TextField,
	ReferenceField,
	DateField,
	ListProps,
	EditButton,
	SearchInput,
	DateInput,
	ReferenceInput,
	SelectInput,
} from "react-admin";
import { ReactElement } from "react";
import UserLinkField from "../users/UserLinkField";
import ResourceLinkField from "../ResourceLinkField";

const commentFilter = [
	<SearchInput source="q" alwaysOn />,
	<ReferenceInput
		source="user_id"
		reference="comments"
		label="Author"
		allowEmpty>
		<SelectInput optionText="email" optionValue="user_id" />
	</ReferenceInput>,
	<DateInput source="date_gte" />,
];

const CommentsList = (props: ListProps): ReactElement => {
	return (
		<List
			{...props}
			filters={commentFilter}
			sort={{ field: "date", order: "DESC" }}>
			<Datagrid rowClick="edit">
				<ReferenceField
					source="user_id"
					reference="users"
					label="Author">
					<UserLinkField />
				</ReferenceField>
				<DateField source="date" />
				<TextField source="body" label="Comment" />
				<TextField source="resource" />
				<TextField source="resource_id" />
				<EditButton />
				<ResourceLinkField />
			</Datagrid>
		</List>
	);
};

export default CommentsList;
