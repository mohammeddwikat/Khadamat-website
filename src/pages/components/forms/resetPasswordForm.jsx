import React from "react";
import clsx from "clsx";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { GeneralTextField, GeneralButton } from "../../../components";
import { Link } from "react-router-dom";
import code from "../../../images/code.jpg";
import Hidden from "@material-ui/core/Hidden";
import useStyles from "./formsStyle";
import axios from "axios";
import {useHistory} from 'react-router-dom'

const ResetPasswordForm = (props) => {
  const accessToken = props.accessToken;
  const history = useHistory()
  const classes = useStyles();
  let [values, setValues] = React.useState({
    resetPassword: "",
    resetPasswordConfirm: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values.resetPassword);
  };

  const submit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "https://k.wadq.dev/setNewPassword",
      headers: {
        auth: "Bearer "+accessToken,
      },
      data: {
        password: values.resetPassword,
      },
    }).then(
      (response) =>{
        history.push('/page/login')
      },
      (error) => console.log(error)
    );
  };
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <container className={classes.formContainer}>
      <Hidden only={["xs", "sm"]}>
        <img
          className={classes.imageStyle}
          src={code}
          alt="people"
          width={width / 5}
          height={height / 2.3}
        />
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
          <GeneralButton title={" تغيير كلمة المرور"} onClick={submit} />
          <br />

          <Link
            to="/"
            className={clsx(
              classes.textCenter,
              classes.uniformColor,
              classes.linkStyle
            )}
          >
            العودة الى الصفحة الرئيسية
          </Link>
        </div>
      </form>
    </container>
  );
};

export default ResetPasswordForm; //connect(mapStateToProps)(form);
