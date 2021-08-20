import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import useStyles from './dataPickerStyle'


const DatePicker = (props) => {

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const classes = useStyles()
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider  utils={DateFnsUtils}> 
          <KeyboardDatePicker
            className={classes.root}
            margin="normal"
            id="date-picker-dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          /> 
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker