import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import useStyles from './textFieldStyle'

const GeneralTextField = (props) => {
  const classes = useStyles();
 
  return (
    <div className={classes.margin}>
      <Grid
        container
        spacing={1}
        alignItems="flex-end"
        className={classes.gridStyle}
      >
        <Grid item>
          <TextField
            type={props.type}
            id={props.id}
            name={props.id}
            onChange={props.onChange}
            label={props.label}
            className={classes.inputStyle}
            data-cy={props.dataCy}
          />
        </Grid>
        <Grid item>
          {props.icon}
        </Grid>
      </Grid>
    </div>
  );
};

export default GeneralTextField;
