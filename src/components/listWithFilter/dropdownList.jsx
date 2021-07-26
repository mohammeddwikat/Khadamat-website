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

export default function DropDownListFilter(props) {
    const classes = useStyles()

  return (
    <Autocomplete
      className={props.styleDropDown}
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

        if (params.inputValue !== '' && props.freeSolo === true) {
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
        <div className={props.noSpace?null:classes.margin}>
          <Grid className={clsx(classes.gridStyle, props.newGridStyle)} container spacing={1} alignItems="flex-end">
          
            <Grid item className={props.newGridStyle}>
              <TextField
                variant={props.variant}
                className={clsx(classes.inputStyle, props.newInputStyle)}
                style={{ width: props.width?props.width:"25ch" }}
                {...params}
                id={props.idField}
                label={props.label}
                placeholder={props.placeholder}
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

