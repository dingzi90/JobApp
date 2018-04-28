import  React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import reducers from './reducer'
import './config'
import './index.css'
import Login from './Container/login/login'
import Register from './Container/register/register'
import AuthRouter from './Component/AuthRouter/AuthRouter'
import Bossinfo from './Container/bossinfo/bossinfo'
import Geniusinfo from './Container/geniusinfo/geniusinfo'
 

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f => f
))

ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRouter></AuthRouter>
                <Switch>
                    <Route path='/bossinfo'  component={Bossinfo}></Route>
                    <Route path='/geniusinfo' component={Geniusinfo}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
