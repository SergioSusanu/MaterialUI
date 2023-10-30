
import { Box, Typography } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import React from 'react'

const CardContentAuth = () => {

    const theme = useTheme()

    const noUsers = () => {
        const message = "No users for this project yet"

        return (
         <Typography sx={{textAlign:'center', 
         padding: theme.spacing(2)}}>{message}</Typography>
        )
    } 

  return (
    <Box>
     {noUsers()}
    </Box>
  );
}

export default CardContentAuth