/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeIcon from '@material-ui/icons/Home';

let useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },

  inputStyle: {
    direction: "rtl",
    width:"100%",
    paddingRight:"0!important",
    "& .MuiFormLabel-root": {
      left: "auto",
      right: 0,
    },
    "& .MuiInputBase-root":{
        width:"87%",
        paddingRight:"0px!important"
    },
    "& .MuiInputLabel-shrink": {
      color: "#0077b6",
    },
    "& .MuiInput-underline": {
      "&:after": {
        borderBottomColor: "#0077b6",
      },
    
    
    },
  },

  gridStyle: {
    flexWrap: "nowrap",
    justifyContent: "center",
    width: "90%",
    
  },

  uniformColor: {
    color: "#0077b6",
  },
  
  uniformColor: {
    color: "#0077b6",
  },
}));

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
});

export default function DropDownListFilter() {
    const classes = useStyles()
  return (
    <Autocomplete
      id="filter-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 300 }}
      
      renderInput={(params) => (
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
      )}
    />
  );
}

const top100Films = [
  { title: "نابلس"},
  { title: "رام الله"},
  { title: "سلفيت"},
  { title: "اريحا"},
  { title: "جنين" },
  { title: "القدس" },
  { title: "طول كرم" },
  { title: "غزة" },
 
];
