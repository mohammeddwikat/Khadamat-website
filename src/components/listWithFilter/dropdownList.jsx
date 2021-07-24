/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import useStyles from './dropDownStyle'
import clsx from "clsx"

const filter = createFilterOptions();

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});


export default function DropDownListFilter(props) {
    const classes = useStyles()

  return (
    <Autocomplete
      value={props.value}
      freeSolo={props.freeSolo}
      id={props.id}
      options={props.titles}
      getOptionLabel={(option) => {
        if (typeof option === "string") {
          return option;
        }
        if (option.value) {
          return option.title;
        }
        return option.title;
      }}
      renderOption={(option) => option.title}
      filterOptions={(options, params) => {
      const filtered = filter(options, params);

        if (params.inputValue !== '' && props.freeSolo == true) {
          filtered.push({
            value: params.inputValue,
            title: params.inputValue,
          });
        }

        return filtered;
      }}
      sx={{ width: 300 }}
      onChange={props.onChange}
      renderInput={(params) => (
        <div className={classes.margin}>
          <Grid className={clsx(classes.gridStyle, props.newGridStyle)} container spacing={1} alignItems="flex-end">
          
            <Grid item>
              <TextField
              
              className={clsx(classes.inputStyle, props.newInputStyle)}
                style={{ width: "25ch" }}
                {...params}
                id={props.idField}
                label={props.label}
                data-cy={props.dataCy}
                
                InputProps={{
                  ...params.InputProps,
                  endAdornment: <span ></span>
                  
                }}
              />
            </Grid>
            <Grid item>
              {props.iconField}
            </Grid>
          </Grid>
        </div>
      )}
    />
  );
}

