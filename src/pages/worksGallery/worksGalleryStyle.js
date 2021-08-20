import { makeStyles } from "@material-ui/core/styles";

let useStyle =  makeStyles((theme) => ({
  worksGallery: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(10),
  },
  rtlDirection: {
    direction: "rtl",
  },
}));

export default useStyle;
