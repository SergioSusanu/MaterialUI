import React from 'react'
import { useTheme } from "@emotion/react";
import { Box, Grid, IconButton } from "@mui/material";

const GridWrapper = ({children}) => {

    const theme = useTheme();

    const styles = {
      wrapper: {
        padding: theme.spacing(2),
        marginLeft: "320px",
      },
    };

  return (
    <Grid item xs={12} sx={styles.wrapper}>
        {children}
    </Grid>
  )
}

export default GridWrapper