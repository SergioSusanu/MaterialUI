import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Input, Box } from '@mui/material';

const SearchBar = ({placeholder, onChange}) => {

    const styles ={
    wrapper: {
      display: "flex",
      alignItems: "center",
    },
    input:{
        minWidth:'260px'
    }
    }

  return (
    <Box sx={styles.wrapper}>
      <SearchIcon />
      <Input sx={styles.input} placeholder={placeholder} onChange={onChange}
      disableUnderline />
    </Box>
  );
}

export default SearchBar