import Axios from 'axios';

const axios = () => {
    return Axios.create({
        baseURL: 'http://localhost:3333/api',
        timeout: 3000,  
    })
}

export default axios