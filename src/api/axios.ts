import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/clean-kim/json-server',
    timeout: 1000
});

instance.interceptors.response.use(null
    , error => {
        console.log(error);
});

export default instance;