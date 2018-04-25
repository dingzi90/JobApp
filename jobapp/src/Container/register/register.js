import React from 'react'
import Logo from './../../Component/logo/logo'
import { List, InputItem, Radio, Button, WhiteSpace, WingBlank } from 'antd-mobile';
class Register extends React.Component {
    constructor(props){
        super(props)
        this.hancleRegister = this.hancleRegister.bind(this)
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius'
        }
    }
    hancleRegister(){
        console.log(this.state)
    }
    register(){
        this.props.history.push('/login')
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>this.handleChange('user',v)}
                        >用户名</InputItem>
                        <WhiteSpace  />
                        <InputItem
                            onChange={v => this.handleChange('pwd', v)}
                            type='password'
                        >密码</InputItem>
                        <WhiteSpace  />
                        <InputItem
                            type='password'
                            onChange={v => this.handleChange('repeatpwd', v)}
                        >确认密码</InputItem>
                        <WhiteSpace  />
                    </List>
                    <WhiteSpace />
                    <List>
                        <RadioItem 
                            checked={this.state.type === 'genius'}
                            onChange={() => this.handleChange('type','genius')}
                        >牛人
                        </RadioItem>
                        <WhiteSpace  />
                        <RadioItem 
                            checked={this.state.type === 'boss'}
                            onChange={() => this.handleChange('type', 'boss')}
                        >Boss
                        </RadioItem>
                        <WhiteSpace  />
                        
                    </List>
                </WingBlank>
                <div style={{ height: '2rem' }} />
                <WingBlank>
                    <Button className="btn" type='primary' onClick={this.hancleRegister}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register