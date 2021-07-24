import { DropDownListFilter, GeneralButton } from "../../../components";
import useStyle from "./formsStyle";
import clsx from "clsx";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import { useState, useEffect } from "react";

let userTypes = [
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
  const id = props.id;
  const classes = useStyle();
  const [test, setTest] = useState("لا يوجود مهارات قم باضافتها");
  const [value, setValue] = useState(null)
  const [chips, setChips] = useState({
    listChips: [],
  });
  const handleDelete = (chip) => {
    const chipsToDelete = chips.listChips.filter(value => value !== chip  )
    userTypes.push({title:chip})
    setChips({ listChips: chipsToDelete})
  }
  useEffect(()=>{
    setValue("")
  })
  return (
    <div className={classes.fromAddSkills}>
        <div className={classes.fromAddSkillsFields}>
          <DropDownListFilter
            value={value}
            newInputStyle={classes.newInputStyle}
            newGridStyle={classes.newGridStyle}
            freeSolo={true}
            id={"skillsFreelancer"}
            dataCy={"skillsFreelancer"}
            idField={"skillsFreelancerField"}
            titles={userTypes}
            label={"اضف مهارة"}
            onChange={(event, option) => {
              if(option != undefined && chips.listChips.every(chip => chip !== option.title)){
                setChips({ listChips: [...chips.listChips, option.title]})
                setValue(option.title)
                userTypes = userTypes.filter(value => value.title != option.title)
              }
            }}
            iconField={<PeopleAltIcon className={classes.uniformColor} />}
          />
          <Grid className={classes.rtlDirection} container>
            <Grid item lg={6} md={8} s={10} xs={12}>
              <Paper
                name="skill"
                id="skill"
                className={clsx(classes.skills, classes.rtlDirection)}
              >
                {chips.listChips.length == 0 ? (
                  <h4 className={classes.nothingTitle}>{test}</h4>
                ) : (
                    chips.listChips.map((chip, index) => <Chip key={index} id={index} onDelete={() => handleDelete(chip)} className={classes.chipStyle} label={chip} />)
                )}
              </Paper>
              <GeneralButton title={"حفظ"} onClick={() => alert("asd")}/>
            </Grid>
          </Grid>
        </div>
      </div>
  );
};

export default AddSkillsForm;
