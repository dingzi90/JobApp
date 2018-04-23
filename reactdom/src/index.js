import React from 'react'
import ReactDom from 'react-dom'

import {createStore, applyMiddleware, compose}  from 'redux'
import thunk  from 'redux-thunk'
import { Provider} from  'react-redux'
import { counter } from './index.redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './App'


const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => { }
))

function Erying(){
    return <h2>二营</h2>
}

function San() {
    return <h2>三营</h2>
}
ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='/san'>三营</Link>
                    </li>
                </ul>
                <Route path='/' exact component={App} />
                <Route path='/erying' component={Erying} />
                <Route path='/san' component={San} />
            </div>
            
        </BrowserRouter>
        
    </Provider>),
    document.getElementById('root')
)

