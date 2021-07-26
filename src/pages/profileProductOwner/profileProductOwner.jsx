import { NavigationBar, Drawer, SnackBar } from "../../components";
import { Provider } from "react-redux";
import { rootReducers } from "../../components/Reducers";
import { combineReducers, createStore } from 'redux';
import useStyle from './profileProductOwnerStyle'
import {ProfileCardReducer} from '../reducers'
import {SnackBarReducer} from '../../components/Reducers'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ProfileCard, InfoCard } from "../components";

const storeNavDrawer = createStore(rootReducers);
const snackProfileCardReducer = combineReducers({SnackBarReducer, ProfileCardReducer})
const storeProfileCardSnackBar = createStore(snackProfileCardReducer)

const ProfileProductOwner = (props) => {
    const id = props.id
    const classes = useStyle()

    return (
        <div className={classes.productOwner}>
            <Provider store={storeNavDrawer}>
                <NavigationBar/>
                <Drawer/>
            </Provider>
            <div className={classes.rtlDirection}>
            <Grid
              direction={"row"}
              container
              spacing={3}
              style={{ padding: "20px" }}
            >
              <Grid item xs={12} lg={3} md={3}>
                <Grid item lg={12} md={12} xs={12}>
                  <Provider store={storeProfileCardSnackBar}>
                    <ProfileCard id={id}/>
                    <SnackBar autoHideDuration={3500} />
                  </Provider>
                </Grid>
              </Grid>
              <Grid item lg={4} xs={12}>
                  <InfoCard id={id}></InfoCard>
              </Grid>
              <Grid item xs={3} ا4>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
            </Grid>
            </div>
            
        </div>
    )
}

export default ProfileProductOwner


