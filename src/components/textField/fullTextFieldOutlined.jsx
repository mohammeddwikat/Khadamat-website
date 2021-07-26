import useStyle from "./textFieldStyle"
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx'

const FullTextField = (props) => {
    const classes = useStyle()
    return (
        <TextField
            onChange={props.onChange}
            id={props.id}
            label={props.label}
            name={props.name}
            style={{ margin: 8, marginRight:0 }}
            className={clsx(classes.inputStyle, classes.textFullWidth)}
            placeholder={props.placeholder}
            helperText={props.helperText}
            fullWidth
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
            multiline
            rows={props.rows}
            variant="outlined"
      />
    )
}

export default FullTextField