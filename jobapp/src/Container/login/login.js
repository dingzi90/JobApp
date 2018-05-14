import React from 'react'
import Logo from './../../Component/logo/logo'
import { List, InputItem, Button, WingBlank } from 'antd-mobile';
import {connect}  from 'react-redux'
import {login}  from './../../redux/user.redux'
import {Redirect} from 'react-router-dom'

import './login.css'

@connect(
    state => state.user,
    {login}
)
class Login extends React.Component {
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.state = {
            user: '',
            pwd: ''
        }
    }
    register(){
        this.props.history.push('/register')
    }
    handleLogin() {
        this.props.login(this.state)
        // console.log(this.state)
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Logo></Logo>
                <WingBlank>
                    {this.props.msg ? <p className="err">{this.props.msg}</p> : null}
                    <List>
                        <InputItem 
                            onChange={v => this.handleChange('user', v)}
                        >用户</InputItem>
                        <InputItem
                            type="password"
                            onChange={v => this.handleChange('pwd', v)}
                        >密码</InputItem>
                    </List>
                </WingBlank>
                <div style={{ height: '2rem' }} />
                <WingBlank>
                    <Button className="btn" type='primary' onClick={this.handleLogin}>登陆</Button>
                    <div style={{ height: '1rem' }} />
                    <Button className="btn" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login