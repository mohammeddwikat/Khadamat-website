import React from "react";
import "./App.css";
import Counter from "./counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TextTest from "./test";
import { combineReducers } from "redux";
import { NavigationBar, Drawer, TableData } from "./components";
import { rootReducers } from "./components/Reducers";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  EntrancePages,
  WelcomePage,
  ProfilePageFreelancer,
  ProfileProductOwner,
  AddSkillsPage,
  AddProjectPage,
  AddWorkPage,
  WorksGallery,
  AdminPage,
  ProjectProfile
} from "./pages";
import { AddSkill, StatisticsCards, StatisticCard } from "./pages/components";

import { ResetPasswordForm } from "./pages/components";
import axios from "axios";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IconButton from "@material-ui/core/IconButton";

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
          path="/resetPassword/:accessToken"
          component={({ match }) => (
            <EntrancePages
              typePage={"reset"}
              form={
                <ResetPasswordForm accessToken={match.params.accessToken} />
              }
            />
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
          component={({ match }) => (
            <ProfileProductOwner id={match.params.id} />
          )}
        />
        <Route
          path="/freeLancer/addSkills/:id"
          component={({ match }) => <AddSkillsPage id={match.params.id} />}
        />
        <Route
          path="/addProject/productOwner/:id"
          component={({ match }) => <AddProjectPage id={match.params.id} />}
        />
        <Route
          path="/addWork/freelancer/:id"
          component={({ match }) => <AddWorkPage id={match.params.id} />}
        />
        <Route
          path="/worksGallery/freelancer/:id"
          component={({ match }) => <WorksGallery id={match.params.id} />}
        />
        <Route
          path="/admin/users/:id"
          component={({ match }) => (
            <AdminPage
              id={match.params.id}
              tables={[
                <TableData
                title={"Khadamat's Users"}
                  getDataUrl={"https://k.wadq.dev/allUsers"}
                  deleteDataUrl={"https://k.wadq.dev/deleteUser"}
                  postDataUrl={"https://k.wadq.dev/editUserData"}
                  tableCategory={"users"}
                />,
              ]}
            />
          )}
        />

        <Route
          path="/admin/projects/:id"
          component={({ match }) => (
            <AdminPage
              id={match.params.id}
              tables={[
                <TableData
                title={"Khadamat's Projects"}
                  redirectToProject = {"/project/page/"}
                  getDataUrl={"https://k.wadq.dev/getAllProjects "}
                  postDataUrl={"https://k.wadq.dev/editProject"}
                  deleteDataUrl={"https://k.wadq.dev/deleteProjectbyid"}
                  doneDataUrl={"https://k.wadq.dev/aproveProject"}
                  tableCategory={"projects"}
                />,
              ]}
            />
          )}
        />

        <Route
          path="/admin/reports/:id"
          component={({ match }) => (
            <AdminPage
              id={match.params.id}
              tables={[
                
                <TableData
                title={"Khadamat's Reports"}
                redirectToProject = {"/project/page/"}
                  getDataUrl={"https://k.wadq.dev/getAllProblems"}
                  doneDataUrl={"https://k.wadq.dev/doneProblems"}
                  tableCategory={"reports"}
                />,
              ]}
            />
          )}
        />

        <Route
          path="/admin/skills/:id"
          component={({ match }) => (
            <AdminPage
              id={match.params.id}
              tables={[
                <TableData
                title={"Skills in Khadamat"}
                  getDataUrl={"https://k.wadq.dev/getAllSkills"}
                  postDataUrl={"https://k.wadq.dev/editSkill"}
                  deleteDataUrl={"https://k.wadq.dev/deleteSkill"}
                  tableCategory={"skills"}
                />,
                <br />,
                <AddSkill />,
              ]}
            />
          )}
        />

        <Route
          path="/admin/transactions/:id"
          component={({ match }) => (
            <AdminPage
              id={match.params.id}
              tables={[
                <TableData
                title={"Khadamat's Transactions"}
                  getDataUrl={"https://k.wadq.dev/getAllUserPalnces"}
                  makePayment={"https://k.wadq.dev/payUser"}
                  tableCategory={"transactions"}
                />,
              ]}
            />
          )}
        />

        <Route
          path="/admin/statistics/:id"
          component={({ match }) => (
            <AdminPage
              id={match.params.id}
              tables={[
                <StatisticsCards/>,
              ]}
            />
          )}
        />

        <Route
          path="/project/page/:id"
          component = {
            ({match}) =>(
              <ProjectProfile id={match.params.id}/>
            )
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
