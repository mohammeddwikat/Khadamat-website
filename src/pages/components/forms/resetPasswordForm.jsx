import React from "react";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { GeneralTextField, GeneralButton } from "../../../components";
import {Link} from 'react-router-dom'
import code from '../../../images/code.jpg'
import Hidden from '@material-ui/core/Hidden';
import useStyles from './formsStyle'
import axios from 'axios'

const ResetPasswordForm = () => {

  const classes = useStyles();
  let [values, setValues] = React.useState({
    email: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault()
   
  }

  return (
    <container className={classes.formContainer}>
      <Hidden only={['xs', 'sm']}>
        <img className={classes.imageStyle} src={code} alt="people" width="500px" height="500px"/>
      </Hidden>
      <form className={classes.formStyle}>
        <h1 className={clsx(classes.textCenter, classes.uniformColor)}>
          تغيير كلمة المرور
        </h1>
        <h5 className={clsx(classes.textCenter, classes.uniformColor)}>
         ادخل كلمتين متطابقتين 
        </h5>

        <GeneralTextField
          data-cy={"resetPassword"}
          label={"كلمة المرور"}
          type={"password"}
          id={"resetPassword"}
          name={"resetPassword"}
          onChange={handleChange}
          icon={<VisibilityOff className={classes.uniformColor} />}
        />
         <GeneralTextField
          data-cy={"resetPasswordConfirm"}
          label={" إعادة كلمة المرور"}
          type={"password"}
          id={"resetPasswordConfirm"}
          name={"resetPasswordConfirm"}
          onChange={handleChange}
          icon={<VisibilityOff className={classes.uniformColor} />}
        />

        <div className={clsx(classes.flexDisplay, classes.margin)}>
          <GeneralButton title={" تغيير كلمة المرور"} onClick={submit}/>
          <br/>
         
          <Link to='/' className={clsx(classes.textCenter, classes.uniformColor, classes.linkStyle)}>العودة الى الصفحة الرئيسية</Link>
        </div>
       
      </form>
    </container>
  );
};


export default ResetPasswordForm; //connect(mapStateToProps)(form);
