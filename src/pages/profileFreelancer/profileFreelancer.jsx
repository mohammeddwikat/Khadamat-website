import { NavigationBar, Drawer, SnackBar } from "../../components";
import { Provider } from "react-redux";
import {rootReducers} from "../../components/Reducers";
import { ProfileCard, InfoCard, SkillsCard, PercentageRateCircle, AlignItemsList } from "../components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyle from "./profileFreelancerStyle";
import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { combineReducers, createStore } from 'redux';
import {ProfileCardReducer} from '../reducers'
import {SnackBarReducer} from '../../components/Reducers'
import {Link} from 'react-router-dom'

const snackProfileCardReducer = combineReducers({SnackBarReducer, ProfileCardReducer})
const storeProfileCardSnackBar = createStore(snackProfileCardReducer)
const storeNavDrawer = createStore(rootReducers);

const ProfilePageFreelancer = (props) => {
  const id = parseInt(props.id)
  const classes = useStyle();
  const history = useHistory()


  useEffect(()=> {
    if(sessionStorage.getItem('userData') == null){
      history.push("/page/login")
    }
  }, [])

  return (
    <div>
      <Provider store={storeNavDrawer}>
        <NavigationBar></NavigationBar>
        <Drawer></Drawer>
      </Provider>
      <div style={{ marginTop: "70px" }}>
        <div>
          <div className={classes.card}>
            <Grid
              direction={"row"}
              container
              spacing={3}
              style={{ padding: "20px" }}
            >
              <Grid item xs={12} lg={3} md={6}>
                <Grid item lg={12} md={12} xs={12}>
                  <Provider store={storeProfileCardSnackBar}>
                    <ProfileCard id={id}/>
                    <SnackBar autoHideDuration={3500} />
                  </Provider>
                </Grid>
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                <InfoCard id = {id}/>
                <SkillsCard id ={id}/>
              </Grid>
              <Grid item lg= {5} md={4} xs={12} >
                
                <Paper className={classes.paper}> 
                  <PercentageRateCircle percent={88}/>
                  <AlignItemsList id={id}/>
                  <Link className={classes.feedbacksLink} to='/'> مشاهدة المزيد من التقييمات</Link>
                </Paper>

              </Grid>

              {/* <Grid item xs={3}>
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
              </Grid> */}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageFreelancer;
