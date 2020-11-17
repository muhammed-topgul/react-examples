import axios from 'axios';
import {JSON_PLACEHOLDER_BASE_URL} from "../common/env";

export default axios.create({
   baseURL: JSON_PLACEHOLDER_BASE_URL
});