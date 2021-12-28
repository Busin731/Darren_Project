import jsonRestProvider from 'ra-data-fakerest';
import data from './db.json';

const disableFakeFetchRequestsLogs = true;

export default jsonRestProvider(data, disableFakeFetchRequestsLogs);