import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = ({setSearchQuery}) => (
    <form onSubmit={setSearchQuery}>
      <TextField
        id="search-bar"
        className="text"
        label="Enter a public company"
        variant="outlined"
        placeholder="Search..."
        size="small"
        onChange={setSearchQuery}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form>
  );

  export default SearchBar;