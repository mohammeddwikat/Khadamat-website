import useStyle from "./formsStyle";
import { GeneralTextField, GeneralButton } from "../../../components";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { useState } from "react";
import axios from 'axios'

const AddSkill = (props) => {
  const classes = useStyle();
  const [skill, setSkill] = useState("")


  const changeHandler = (event) => {
      setSkill(event.target.value)
  }
  const clickHandler = (event) => {
    axios.post(
        'https://k.wadq.dev/addSkill',
        {
            skillName:skill,
            choosed:"0"
        }
    ).then(res => window.location.reload(false))
  }

  return (
    <div className={classes.skillFrom}>
      <GeneralTextField
        data-cy={"skill"}
        label={"مهارة جديده"}
        type={"text"}
        id={"skill"}
        name={"skill"}
        onChange = {changeHandler}
        newClassName={classes.adminInput}
        icon={<PlaylistAddIcon className={classes.adminUniformColor} />}
      />
      <GeneralButton title={"اضافة"} newStyle={{backgroundColor:"darkred"}} onClick={clickHandler}/>
    </div>
  );
};

export default AddSkill;
