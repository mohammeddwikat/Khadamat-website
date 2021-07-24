import { NavigationBar, Drawer } from "../../components";
import { Provider } from "react-redux";
import { rootReducers } from "../../components/Reducers";
import { createStore } from "redux";
import useStyle from "./addSkillsPageStyle";
import {AddSkillsForm} from '../components'

const storeNavDrawer = createStore(rootReducers);

const AddSkillsPage = (props) => {
  const id = props.id;
  const classes = useStyle();

  return (
    <div className={classes.addSkills}>
      <Provider store={storeNavDrawer}>
        <NavigationBar />
        <Drawer />
      </Provider>
     <AddSkillsForm/>
    </div>
  );
};

export default AddSkillsPage;
