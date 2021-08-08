import useStyles from "./worksGalleryStyle";
import { NavigationBar, Drawer } from "../../components";
import { Provider } from "react-redux";
import { rootReducers } from "../../components/Reducers";
import { createStore } from "redux";
import clsx from 'clsx'

const storeNavDrawer = createStore(rootReducers);

const WorksGallery = (props) => {
  const classes = useStyles();
  const id = props.id;

  return (
    <div >
       <Provider store={storeNavDrawer}>
        <NavigationBar />
        <Drawer />
      </Provider>
      <div className={clsx(classes.worksGallery, classes.rtlDirection)}>
          معرض الاعمال {id}
      </div>
    </div>
  );
};

export default WorksGallery;
