import AppBarReducer from './appBarReducer'
import DrawerReducer from './drawerReducer'
import SnackBarReducer from './snackbarReducer'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({AppBarReducer, DrawerReducer})
export  {rootReducers, SnackBarReducer}