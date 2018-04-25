import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

@withRouter
class AuthRouter extends React.Component{
    componentDidMount(){
        //获取用户信息
        //登陆状态
        const publicList = ['/login','/register']
        const pathname = this.props.location.pathname
        if (publicList.indexOf(pathname)>-1) {
            return null
        }
        axios.get('/user/info')
        .then(res => {
            if(res.status ===200){
                if(res.data.code === 0){
                    //有登陆信息
                }else{
                    this.props.history.push('/login')
                }
                console.log(res.data)
            }
        })
    }

    render() {
        return <div></div>
    }
}

export default AuthRouter