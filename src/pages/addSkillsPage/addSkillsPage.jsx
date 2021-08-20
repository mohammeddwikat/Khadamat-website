import useStyle from "./addSkillsPageStyle";
import {AddSkillsForm} from '../components'
import {useHistory} from 'react-router-dom'
import { NavigationBar, Drawer } from "../../components";
import { Provider } from "react-redux";
import { rootReducers } from "../../components/Reducers";
import { createStore } from "redux";
const storeNavDrawer = createStore(rootReducers);

const AddSkillsPage = (props) => {
  const id = parseInt(props.id);
  const classes = useStyle();
  const history = useHistory()
  if(id === JSON.parse(sessionStorage.getItem("userData")).id){
    return (
        
        <div className={classes.addSkills}>
        <Provider store={storeNavDrawer}>
            <NavigationBar />
            <Drawer />
        </Provider>
        <AddSkillsForm id={id}/>
        </div>
    );
   }else{
    history.push('/')
    return null
   }
};

export default AddSkillsPage;
