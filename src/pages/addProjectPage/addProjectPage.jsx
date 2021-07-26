import {AddProjectForm} from '../components'
import { Provider } from 'react-redux';
import {rootReducers} from '../../components/Reducers'
import { createStore } from 'redux';
import {NavigationBar, Drawer} from '../../components'
import useStyle from './addProjectPageStyle'

const storeNavDrawer = createStore(rootReducers)

const AddProjectPage = (props) => {
    const id = parseInt(props.id)
    const classes = useStyle()
    return (
        <div >
            <Provider store={storeNavDrawer}>
                <NavigationBar/>
                <Drawer/>
            </Provider>
            <div className={classes.rtlDirection}>
                <AddProjectForm id={id}/>
            </div>
        </div>
    )
}

export default AddProjectPage