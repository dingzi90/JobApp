import React from 'react'
import {connect}  from 'react-redux'
import { addGUN, removeGUN, addGUNAsync} from './index.redux'
class App extends React.Component{
  /*   constructor(props) {
        super(props)
    } */
    
    render(){
        return(
            <div>
                <h1>现在有机枪{this.props.num}</h1>
                <button onClick={this.props.addGUN}>申请武器</button>
                <p></p>
                <button onClick={this.props.removeGUN}>回收武器</button>
                <p></p>
                <button onClick={this.props.addGUNAsync}>过两天再给</button>
            </div>
        )
       
    }
}
const mapStatetoProps = (state) => {
    return  {num:state}
}
const mapDispatchToProps = { addGUN, removeGUN, addGUNAsync}
export default App = connect(mapStatetoProps, mapDispatchToProps)(App)



