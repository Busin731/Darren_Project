import React from "react";
import { ImageField } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from "react";
const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    showButton: {
      marginTop: '13px',
      marginBottom: '13px',
    },
    img: {
        margin: '0px !important',
        '& img': {
            width: '390px',
            margin: '0px !important',
        }
    }
  });

const PreviewImage = ({ record, source }:any) => {
    const classes = useStyles();
    if (typeof (record) == "string") {
        record = {
            [source]: record
        }
    }
    return (
        <Fragment>
            <ImageField 
                className={classes.img} 
                record={record}
                source={source}
            />
        </Fragment>
    )
  }

export default PreviewImage;