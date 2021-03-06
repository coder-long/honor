import history from "../utils/history";
// import { hashHistory } from "react-router-dom";

export default function request(method, url, body) {
    method = method.toUpperCase();
    if (method === "GET") {
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }

    return fetch(url, {
        method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'token': sessionStorage.getItem('access_token') || '',
        },
        'Accept-Encoding': 'gzip,deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Access-Control-Allow-Origin': "*",
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
        body,

    }).then(res => {
        if (res.status == 401 || res.status == 403) {
            history.push("/login");
            return Promise.reject("Unauthorized.");
        } else {
            const token = res.headers.get('token');
            if (token) {
                sessionStorage.setItem('access_token', token);
            };
            return res.json()
        }
    })
};


export const get = url => request('GET', url);
export const post = (url, body) => request('POST', url, body);
export const put = (url, body) => request("PUT", url, body);
export const del = (url, body) => request('DELETE', url, body);