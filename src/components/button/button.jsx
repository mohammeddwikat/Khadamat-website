import Button from "@material-ui/core/Button";
import useStyles from './buttonStyle'

const GeneralButton = (props) => {
  const classes = useStyles()
  return (
    <Button style={props.newStyle} variant="contained" component="label" className={classes.uniformColorBackground}  onClick={props.onClick}>
      {props.title}
      {props.upload}
    </Button>
  );
};

export default GeneralButton;
