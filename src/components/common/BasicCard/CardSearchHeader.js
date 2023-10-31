import React from "react";
import { useTheme } from "@emotion/react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Grid, IconButton } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import CommonButton from "../CommonButton/CommonButton";

const CardSearchHeader = ({ handleClick }) => {
  const theme = useTheme();

  const Styles = {
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: theme.spacing(1),
      flexWrap: "wrap",
      backgroundColor: "lightgray",
    },
  };

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <Box sx={Styles.wrapper}>
      <Box>
        <SearchBar
          placeholder="Search by email, phone or user UID"
          onChange={(event) => handleChange(event.target.value)}
        />
      </Box>
      <Box>
        <CommonButton
          color="primary"
          size="large"
          variant="outlined"
          sx={{ backgroundColor: theme.palette.primary.main }}
          onClick={handleClick}
        >
          Add user
        </CommonButton>
        <IconButton>
          <RefreshIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CardSearchHeader;
