import axios from 'axios';
import {YOUTUBE_API_KEY, YOUTUBE_URL} from "../common/env";

export default axios.create({
    baseURL: YOUTUBE_URL,
    params: {
        part: 'snippet',
        maxResults: 50,
        key: YOUTUBE_API_KEY
    }
});