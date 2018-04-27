import axios from 'axios'
import { getRedirectPath} from './../util'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
    redirectTo:'',
    isAuth:false,
    msg:'',
    user:'',
    pwd:'',
    type:''
}

export function user(state = initState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth:true, ...action.payload}
        case LOGIN_SUCCESS:
            return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
        case LOAD_DATA:
            return {...state,...action.payload}
        case ERROR_MSG:
            return {...state, isAuth:false, msg:action.msg}
        default:
            return state
    }
}


function registerSuccess(data){
    return {type:REGISTER_SUCCESS, payload: data}
}

function loginSuccess(data) {
    return { type: LOGIN_SUCCESS, payload: data }
}

export function loadData(data) {
    return { type: LOAD_DATA, payload: data }
}

function error_Msg(msg){
    return {msg, type:ERROR_MSG}
}

export function login({user,pwd}){
    if(!user || !pwd){
        return error_Msg('请输入用户名密码')
    }
    return dispatch => {
        axios.post('/user/login', { user, pwd})
            .then(res => {
                console.log(res)
                if (res.status === 200 && res.data.code === 0) {//注册成功
                    dispatch(loginSuccess(res.data.data))
                } else {//注册失败
                    dispatch(error_Msg(res.data.msg))
                }
            })
    }
}
export function regisger({user,pwd,repeatpwd,type}){
    if(!user || !pwd){
        return error_Msg('用户名密码必须输入')
    }
    if(pwd !== repeatpwd){
        return error_Msg('密码和确认密码不同')
    }
    return dispatch => {
        axios.post('/user/register', { user, pwd, type })
            .then(res => {
                console.log(res)
                if (res.status === 200 && res.data.code === 0) {//注册成功
                    dispatch(registerSuccess({user, pwd, type}))
                } else {//注册失败
                    dispatch(error_Msg(res.data.msg))
                }
            })
    }
}