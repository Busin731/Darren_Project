import * as React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { viewAsFeed } from "../../admins/actions";

const useStyles = makeStyles({
    icon: {
        paddingRight: '5px',
        width: '17px',
        height: '17px'
    },
    
    link: {
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '13px',

    },
});

const ViewAsFeed = (props: any) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(viewAsFeed('true'));
    }
    return (
        <Fragment >
            <Button
                color={'primary'}
                onClick={handleClick}
                className={classes.link}
            >
                <ListAltIcon className={classes.icon} />
                View As Feed
            </Button>
        </Fragment>
    )
};

export default ViewAsFeed;
