import React from "react";
import { ImageField } from "react-admin";

const PreviewImage = ({ record, source }:any) => {

    console.log( "first",  record, source);
    if (typeof (record) == "string") {
        record = {
            [source]: record
        }
    }

    console.log("second",record, source);
    return <ImageField record={record} source={source}/>
  }

export default PreviewImage;