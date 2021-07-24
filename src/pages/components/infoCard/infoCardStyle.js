import { makeStyles } from "@material-ui/core/styles";

let useStyle = makeStyles((theme) => ({
 
  paperInfo: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    display:"flex",
    flexDirection:"column",
    boxShadow:"0px 0px 5px 2px gray",
    direction:"rtl",
    justifyContent:"flex-start",
    '& > div':{
      margin:"8px",
      fontWeight:"bold"
    }
  },
  
}));

export default useStyle;
