import { makeStyles } from "@material-ui/core/styles";

let useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    transform: "rotate(180deg)",
    position: "absolute",
    bottom: "0",
    zIndex: "-9",
    margin:0,
    padding:'0',

  },
}));

export default useStyles;
