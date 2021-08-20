import { makeStyles } from "@material-ui/core/styles";

let useStyle = makeStyles((theme) => ({
  adminPanel: {
    marginTop: theme.spacing(9),
    padding:"1em"
  },
  admin:{
    scrollbarColor: "red yellow",
  }
}));

export default useStyle;
