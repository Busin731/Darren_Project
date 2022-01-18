import * as React from 'react';
import { FunctionField } from 'react-admin';

const RunField = ( props : any ) => {
    const { record } = props;
    const publishAt = new Date(record.publishAt).toDateString();
    const expireAt = new Date(record.expireAt).toDateString();
    let from = publishAt.slice(4);
    let to = expireAt.slice(4);
    let days = '('+ getDays(publishAt,expireAt)  + ' days)';
    let period = from + '-' + to ; 
      

    function getDays(start:string, last: string) {
        //initialize dates with Date object
        const date1 = new Date(start);
        const date2 = new Date(last);
    
        // calculation for converting a day into milliseconds
        const oneDay = 1000 * 60 * 60 * 24;
    
        // calculation for the time difference between start and last
        const diffTime = date2.getTime() - date1.getTime();
    
        // calculation for the days between start and last
        const diffDays = Math.round(diffTime / oneDay);
        // return number of days
        return diffDays;
    }

    return (
        <div style={{ width:200, textAlign: 'center' }} >
            <FunctionField render={() => period} />
            <br/>
            <FunctionField render={() => days} />
        </div>
    )
}

RunField.defaultProps = {
    addLabel: true,
    source: "Runs"
}

export default RunField