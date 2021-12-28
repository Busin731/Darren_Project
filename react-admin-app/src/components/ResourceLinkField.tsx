import {
    ShowButton
} from 'react-admin';

const ResourceLinkField = ({ record }: any) => (
    <ShowButton to={`/${record.resource}s/${record.resource_id}`} label="Show comment" record={record} />
);

export default ResourceLinkField;