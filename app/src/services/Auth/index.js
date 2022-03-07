import axios from '../../libs/axios/index';

const Auth = {
    register: async (credentials) => {
        try {
            const {data} = await axios().post('auth/register', credentials);
            return data
       } catch (error) {
           return {
               status : 'error',
               message : 'Server error',
           };
       } 
    },

    login: async (credentials) => {
        try {
            const {data} = await axios().post('auth/login', credentials);
            return data 
       } catch (error) {
           return {
               status : 'error',
               message : 'Server error',
           };
       } 
    } 
}

export default Auth;