import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder-6153e.firebaseio.com/'
});

export default instance;