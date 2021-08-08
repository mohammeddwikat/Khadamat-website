import { makeStyles } from "@material-ui/core/styles";

let useStyle = makeStyles((theme) => ({
  root:{
    margin:theme.spacing(1),
    '& .MuiInputBase-root':{
      flexDirection:"row-reverse",
    },
    '& .MuiSvgIcon-root':{
        color:"#0077b6"
    },
    "& .MuiInput-underline": {
        "&:after": {
          borderBottomColor: "#0077b6",
        },
    },
    
  },
  dialogStyle:{
    "& .MuiToolbar-root":{
        backgroundColor:"#0077b6",
        
    },
    
  }
}));

export default useStyle;
