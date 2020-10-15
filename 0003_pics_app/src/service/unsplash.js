import axios from 'axios';
import {API_URL} from "../common/env";

export default axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: ' Client-ID KxV_yNKnhUky191XTxHVXe-ksgHR2WRqZUVfD2JPO3Q'
    }
});