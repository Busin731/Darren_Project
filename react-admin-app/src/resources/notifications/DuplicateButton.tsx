import * as React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles({
    icon: { paddingRight: '5px',
        width: '17px',
        height: '17px'
     },
    link: {
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '13px'
    },
});

const DuplicateButton = (props: any) => {
    const { record } = props;
    const classes = useStyles();
    const handleClick = () => {
        navigator.clipboard.writeText(record.body)
    }
    return record ? (
        <Button
            color = {'primary'}
            onClick={handleClick}
            className={classes.link}
        >
            <FileCopyIcon className={classes.icon} />
            Duplicate
        </Button>
    ) : null;
};

export default DuplicateButton;
