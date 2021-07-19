/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import HomeIcon from '@material-ui/icons/Home';
import useStyles from './dropDownStyle'

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});

export default function DropDownListFilter() {
    const classes = useStyles()
  return (
    <Autocomplete
      id="filter-demo"
      options={cities}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 300 }}
      
      renderInput={(params) => (
        <div className={classes.margin}>
          <Grid className={classes.gridStyle} container spacing={1} alignItems="flex-end">
          
            <Grid item>
              <TextField
              
              className={classes.inputStyle}
                style={{ width: "25ch" }}
                {...params}
                id="input-with-icon-grid"
                label="المدينة السكنية"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: <span ></span>
                  
                }}
              />
            </Grid>
            <Grid item>
              <HomeIcon className={classes.uniformColor} />
            </Grid>
          </Grid>
        </div>
      )}
    />
  );
}

const cities = [
  { title: "نابلس"},
  { title: "رام الله"},
  { title: "سلفيت"},
  { title: "اريحا"},
  { title: "جنين" },
  { title: "القدس" },
  { title: "طول كرم" },
  { title: "غزة" },
 
];
