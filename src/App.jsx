import React from 'react';
import './App.css';
import Counter from './counter'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TextTest from './test'
import { combineReducers } from 'redux';
import {NavigationBar, Drawer} from './components'
import rootReducers from './components/Reducers'

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


function App() {
  return (
    <div>

      <Provider store={store}>
        <Provider store = {storeNavDrawer}>
          <NavigationBar></NavigationBar>
          <Drawer></Drawer>
        </Provider>
        <div className="App">
          <Counter gg="mohammed"></Counter>
        </div>
        <TextTest></TextTest>
      </Provider>
    </div>
  );
}

export default App;
