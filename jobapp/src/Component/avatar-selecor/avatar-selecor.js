import React from 'react'
import { Grid, List} from 'antd-mobile'
import './avatar-selecor.css'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component {
    static propTypes = {
        selectAvatar :PropTypes.func.isRequired//定义数据类型//必传
    }
    constructor(props) {
        super(props)
        this.state = {
            icon: '',
            text: ''
        }
    }
    render() {
        const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
                            .split(',')
                            .map(v=>({
                                icon:require(`./img/${v}.png`),
                                text:v
                            }))

        const gridHeader = this.state.icon
            ? (<div className="gridHeader">
                <span>已选择头像</span>
                <img  src={this.state.icon}  alt=''  style={{width:20}}/>
                </div>)
            : <p className="gridHeader">请选择头像</p>
        return (
            <div>
                <List renderHeader={() => gridHeader}>
                    <Grid
                        data={avatarList}
                        columnNum={5}
                        onClick={e => {
                            this.setState(e)
                            this.props.selectAvatar(e.text)
                        }}
                    />
                </List>
                
            </div>
        )
    }
}

export default AvatarSelector