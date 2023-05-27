import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';
const { VITE_API_URL } = getEnvVariables();

const NostalgiifyApi = axios.create({
    baseURL: VITE_API_URL.VITE_API_URL,
});

export default NostalgiifyApi;
