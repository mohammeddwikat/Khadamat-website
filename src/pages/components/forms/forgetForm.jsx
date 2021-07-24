import React from "react";
import clsx from "clsx";
import { GeneralTextField, GeneralButton } from "../../../components";
import {Link} from 'react-router-dom'
import forget from '../../../images/forget.jpg'
import Hidden from '@material-ui/core/Hidden';
import EmailIcon from '@material-ui/icons/Email';
import useStyles from './formsStyle'
import axios from "axios";
// import axios from 'axios'


const ForgetForm = () => {

  const classes = useStyles();
  let [values, setValues] = React.useState({
    email: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault()
    axios({
      method:"POST",
      url:"https://K.wadq.dev/sendRestPassword",
      data:{
        email: values.email
      }
    }).then((response) => {
      alert("sent")
    }, (error) => {
      alert(error)
    })
  }

  return (
    <container className={classes.formContainer}>
      <Hidden only={['xs', 'sm']}>
        <img className={classes.imageStyle} src={forget} alt="people" width="500px" height="500px"/>
      </Hidden>
      <form className={classes.formStyle}>
        <h1 className={clsx(classes.textCenter, classes.uniformColor)}>
          نسيت كلمة السر
        </h1>
        <h5 className={clsx(classes.textCenter, classes.uniformColor)}>
         ضع بريدك الالكتروني وسنرسل اليك رابط لاستعادتها
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

        <div className={clsx(classes.flexDisplay, classes.margin)}>
          <GeneralButton title={" ارسال الرمز"} onClick={submit}/>
          <br/>
         
          <Link to='/page/login' className={clsx(classes.textCenter, classes.uniformColor, classes.linkStyle)}>العوده الى تسجيل الدخول</Link>
        </div>
       
      </form>
    </container>
  );
};


export default ForgetForm; //connect(mapStateToProps)(form);
