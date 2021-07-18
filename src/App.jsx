import React from 'react';
import './App.css';
import Counter from './counter'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TextTest from './test'
import { combineReducers } from 'redux';
import {NavigationBar, Drawer} from './components'
import rootReducers from './components/Reducers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {EntrancePages} from './pages'

const cc = () => <div>
<h1>as;dmas</h1>
pmfpoasmfpoasmfpoamsf
</div>


const initialState = {
  count: 0,
  age: 15,
  name: "Ahmad",
  c: cc()
}


const initialState2 = {
  
  text: "mohammed",
}


function Reducer(state = initialState, action) {
  const testState = state
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count+1,
        
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count-1,
        
      }
    default:
      return testState;
  }
}

function Reducer2(state = initialState2, action) { 
  switch (action.type) {
    case 'INCREMENT':
      return {
        text: "INCREMENT"
      }
    case 'DECREMENT':
      return {
        text: "DECREMENT"
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({Reducer, Reducer2 })
const store = createStore(rootReducer)
const storeNavDrawer = createStore(rootReducers)

const testingReact = () => { 
  return (
    <div>
      <Provider store={store}>
        <Provider store = {storeNavDrawer}>
          <NavigationBar></NavigationBar>
          <Drawer></Drawer>
        </Provider>
        <div className="App">
          <Counter gg="mohammed"></Counter>
          <Link to='/loginPage'>to log in</Link>
          <br></br>
          <Link to='/signUp'>to sign up</Link>
          <br></br>
          <Link to='/forgetPage'>to forget password</Link>
          <br></br>
          <Link to='/code'>to code</Link>
          <br></br>
          <Link to='/resetPassword'>to reset password</Link>
        </div>
        <TextTest></TextTest>
      </Provider>
    </div>
  )
}

function App() {
  const id = 12
  return (
    <Router>
      <Switch>
          <Route path='/' exact  component={testingReact} />
          <Route path='/signUp' component={()=> <EntrancePages typePage={"signUp"}/>} />
          <Route path='/loginPage' component={()=> <EntrancePages typePage={"login"}/>} /> 
          <Route path='/forgetPage' component={()=> <EntrancePages typePage={"forget"}/>} /> 
          <Route path='/code' component={()=> <EntrancePages typePage={"code"}/>} /> 
          <Route path='/resetPassword' component={()=> <EntrancePages typePage={"reset"}/>} />   
      </Switch>
    </Router>
  );
}

export default App;
