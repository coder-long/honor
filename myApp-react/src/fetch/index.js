import /* request, */ { post, get,/*  put, del */ } from './request'

import { ROOT_URL } from './config'


//请求写在这里
export const getData = () => get(ROOT_URL);
export const postData = (body) => post(ROOT_URL, body)
export const getUsetInfo = () => get(ROOT_URL + '/users/login-test')