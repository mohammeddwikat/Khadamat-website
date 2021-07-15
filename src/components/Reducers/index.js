import AppBarReducer from './appBarReducer'
import DrawerReducer from './drawerReducer'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({AppBarReducer, DrawerReducer})
export default rootReducers