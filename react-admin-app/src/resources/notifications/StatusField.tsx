import * as React from 'react';
import { FunctionField } from 'react-admin';

const StatusField = (props : any) => {
    const { record } = props;
    let count = "(" + record.readCount + " read)"
    return(
        <div style={{ textAlign: 'center' }}>
            <FunctionField render={ () => record.status }/>
            <br />
            <FunctionField render={ ()  => count}/>
        </div>
    )
}

StatusField.defaultProps = {
    addLabel: true,
    source: 'Status'
}

export default StatusField;