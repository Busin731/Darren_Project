import { FieldProps } from "react-admin";
import Button from "@material-ui/core/Button";
import { Comment } from "./types";
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';

const LinkToRelatedResource = (props: FieldProps<Comment>) => {
    const { record } = props;

    return record ? (
        <Button
            size="small"
            color="primary" 
            href={`#/${record.resource}s/${record.resourceId}/show`}
        >
            <QuestionAnswerOutlinedIcon />
            {'Show'}
        </Button>
    ) : null;
}

export default LinkToRelatedResource;