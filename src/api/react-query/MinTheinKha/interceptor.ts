import axios, { AxiosInstance} from 'axios'

interface MyApi {
    get: AxiosInstance['get'];
    post: AxiosInstance['post'];
    delete: AxiosInstance['delete'];
    put: AxiosInstance['put'];
    patch: AxiosInstance['patch'];
}

//home ==> 192.168.1.7:3000
//BNK_Staff ==> 10.1.40.151:3000

const API:MyApi = axios.create({
    baseURL: 'http://192.168.1.7:3000/',
    withCredentials: true,
})

export default API;