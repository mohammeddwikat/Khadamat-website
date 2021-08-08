import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  GeneralTextField,
  GeneralButton,
  FullTextField,
  DatePicker,
  DropDownListFilter,
  SingleLineImageList,
} from "../../../components";
import EmailIcon from "@material-ui/icons/Email";
import useStyles from "./formsStyle";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import useStyle from "./formsStyle";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import placeholderImage from "../../../images/placeholderImage.jpg";

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

let skillsForAdd = [];
const AddSkillsForm = (props) => {
  const classes = useStyle();
  const [test] = useState("مهارات تم استعمالها في هذا العمل");
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
          iconField={<PeopleAltIcon className={classes.uniformColor} />}
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

const AddWorkForm = (props) => {
  const classes = useStyles();
  const id = props.id;
  const [values, setValues] = useState({
    skills: [],
    date: "",
    title: "",
    images: [],
  });
  const [imageInput, setImageInput] = useState(placeholderImage);
  const addSkills = () => {
    console.log(skillsForAdd);
    setValues({ ...values, skills: skillsForAdd });
  };
  const changeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const fileHandler = (event) => {
    console.log(event.target.files);
    setFiles({
      filesList: [event.target.files],
    });
  };
  const imageHandler = (event) => {
    console.log(event.target.files);
    setValues({ ...values, showImage: event.target.files[0] });
    setImageInput(URL.createObjectURL(event.target.files[0]));
  };

  const inputFile = useRef(null);
  const inputFileImageShow = useRef(null);

  const [files, setFiles] = useState({
    filesList: [],
  });

  return (
    <Grid container spacing={2}>
      <Grid item lg={6} md={10} xs={12}>
        <Grid item xs={12}>
          تاريخ التنفيذ
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "2em" }}>
          <DatePicker />
        </Grid>
        <Grid item xs={12}>
          عنوان العمل
        </Grid>
        <Grid item lg={12} md={8} s={10} xs={12}>
          <FullTextField name={"title"} id={"title"} />
        </Grid>
        <Grid style={{ marginBottom: "2em" }} item xs={12}>
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
        <Grid item lg={6} xs={12}>
          <Grid item lg={12} xs={12}>
            <GeneralButton
              newStyle={{
                margin: 0,
                marginBottom: "16px",
                marginTop: "10px",
                marginLeft: "1vw",
                color: "white",
              }}
              onClick={() => inputFileImageShow.current.click()}
              title={"اضافة صورة عرض"}
            />
            <input
              multiple={false}
              onChange={imageHandler}
              name="showImage"
              type="file"
              id="file"
              ref={inputFileImageShow}
              style={{ display: "none" }}
            />
            
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.marginBottom}>
          <img
            width="250px"
            height="250px"
            src={imageInput}
            alt={"placeholder"}
          />
        </Grid>
        <Grid item> 
        <GeneralButton
              newStyle={{
                margin: 0,
                marginBottom: "16px",
                marginTop: "10px",
                backgroundColor: "white",
                color: "black",
              }}
              onClick={() => inputFile.current.click()}
              title={"اضافة مقتطفات"}
            />
            <input
              multiple={true}
              onChange={fileHandler}
              name="image"
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
            />
        </Grid>
        <Grid item xs={12}>
          {files.filesList.length !== 0 ? (
            <SingleLineImageList items={Object.values(files.filesList[0])} />
          ) : (
            <div>لا يوجد صور تم اختياراها</div>
          )}
        </Grid>
        <Grid item xs={12} style={{ marginRight: "2px" }}>
          <GeneralButton
            newStyle={{ width: "100px", marginRight: "0", marginTop: "3em" }}
            title={"نشر"}
            //   onClick={test}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddWorkForm;
