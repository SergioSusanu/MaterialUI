
import { Box, Typography } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import React from 'react'

const CardContentAuth = ({users}) => {

    const theme = useTheme()

    const User = ({data}) => {
      return (
        <Box sx={{marginBottom:'20px'}}>
          <Typography>Email: {data.email}</Typography>
          <Typography>Phone: {data.phoneNumber}</Typography>
          <Typography>User ID: {data.userId}</Typography>
        </Box>
      );
    }

    const noUsers = () => {
        const message = "No users for this project yet"

        return (
         <Typography sx={{textAlign:'center', 
         padding: theme.spacing(2)}}>{message}</Typography>
        )
    }

  return (
    <Box>
     {users?.length ?
     users.map((user) => {
      return <User key={user.userId} data={user} />
     })
     :
     noUsers()}
    </Box>
  );
}

export default CardContentAuth