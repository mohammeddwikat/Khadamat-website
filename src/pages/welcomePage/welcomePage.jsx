import {WelcomeSection} from "../components";
import {NavigationBar, Drawer} from '../../components'
import { Provider } from 'react-redux';
import rootReducers from '../../components/Reducers'
import { createStore } from 'redux';

const storeNavDrawer = createStore(rootReducers)

const WelcomePage = (props) => {
 
  return (
    <div  style={{overflowX:"hidden"}}>
      <Provider store = {storeNavDrawer}>
          <NavigationBar></NavigationBar>
          <Drawer></Drawer>
          
      </Provider>
      <div>
        <WelcomeSection/>
      </div>
     

    </div>
  );
};

export default WelcomePage;
