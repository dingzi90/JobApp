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
        return(
            <div>
                <h1>现在有机枪{num}</h1>
                <buttom   onClick={() => store.dispatch(addGUN())}>申请武器</buttom>
                <p></p>
                <buttom   onClick={() => store.dispatch(removeGUN())}>回收武器</buttom>
            </div>
        )
       
    }
}

export default App



