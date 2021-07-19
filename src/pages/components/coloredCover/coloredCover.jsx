import { makeStyles } from "@material-ui/core/styles";


let useStyles = makeStyles((theme) => ({
  rootColored: {
    position: "absolute",
    top: 0,
    left: "0",
    width: "100%",
    height: "99vh",
    backgroundColor: "#0077b6",
    opacity: "0.6",
    zIndex: "-888",
  },
}));

const ColoredCover = () => {
    const classes = useStyles()
    return(
        <div className={classes.rootColored}></div>
    )
}

export default ColoredCover