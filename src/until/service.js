import axios from 'axios';
import router from '../router';
import qs from "querystring";
//状态码通用处理函数
const codeHandle = (res, callback) => {
    callback(res);
};


axios.defaults.timeout = 5000;
// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded',
        };
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);


axios.interceptors.response.use(
    res => {
        return res
    },
    error => {
        return Promise.reject(error);
    });

/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */

export const post = ({url, data, headers, callback}) =>{
    let param = qs.stringify(data);
    return axios.post(url, param, headers).then(res => res.data).catch(error => {
        if (error.response) {
            router.push('/404');
            console.log('响应错误')
        } else if (error.request) {
            router.push('/404');
        } else {
            console.log('Error', error.message);
        }
    }).then(res => {
        codeHandle(res, callback)
    });
};




export const get = ({url, data, callback}) =>{
    return axios.get(url,{params: data}).then(res => res.data).catch(err => {
        router.replace({
            path: '/404',
            query: {redirect: router.currentRoute.fullPath}
        })
    }).then(res => {
        codeHandle(res, callback)
        // if(res.code){
        //     callback(res)
        // }else {
        //     message.warn(msg);
        // }
    });
};










