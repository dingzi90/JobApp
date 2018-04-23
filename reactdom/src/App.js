import React from 'react'

class App extends React.Component{
  /*   constructor(props) {
        super(props)
    } */
    
    render(){
        const store = this.props.store
        const num = store.getState()
        const addGUN = this.props.addGUN
        const removeGUN = this.props.removeGUN
        const addGUNAsync = this.props.addGUNAsync
        return(
            <div>
                <h1>现在有机枪{num}</h1>
                <button onClick={() => store.dispatch(addGUN())}>申请武器</button>
                <p></p>
                <button onClick={() => store.dispatch(removeGUN())}>回收武器</button>
                <p></p>
                <button onClick={() => store.dispatch(addGUNAsync())}>过两天再给</button>
            </div>
        )
       
    }
}

export default App



