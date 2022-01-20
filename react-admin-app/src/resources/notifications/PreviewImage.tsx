import React, { useEffect } from "react";
import { ImageField } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from "react";
import { selectedImage } from "../../admins/actions";
import { useDispatch } from 'react-redux';
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
            margin: '0px !important',
        }
    }
  });

const PreviewImage = ({ record, source }:any) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    if (typeof (record) == "string") {
        record = {
            [source]: record
        }
    }
    useEffect(() => {
        dispatch(selectedImage(record.src));
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[record.src])
    
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