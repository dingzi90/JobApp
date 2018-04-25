import React from 'react'
import Logo from './../../Component/logo/logo'
import { List, InputItem, Radio, Button, WhiteSpace, WingBlank } from 'antd-mobile';
class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            type:'genius'
        }
    }
    register(){
        this.props.history.push('./login')
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem>
                        <WhiteSpace  />
                        <InputItem>密码</InputItem>
                        <WhiteSpace  />
                        <InputItem>确认密码</InputItem>
                        <WhiteSpace  />
                        <RadioItem checked={this.state.type === 'genius'}>
                            牛人
                        </RadioItem>
                        <WhiteSpace  />
                        <RadioItem checked={this.state.type === 'boss'}>
                            Boss
                        </RadioItem>
                        <WhiteSpace  />
                        
                    </List>
                </WingBlank>
                <div style={{ height: '2rem' }} />
                <WingBlank>
                    <Button className="btn" type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register