import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorozation'] = 'AUTH_TOKEN FROM INSTANCE';

export default instance;