import React from "react";
import clsx from "clsx";
import { GeneralTextField, GeneralButton } from "../../../components";
import {Link} from 'react-router-dom'
import code from '../../../images/code.jpg'
import Hidden from '@material-ui/core/Hidden';
import useStyles from './formsStyle'
// import axios from 'axios'

import LockOpenIcon from '@material-ui/icons/LockOpen';

const CodeForm = () => {

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
  const width = window.innerWidth
  const height = window.innerHeight

  return (
    <container className={classes.formContainer}>
      <Hidden only={['xs', 'sm']}>
        <img className={classes.imageStyle} src={code} alt="people" width={width/5} height={height/2.5}/>
      </Hidden>
      <form className={classes.formStyle}>
        <h1 className={clsx(classes.textCenter, classes.uniformColor)}>
          رمز التحقق
        </h1>
        <h5 className={clsx(classes.textCenter, classes.uniformColor)}>
         ادخل الرمز الذي تم ارساله على بريدك الالكتروني 
        </h5>

        <GeneralTextField
          data-cy={"code"}
          label={"الرمز المرسل"}
          type={"text"}
          id={"code"}
          name={"code"}
          onChange={handleChange}
          icon={<LockOpenIcon className={classes.uniformColor} />}
        />

        <div className={clsx(classes.flexDisplay, classes.margin)}>
          <GeneralButton title={" ادخل الرمز"} onClick={submit}/>
          <br/>
         
          <Link to='/login' className={clsx(classes.textCenter, classes.uniformColor, classes.linkStyle)}>العوده الى تسجيل الدخول</Link>
        </div>
       
      </form>
    </container>
  );
};


export default CodeForm; //connect(mapStateToProps)(form);
