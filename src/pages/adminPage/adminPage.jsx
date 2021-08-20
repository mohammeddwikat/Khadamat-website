import { NavigationBar, Drawer, TableData } from "../../components";
import { Provider } from "react-redux";
import { rootReducers } from "../../components/Reducers";
import { createStore } from "redux";
import useStyle from './adminPageStyle'
import { useEffect } from "react";
import {useHistory} from 'react-router-dom'
const storeNavDrawer = createStore(rootReducers);

const AdminPage = (props) => {
  const id = props.id;
  const classes = useStyle()
  const history = useHistory()

  useEffect(() => {
    if(sessionStorage.getItem('userData') == undefined){
      history.push("/")
    }
    else if((JSON.parse(sessionStorage.getItem('userData')).profileType != 'A')){
      history.push("/")
    }

  }, [])
  return (
    <div className={classes.admin}>
      <Provider store={storeNavDrawer}>
        <NavigationBar newStyle={{backgroundColor:"darkRed"}}/>
        <Drawer adminStyle={{backgroundColor:"darkRed"}} />
      </Provider>
      <div className={classes.adminPanel}>
       {
         [props.tables]
       }
      </div>
    </div>
  );
};

export default AdminPage;
