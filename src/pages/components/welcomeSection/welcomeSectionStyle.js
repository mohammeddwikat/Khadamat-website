import { makeStyles } from "@material-ui/core/styles";
import work from "../../../images/work.jpg";

const height = window.innerHeight;

let useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: height,
  },
  cover: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "99.5%",
    backgroundImage: `url(${work})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    zIndex: "-999999",
    opacity: "0.5",
    
  },
 
  centralizeText: {
    textAlign: "center",
    color: "white",
  },
  test: {
    color: "black",
    alignSelf: "center",
  },
  welcome: {
    height: height,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles