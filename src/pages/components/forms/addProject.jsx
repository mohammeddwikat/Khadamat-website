import { useState, useEffect, useRef } from "react";
import {
  FullTextField,
  GeneralTextField,
  MultipleSelectChip,
} from "../../../components";
import Grid from "@material-ui/core/Grid";
import useStyle from "./formsStyle";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import axios from "axios";
import Hidden from "@material-ui/core/Hidden";
import addProject from "../../../images/newWork.jpg";
import clsx from "clsx";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { DropDownListFilter, GeneralButton } from "../../../components";

let skillsList = [
  { title: "تصميم مواقع" },
  { title: "تصميم اعلانات" },
  { title: "تصميم فيديوهات" },
  { title: "تصميم شعارات" },
  { title: "مصمم تطبيقات هاتف" },
  { title: "تسويق الكتروني" },
  { title: "تعليم مرحلة اساسية" },
  { title: "تعليم مرحلة ثانوية" },
  { title: "برمجة" },
  { title: "بناء" },
  { title: "حرف مهنية" },
  { title: "حرف يدوية" },
  { title: "تصميم ديكور" },
  { title: "ماتلاب" },
  { title: "مايكروسوفت اوفيس" },
  { title: "فوتوغرافي" },
  { title: "نقل مواد بناء" },
  { title: "دهان" },
];

const expectedFundList = [
  {
    title: "ما بين 0- 50 دولار",
    value: {
      min: 0,
      max: 50,
    },
  },
  {
    title: "ما بين 50-100 دولار",
    value: {
      min: 50,
      max: 100,
    },
  },
  {
    title: "ما بين 100-500 دولار",
    value: {
      min: 100,
      max: 500,
    },
  },
  {
    title: "ما بين 500-1000 دولار",
    value: {
      min: 500,
      max: 1000,
    },
  },
  {
    title: "ما بين 1000-2000 دولار",
    value: {
      min: 1000,
      max: 2000,
    },
  },
  {
    title: "ما بين 2000-5000 دولار",
    value: {
      min: 2000,
      max: 5000,
    },
  },
  {
    title: "اكثر من 5000 دولار",
    value: {
      min: 5000,
      max: 10000000,
    },
  },
];

