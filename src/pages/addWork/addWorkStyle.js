import { makeStyles } from "@material-ui/core/styles";

let useStyle = makeStyles((theme) => ({
  addWorks: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(10),
    direction:"rtl",
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start"
  },
  
}));

export default useStyle;
