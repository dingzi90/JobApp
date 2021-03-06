import React  from  'react'
import { NavBar, InputItem, TextareaItem, Button, WingBlank } from 'antd-mobile'
import AvatarSelector  from './../../Component/avatar-selecor/avatar-selecor'
import {connect} from 'react-redux'
import {updata} from './../../redux/user.redux'
import { Redirect} from 'react-router-dom'




@connect(
    state => state.user,
    {updata}
)
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
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return(
            
            <div>
                {redirect && redirect!==path ? <Redirect to={this.props.redirectTo}></Redirect>:null}
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
                    <Button 
                    onClick={() => {
                        this.props.updata(this.state)
                    }}
                    type='primary'>保存  
                    
                    </Button>
                </WingBlank>
            </div>
        )
    }
}

export default Bossinfo