const expectedDayList = [
  {
    title: "ما بين 0-10 أيام",
    value: {
      min: 0,
      max: 10,
    },
  },
  {
    title: "ما بين 10-20 يوماً",
    value: {
      min: 10,
      max: 20,
    },
  },
  {
    title: "ما بين 20 - شهر",
    value: {
      min: 20,
      max: 30,
    },
  },
  {
    title: "ما بين شهر - شهرين",
    value: {
      min: 30,
      max: 60,
    },
  },
  {
    title: "ما بين شهرين - لنصف سنة",
    value: {
      min: 120,
      max: 180,
    },
  },
  {
    title: "ما بين نصف سنة - لسنة",
    value: {
      min: 180,
      max: 360,
    },
  },
  {
    title: "اكثر من سنة",
    value: {
      min: 360,
      max: 10000000,
    },
  },
];
let skillsForAdd = [];
const AddSkillsForm = (props) => {
  const classes = useStyle();
  const [test] = useState("مهارات يحتاجها مشروعك");
  const [value, setValue] = useState(null);
  const [chips, setChips] = useState({
    listChips: [],
  });
  const handleDelete = (chip) => {
    const chipsToDelete = chips.listChips.filter((value) => value !== chip);
    skillsList.push({ title: chip });
    setChips({ listChips: chipsToDelete });
  };

  useEffect(() => {
    setValue("");
    skillsForAdd = chips.listChips;
  });

  return (
    <div className={classes.fromAddSkills} style={props.newStyle}>
      <div className={classes.fromAddSkillsFields}>
        <DropDownListFilter
          value={value}
          newInputStyle={classes.newInputStyle}
          newGridStyle={classes.newGridStyle}
          freeSolo={true}
          id={"skillsFreelancer"}
          dataCy={"skillsFreelancer"}
          idField={"skillsFreelancerField"}
          titles={skillsList}
          label={"اضف مهارة"}
          onChange={(event, option) => {
            if (
              option !== null &&
              chips.listChips.every((chip) => chip !== option.title)
            ) {
              setChips({ listChips: [...chips.listChips, option.title] });
              setValue(option.title);
              skillsList = skillsList.filter(
                (value) => value.title !== option.title
              );
            }
          }}
        />
        <Grid className={classes.rtlDirection} container>
          <Grid
            item
            lg={props.lg ? props.lg : 6}
            md={props.md ? props.md : 8}
            s={props.s ? props.s : 10}
            xs={props.xs ? props.xs : 12}
          >
            <Paper
              name="skill"
              id="skill"
              className={clsx(classes.skills, classes.rtlDirection)}
            >
              {chips.listChips.length === 0 ? (
                <h4 className={classes.nothingTitle}>{test}</h4>
              ) : (
                chips.listChips.map((chip, index) => (
                  <Chip
                    onDelete={() => handleDelete(chip)}
                    className={classes.chipStyle}
                    label={chip}
                  />
                ))
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const AddProjectForm = (props) => {
  const id = parseInt(props.id);
  const classes = useStyle();
  const inputFile = useRef(null);
  const [files, setFiles] = useState({
    filesList: [],
  });
  const [values, setValues] = useState({
    title: "",
    skills: [],
    description: "",
    expectedFund: {
      min: 0,
      max: 0,
    },
    expectedDays: {
      min: "",
      max: "",
    },
    files: "",
  });

  const handleValuesChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const test = () => {
    console.log(skillsForAdd);
    setValues({ ...values, skills: skillsForAdd });
  };

  const fileHandle = (event) => {
    setFiles({
      filesList: [event.target.files],
    });
  };
  useEffect(() => {
    if (files.filesList.length !== 0) {
      console.log(Object.values(files.filesList[0]));
      Object.values(files.filesList[0]).map((file) => console.log(file.name));
    }
  });

  return (
    <div>
      <h3>اضافة مشروع جديد</h3>
      <Grid container spacing={3}>
        <Grid item lg={6} md={12} sm={10} xs={12}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              عنوان المشروع
            </Grid>
            <Grid
              className={classes.marginBottom}
              lg={12}
              md={12}
              s={12}
              xs={12}
            >
              <FullTextField
                name={"title"}
                id={"title"}
                placeholder={"عنوان المشروع"}
              />
            </Grid>
          </Grid>
          <Grid className={classes.marginBottom} item xs={12}>
            <Grid item xs={12}>
              المهارات المطلوبة
            </Grid>
            <Grid xs={12}>
              <AddSkillsForm
                button={"no"}
                lg={12}
                xs={12}
                md={12}
                s={12}
                id={id}
                newStyle={{ direction: "ltr" }}
              />
            </Grid>
          </Grid>
          <Grid className={classes.marginBottom} item xs={12}>
            <Grid item xs={12}>
              وصف المشروع
            </Grid>
            <Grid xs={12}>
              <FullTextField
                name={"description"}
                id={"description"}
                placeholder={"وصف المشروع"}
                rows={8}
              />
            </Grid>
          </Grid>
          <Grid className={classes.marginBottom} item xs={12}>
            <Grid container xs={12}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Grid item xs={12}>
                  الميزانية المتوقعة
                </Grid>
                <Grid item xs={12} style={{ width: "100%" }}>
                  <DropDownListFilter
                    freeSolo={false}
                    id={"expectedFund"}
                    dataCy={"expectedFund"}
                    idField={"expectedFundField"}
                    titles={expectedFundList}
                    placeholder={"الميزانية المتوقعة"}
                    newInputStyle={{ width: "100%" }}
                    variant={"outlined"}
                    width={"100%"}
                    noSpace={"true"}
                    styleDropDown={classes.dropDown}
                    newGridStyle={classes.newGridStyle}
                    onChange={(event, option) => {
                      if (option !== null) {
                        setValues({
                          ...values,
                          expectedFund: {
                            min: option.value.min,
                            max: option.value.max,
                          },
                        });
                      }
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12} className={classes.eData}>
                <Grid item xs={12}>
                  المدة المتوقعة للتسليم
                </Grid>
                <Grid item xs={12}>
                  <DropDownListFilter
                    freeSolo={false}
                    id={"expectedDays"}
                    dataCy={"expectedDays"}
                    idField={"expectedDaysField"}
                    titles={expectedDayList}
                    placeholder={" المدة المتوقعة للتسليم"}
                    newInputStyle={{ width: "100%" }}
                    variant={"outlined"}
                    width={"100%"}
                    noSpace={"true"}
                    styleDropDown={classes.dropDown}
                    newGridStyle={classes.newGridStyle}
                    onChange={(event, option) => {
                      if (option !== null) {
                        alert(option.value.min);
                        setValues({
                          ...values,
                          expectedDays: {
                            min: option.value.min,
                            max: option.value.max,
                          },
                        });
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Grid  className={classes.marginBottom}  container spacing={1}>
            
              <Grid item xs={12}>
                <Grid item lg={4} xs={6}>
                  <Grid item lg={12} xs={12}>
                    <GeneralButton
                      newStyle={{
                        margin: 0,
                        marginBottom: "16px",
                        marginTop: "10px",
                        backgroundColor: "white",
                        color: "black",
                      }}
                      onClick={() => inputFile.current.click()}
                      title={"اضافة ملحقات"}
                    />
                    <input
                      multiple={true}
                      onChange={fileHandle}
                      name="image"
                      type="file"
                      id="file"
                      ref={inputFile}
                      style={{ display: "none" }}
                    />
                  </Grid>
                </Grid>
                <Grid item lg={6} xs={12}>
               
                    {files.filesList.length !== 0 ? (
                      Object.values(files.filesList[0]).map((file) => (
                        <div key={file.name}>{file.name}</div>
                      ))
                    ) : (
                      <div>لا يوجد ملفات تم اختياراها</div>
                    )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginRight: "2px" }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <GeneralButton
                  newStyle={{ width: "101%", margin: "0" }}
                  title={"نشر"}
                  onClick={test}
                />
              </Grid>
              <Grid item xs={6}>
                <GeneralButton
                  newStyle={{ width: "101%", margin: "0" }}
                  title={"حفظ كمسودة"}
                  onClick={test}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6} md={4} xs={12}>
          <Hidden mdDown>
            <div className={classes.hiddenDivAddProject}>
              <img
                src={addProject}
                alt={"add project"}
                width="555px"
                height="600px"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddProjectForm;
