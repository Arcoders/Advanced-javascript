import axios from '../../libs/axios/index';
import parsedMessages from '../../parsers/parsedMessages'

const Auth = {
    register: async (credentials) => {
        try {
            await axios().post('auth/register', credentials);
       } catch (error) {
           return parsedMessages(error)
       } 
    },
    login: async (credentials) => {
        try {
            const {data} = await axios().post('auth/login', credentials);
       } catch (error) {
            return parsedMessages(error)
       } 
    } 
}

export default Auth;