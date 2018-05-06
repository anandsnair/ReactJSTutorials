import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-554bd.firebaseio.com/'
});

export default instance;