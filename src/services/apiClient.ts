import axios from 'axios'
import { apiUrl } from './apiUrl'

export function setupAPIClient(){

    const api = axios.create({
        baseURL: `${apiUrl}/api/v1`,
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error) => {
        if(error.response.status === 401){
            const win = window as any
            //deslogar
            win.location = '/'
        }
        return Promise.reject(error)
    })

    return api;
}