import Button from "@material-ui/core/Button";
import useStyles from './buttonStyle'

const GeneralButton = (props) => {
  const classes = useStyles()
  return (
    <Button className={classes.uniformColorBackground} variant="contained" onClick={props.onClick}>
      {props.title}
    </Button>
  );
};

export default GeneralButton;
