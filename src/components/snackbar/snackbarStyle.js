import { makeStyles } from "@material-ui/core/styles";

let useStyle = makeStyles((theme) => ({
  alert:{
    margin:theme.spacing(1),
    '& .MuiAlert-message':{
      marginLeft:"5px",
      marginRight:"5px"
    }
  }
}));

export default useStyle;
