import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import useStyle from "./projectPageStyle";
import { ProfileCard, InfoCard, SkillsCard } from "../components";
import { NavigationBar, Drawer, SnackBar } from "../../components";
import { Provider } from "react-redux";
import { rootReducers } from "../../components/Reducers";
import { createStore, combineReducers } from "redux";
import { ProfileCardReducer } from "../reducers";
import { SnackBarReducer } from "../../components/Reducers";

const snackProfileCardReducer = combineReducers({
  SnackBarReducer,
  ProfileCardReducer,
});
const storeProfileCardSnackBar = createStore(snackProfileCardReducer);
const storeNavDrawer = createStore(rootReducers);

const ProjectSkills = (props) => {
  const id = props.id;
  const classes = useStyle();
  const [skills, setSkills] = useState({
    userSkills: ["loading", "loading", "loading", "loading"],
  });

  useEffect(() => {
    axios.get("https://k.wadq.dev/projectinofs/" + id).then((res) => {
      JSON.stringify(res.data.skills);
      axios({
        method: "POST",
        url: "https://k.wadq.dev/getSkillsAsNames",
        data: {
          skills: res.data.skills,
        },
      }).then(
        (res) => {
          setSkills({ ...res.data });
          console.log(res.data.userSkills);
        },
        (err) => console.log("baaaaaaaaaaaaaaaaaad")
      );
    });
  }, []);

  return (
    <Paper className={classes.paperSkills}>
      {skills.userSkills.map((skill) => (
        <Chip className={classes.chip} label={skill} />
      ))}
    </Paper>
  );
};

const ProjectProfile = (props) => {
  const id = props.id;
  const classes = useStyle();
  const [projectInfo, setProjectInfo] = useState({
    id: "",
    ownerid: "",
    name: "",
    description: "",
    skills: [],
    freelancerid: "",
    offerscount: "",
  });

  useEffect(() => {
    axios({
      mathod: "GET",
      url: "https://k.wadq.dev/projectinofs/" + id,
    }).then(
      (res) => {
        console.log(res.data);
        setProjectInfo({
          ...res.data,
        });
      },
      (err) => console.log(err)
    );
  }, []);

  return (
    <div>
      <Provider store={storeNavDrawer}>
        <NavigationBar />
        <Drawer />
      </Provider>
      <div className={classes.projectPage}>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} s={12} sm={12}>
            <h2>تفاصيل المشروع</h2>
            <h4>اسم المشروع : {projectInfo.name}</h4>
            <h4>تفاصيل المشروع : {projectInfo.description}</h4>
            <h4>عدد العروض المقدمه : {projectInfo.offerscount}</h4>
            <h4>المهارات المطلوبة :</h4>
            <Grid item xs={12} lg={8} md={8} s={10}>
              <ProjectSkills id={id} />
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} s={12} sm={12}>
            <h2>تفاصيل مالك المشروع </h2>
            <Grid container spacing={3}>
              <Grid lg={5} sm={12} style={{ marginLeft: "16px" }}>
                <Provider store={storeProfileCardSnackBar}>
                  <ProfileCard id={projectInfo.ownerid} />
                  <SnackBar autoHideDuration={3500} />
                </Provider>
              </Grid>
              <Grid lg={5} sm={12}>
                <InfoCard id={projectInfo.ownerid} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12}>
            <h2>تفاصيل المستقل</h2>
            {
                projectInfo.freelancerid == null? "صاحب المشروع لم يختر مستقل لبدء العمل":(
                    <Grid container spacing={3}>
              <Grid lg={5} sm={12} style={{ marginLeft: "16px" }}>
                <Provider store={storeProfileCardSnackBar}>
                  <ProfileCard id={projectInfo.freelancerid} />
                  <SnackBar autoHideDuration={3500} />
                </Provider>
              </Grid>
              <Grid lg={5} sm={12}>
                <InfoCard id={projectInfo.freelancerid} />
                <SkillsCard id={projectInfo.freelancerid} />
              </Grid>
            </Grid>
                )
            }
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProjectProfile;
