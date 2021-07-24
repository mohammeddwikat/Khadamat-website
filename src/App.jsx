import React from "react";
import "./App.css";
import Counter from "./counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TextTest from "./test";
import { combineReducers } from "redux";
import { NavigationBar, Drawer } from "./components";
import { rootReducers } from "./components/Reducers";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  EntrancePages,
  WelcomePage,
  ProfilePageFreelancer,
  ProfileProductOwner,
  AddSkillsPage
} from "./pages";

const cc = () => (
  <div>
    <h1>as;dmas</h1>
    pmfpoasmfpoasmfpoamsf
  </div>
);

const initialState = {
  count: 0,
  age: 15,
  name: "Ahmad",
  c: cc(),
};

const initialState2 = {
  text: "mohammed",
};

function Reducer(state = initialState, action) {
  const testState = state;
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return testState;
  }
}

function Reducer2(state = initialState2, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        text: "INCREMENT",
      };
    case "DECREMENT":
      return {
        text: "DECREMENT",
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ Reducer, Reducer2 });
const store = createStore(rootReducer);
const storeNavDrawer = createStore(rootReducers);

const TestingReact = (props) => {
  return (
    <div>
      <Provider store={store}>
        <div className="App">
          <Counter gg="mohammed"></Counter>
          <Link to="/page/login">to log in</Link>
          <br></br>
          <Link to="/page/signUp">to sign up</Link>
          <br></br>
          <Link to="/page/forget">to forget password</Link>
          <br></br>
          <Link to="/page/code">to code</Link>
          <br></br>
          <Link to="/page/reset">to reset password</Link>
        </div>
        <TextTest></TextTest>
      </Provider>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <div>
              <Provider store={storeNavDrawer}>
                <NavigationBar></NavigationBar>
                <Drawer></Drawer>
              </Provider>
              <WelcomePage />
              <TestingReact />
            </div>
          )}
        />
        <Route
          path="/page/:form"
          component={({ match }) => (
            <EntrancePages typePage={match.params.form} />
          )}
        />
        <Route
          path="/profile/:id"
          component={({ match }) => (
            <ProfilePageFreelancer id={match.params.id} />
          )}
        />
        <Route 
          path="/productOwner/:id"
          component= {({match}) => (<ProfileProductOwner id={match.params.id} />)}
        />
        <Route 
          path="/freeLancer/addSkills/:id"
          component= {({match}) => <AddSkillsPage id={match.params.id}/>}
        />
      
      </Switch>
    </Router>
  );
}

export default App;
