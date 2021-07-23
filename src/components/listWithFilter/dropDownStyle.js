import { makeStyles } from "@material-ui/core/styles";


let useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },

  inputStyle: {
    direction: "rtl",
    width:"100%",
    paddingRight:"0!important",
    "& .MuiFormLabel-root": {
      left: "auto",
      right: 0,
    },
    "& .MuiInputBase-root":{
        width:"70%",
        paddingRight:"0px!important"
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

  gridStyle: {
    flexWrap: "nowrap",
    justifyContent: "center",
    width: "75%",
    
  },
  uniformColor: {
    color: "#0077b6",
  },
  
}));

export default useStyles