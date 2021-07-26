import { makeStyles } from '@material-ui/core/styles';

let useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },

  inputStyle: {
    direction: "rtl",
    "& .MuiFormLabel-root": {
      left: "auto",
      right: 0,
    },
    "& .MuiInputLabel-shrink": {
      color: "#0077b6",
    },
    "& .MuiInput-underline": {
      "&:after": {
        borderBottomColor: "#0077b6",
      },
    },
  },
  textFullWidth:{
    '& legend':{
      textAlign:"initial!important"
    },
    "& .MuiInputBase-fullWidth": {
      '&.Mui-focused fieldset':{
        borderColor: "#0077b6",
      }
    },
  },
  gridStyle: {
    flexWrap: "nowrap",
    justifyContent: "center",
    width:"100%",
  },

  uniformColor: {
    color: "#0077b6",
  },
}));

export default useStyles;
