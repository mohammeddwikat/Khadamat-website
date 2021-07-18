import React from "react";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { GeneralTextField, GeneralButton } from "../../../components";
import {Link} from 'react-router-dom'
import people from '../../../images/people.jpeg'
import Hidden from '@material-ui/core/Hidden';
import EmailIcon from '@material-ui/icons/Email';
import useStyles from './formsStyle'


const LoginForm = () => {

  const classes = useStyles();
  let [values, setValues] = React.useState({
    password: "",
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
        <img className={classes.imageStyle} src={people} alt="people" width="500px" height="500px"/>
      </Hidden>
      <form className={classes.formStyle}>
        <h1 className={clsx(classes.textCenter, classes.uniformColor)}>
          مرحبا بك في موقع خدمات
        </h1>
        <h5 className={clsx(classes.textCenter, classes.uniformColor)}>
          لتتمتع بميزات موقعنا قم بتسجيل الدخول الى موقعنا
        </h5>

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

        <div className={clsx(classes.flexDisplay, classes.margin)}>
          <GeneralButton title={"تسجيل دخول"} onClick={submit}/>
          <br/>
          <Link className={clsx(classes.textCenter, classes.uniformColor, classes.linkStyle)}>هل نسيت كلمة المرور؟</Link>
          <br/>
          <Link to='/signUp' className={clsx(classes.textCenter, classes.uniformColor, classes.linkStyle)}>هل تريد ان تملك حسابا؟</Link>
        </div>
       
      </form>
    </container>
  );
};


export default LoginForm; //connect(mapStateToProps)(form);
