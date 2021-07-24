import { LoginForm, SignUpForm, ForgetForm, CodeForm, ResetPasswordForm } from "../components";
import {NavigationBar, Drawer} from '../../components'
import { Provider } from 'react-redux';
import {rootReducers} from '../../components/Reducers'
import { createStore } from 'redux';

const EntrancePages = (props) => {

  const getForm = () => {
      if(props.typePage === 'login'){
          return <LoginForm/>
      }else if(props.typePage === 'signUp'){
        return <SignUpForm/>
      }else if(props.typePage === 'forget'){
          return <ForgetForm/>
      }
      else if(props.typePage === 'code'){
        return <CodeForm/>
      }
      else if(props.typePage === 'reset'){
        return <ResetPasswordForm/>
      }
      else{
        return <div>Error 404 <br/> not found</div>
      }
  }
  
  const storeNavDrawer = createStore(rootReducers)

  return (
    <div>
      <Provider store = {storeNavDrawer}>
          <NavigationBar></NavigationBar>
          <Drawer></Drawer>
          
      </Provider>
    
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >   

        {
            getForm()
        }
      </div>
    </div>
  );
};

export default EntrancePages;
