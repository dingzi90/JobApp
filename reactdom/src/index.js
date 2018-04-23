import React from 'react'
import ReactDom from 'react-dom'

import {createStore, applyMiddleware}  from 'redux'
import thunk  from 'redux-thunk'
import { counter, addGUN, removeGUN, addGUNAsync } from './index.redux'
import App from './App'


const store = createStore(counter,applyMiddleware(thunk))

function render(){
    ReactDom.render(<App store={store} addGUNAsync={addGUNAsync} addGUN={addGUN} removeGUN={removeGUN} />, document.getElementById('root'))
}
render()

store.subscribe(render)

