import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import useStyles from './textFieldStyle'
import clsx from 'clsx'

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
            autoComplete={"off"}
            type={props.type}
            id={props.id}
            name={props.id}
            onChange={props.onChange}
            label={props.label}
            className={clsx(classes.inputStyle, props.newClassName)}
            data-cy={props.dataCy}
            style={props.style}
            
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
