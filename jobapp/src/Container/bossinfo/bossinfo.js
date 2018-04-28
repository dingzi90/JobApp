import React  from  'react'
import { NavBar, InputItem, TextareaItem, Button, WingBlank } from 'antd-mobile'
import AvatarSelector  from './../../Component/avatar-selecor/avatar-selecor'





class Bossinfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:'',
            compang:'',
            money:'',
            desc:'',
            avatar:''
        }
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    render(){
        return(
            <div>
                <NavBar mode="dark">Boss完善信息</NavBar>
                <AvatarSelector 
                    selectAvatar = {(imgName) =>{
                        this.setState({
                            avatar:imgName
                        })
                    }}
                >
                </AvatarSelector>
                <div style={{ height: '1rem' }} />
                <InputItem
                    onChange={(v) => this.handleChange('title',v)}
                >
                    招聘职位
                </InputItem>

                <InputItem
                    onChange={(v) => this.handleChange('compang', v)}
                >
                    公司名称
                </InputItem>

                <InputItem
                    onChange={(v) => this.handleChange('money', v)}
                >
                    职位薪资
                </InputItem>

                <TextareaItem
                    title='职位简介'
                    rows={3}
                    autoHeight
                    onChange={(v) => this.handleChange('desc', v)}
                >
                </TextareaItem>
                <div style={{ height: '2rem' }} />
                <WingBlank>
                    <Button type='primary'>保存</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Bossinfo