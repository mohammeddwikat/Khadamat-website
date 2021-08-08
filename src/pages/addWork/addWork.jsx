import { Provider } from "react-redux";
import { rootReducers } from "../../components/Reducers";
import { createStore } from "redux";
import { NavigationBar, Drawer } from "../../components";
import useStyle from "./addWorkStyle";
import {AddWorkForm} from '../components'

const storeNavDrawer = createStore(rootReducers);

const AddWorkPage = (props) => {
  const id = props.id
  const classes = useStyle()

  return (
    <div>
      <Provider store={storeNavDrawer}>
        <NavigationBar />
        <Drawer />
      </Provider>
      <div className={classes.addWorks}>
        
        <AddWorkForm id={id}/>
      </div>
      
    </div>
  );
};

export default AddWorkPage;
