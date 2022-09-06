import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3000',
    //baseURL: 'http://192.168.1.5:3000', // USB
    baseURL: 'http://10.0.2.2:3000',
});

export default api;
