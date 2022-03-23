import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import * as actions from "../../../store/actions/index";

function TextFieldComponent(props) {
  const [errorState, setErrorState] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputChangeHandler = (event) => {
    const searchValue = event.target.value.trim();
    setSearchTerm(searchValue);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (searchTerm.length === 0) {
      setErrorState(true);
    } else {
      setErrorState(false);
      props.onSearchSubmit(searchTerm);
    }
  };
  return (
    <Box marginTop={2} noValidate component="form" onSubmit={formSubmitHandler}>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={8}>
          <TextField
            error={errorState}
            id="search-input"
            label="Search"
            helperText={errorState ? "Please Enter the search Term" : ""}
            placeholder="Search"
            variant="outlined"
            type="text"
            required
            fullWidth
            onChange={inputChangeHandler}
            value={searchTerm}
          />
        </Grid>
        <Grid item md={4}>
          <Button variant="contained" type="submit">
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchSubmit: (text) => dispatch(actions.searchInit(text)),
  };
};
export default connect(null, mapDispatchToProps)(TextFieldComponent);
