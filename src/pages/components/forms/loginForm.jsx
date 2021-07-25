import React, {useEffect } from "react";
import clsx from "clsx";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { GeneralTextField, GeneralButton } from "../../../components";
import {Link, useHistory } from 'react-router-dom'
import people from '../../../images/people.jpeg'
import Hidden from '@material-ui/core/Hidden';
import EmailIcon from '@material-ui/icons/Email';
import useStyles from './formsStyle'
import axios from 'axios'

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

const LoginForm = () => {
  const history = useHistory();
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
    axios({
      method: 'post',
      url: 'https://K.wadq.dev/login',
      data: {
        email: values.email,
        password: values.password
      }
    }).then((response) => {
      console.log((response.data.result[0]))
      sessionStorage.setItem("userData", JSON.stringify(response.data.result[0]));
      sessionStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
      history.push('/profile/'+response.data.result[0].id)

      
    }, (err) => {
      alert(err)
    });
  }

  useEffect (()=>{
    if(sessionStorage.getItem('userData') != undefined){
      if(JSON.parse(sessionStorage.getItem('userData')).profileType === 'F'){
        history.push('/profile/'+JSON.parse(sessionStorage.getItem('userData')).id)
      }else if(JSON.parse(sessionStorage.getItem('userData')).profileType === 'P'){
        history.push('/productOwner/'+JSON.parse(sessionStorage.getItem('userData')).id)
      }else if(JSON.parse(sessionStorage.getItem('userData')).profileType === 'A'){
        history.push('/admin/'+JSON.parse(sessionStorage.getItem('userData')).id)
      }else{
        history.push("/page/login")
      }
      
    }else{
      history.push("/page/login")
    }
  }, []);

  return (
    <container className={classes.formContainer}>
      <Hidden only={['xs', 'sm']}>
        <img className={classes.imageStyle} src={people} alt="people" width="460px" height="460px"/>
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
          <Link to='forget' className={clsx(classes.textCenter, classes.uniformColor, classes.linkStyle)}>هل نسيت كلمة المرور؟</Link>
          <br/>
          <Link to='signUp' className={clsx(classes.textCenter, classes.uniformColor, classes.linkStyle)}>هل تريد ان تملك حسابا؟</Link>
        </div>
       
      </form>
    </container>
  );
};


export default LoginForm; //connect(mapStateToProps)(form);
