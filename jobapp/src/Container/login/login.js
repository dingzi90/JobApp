import React from 'react'
import Logo from './../../Component/logo/logo'
import { List, InputItem, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import './login.css'
class Login extends React.Component {
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
    }
    register(){
        this.props.history.push('./register')
    }
    render() {
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem >用户</InputItem>
                       <WhiteSpace />
                        <InputItem>密码</InputItem>
                    </List>
                </WingBlank>
                <div style={{ height: '2rem' }} />
                <WingBlank>
                        <Button className="btn" type='primary'>登陆</Button>
                        <div style={{ height: '1rem' }} />
                        <Button className="btn" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login