import React from "react";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { GeneralTextField, GeneralButton, DropDownListFilter } from "../../../components";
import {Link} from 'react-router-dom'
import people from '../../../images/people.jpeg'
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import useStyles from './formsStyle'


const SignUpForm = () => {
  const classes = useStyles();
  let [values, setValues] = React.useState({
    password: "",
    email: "",
    phoneNumber: "",
    location: "",
    profileType: "",
    FirstName: "",
    LastName:""
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault()
  }

  return (
    <container className={classes.formContainer}>
    
      <form className={classes.formStyle}>
        <h1 className={clsx(classes.textCenter, classes.uniformColor)}>
          مرحبا بك في موقع خدمات
        </h1>
        <h5 className={clsx(classes.textCenter, classes.uniformColor)}>
          سجل في موقع خدمات واصبح واحداً من أفراد عائلته
        </h5>
        <div style={{display:"flex",flexWrap:"wrap", flexDirection:"row-reverse"}}>
          <div style={{display:"flex",flexWrap:"nowrap", flexDirection:"column"}}>
          <GeneralTextField
            data-cy={"firstName"}
            label={"الاسم الاول"}
            type={"text"}
            id={"firstName"}
            name={"firstName"}
            onChange={handleChange}
            icon={<AccountCircle className={classes.uniformColor} />}
          />
          <GeneralTextField
            data-cy={"lastName"}
            label={"الاسم الاخير"}
            type={"text"}
            id={"lastName"}
            name={"lastName"}
            onChange={handleChange}
            icon={<AccountCircle className={classes.uniformColor} />}
          />
          <DropDownListFilter/>
          </div>
          <div style={{display:"flex",flexWrap:"wrap", flexDirection:"column"}}>
             
          <GeneralTextField
            data-cy={"email"}
            label={"البريد الالكتروني"}
            type={"email"}
            id={"email"}
            name={"email"}
            onChange={handleChange}
            icon={<EmailIcon className={classes.uniformColor} />}
          />
          
          <GeneralTextField
            data-cy={"password"}
            label={"كلمة المرور"}
            type={"password"}
            id={"password"}
            name={"password"}
            onChange={handleChange}
            icon={<VisibilityOff className={classes.uniformColor} />}
          />
           <GeneralTextField
            data-cy={"passwordConfirm"}
            label={"تأكيد كلمة المرور"}
            type={"password"}
            id={"passwordConfirm"}
            name={"passwordConfirm"}
            onChange={handleChange}
            icon={<VisibilityOff className={classes.uniformColor} />}
          />
          </div>          
        </div>
        <div className={clsx(classes.flexDisplay, classes.margin)}>
            <GeneralButton title={"انضم الينا"} onClick={submit}/>
            <br/>
            <Link className={clsx(classes.textCenter, classes.uniformColor, classes.linkStyle)}>هل تمتلك حسابا؟</Link>
        </div>
      </form>
    </container>
  )
}
 
export default SignUpForm