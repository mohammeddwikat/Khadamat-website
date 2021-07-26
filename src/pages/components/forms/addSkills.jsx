import { DropDownListFilter, GeneralButton } from "../../../components";
import useStyle from "./formsStyle";
import clsx from "clsx";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import { useState, useEffect } from "react";
import axios from "axios";

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

const AddSkillsForm = (props) => {
  const id = parseInt(props.id);
  const classes = useStyle();
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const [test] = useState("لا يوجود مهارات قم باضافتها");
  const [value, setValue] = useState(null);
  const [chips, setChips] = useState({
    listChips: [],
  });
  const handleDelete = (chip) => {
    const chipsToDelete = chips.listChips.filter((value) => value !== chip);
    skillsList.push({ title: chip });
    setChips({ listChips: chipsToDelete });
  };

  const submit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "https://k.wadq.dev/updateUserSkills",
      data: {
        skills: chips.listChips,
        id: id,
      },
    }).then(
      (response) => alert("succ"),
      (error) => alert(error)
    );
  };
  useEffect(() => {
    if (sessionStorage.getItem("userData") !== null && user.profileType === "F") {
      const skills = JSON.parse(user.skills).skills;
      setChips({ listChips: skills });
      skillsList = skillsList.filter((skill) =>
        skills.every((x) => x !== skill.title)
      );
    }
  }, []);
  useEffect(() => {
    setValue("");
  });
  return (
    <div className={classes.fromAddSkills} style={props.newStyle}>
      <div className={classes.fromAddSkillsFields} style={props.newStyle2}>
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
        <Grid className={classes.rtlDirection} container >
          <Grid item lg={props.lg?props.lg:6} md={props.md?props.md:8} s={props.s?props.s:10} xs={props.xs?props.xs:12} >
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
            {props.button?null:<GeneralButton title={"حفظ"} onClick={submit} />}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddSkillsForm;
