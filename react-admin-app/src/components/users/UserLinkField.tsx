import * as React from "react";
import { Link, FieldProps } from "react-admin";

import FullNameField from "./FullNameField";
import { User } from "../../types";

const UserLinkField = (props: FieldProps<User>) =>
	props.record ? (
		props.basePath === "users" ? (
			<Link to={`/users/${props.record.id}`}>
				<FullNameField {...props} />
			</Link>
		) : (
			<FullNameField {...props} />
		)
	) : null;

UserLinkField.defaultProps = {
	source: "user_id",
	addLabel: true,
};

export default UserLinkField;
