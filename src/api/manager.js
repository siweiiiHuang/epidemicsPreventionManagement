import axios from '~/axios';

//学生刷卡登录
export function login(form) {
    return axios.post('/student/login', form);
}

//学生注册
export function register(form) {
    return axios.post('/student/register', form);
}

//管理员登录
export function administratorsLogin(form) {
    return axios.post('/administrators/login', form);
}

//管理员获取所有学生登录记录
export function getLoginRecordList() {
    return axios.get('/administrators/getLoginRecordList');
}
