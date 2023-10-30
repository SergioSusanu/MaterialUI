import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@emotion/react";

const BasicCard = ({header, content}) => {
  const theme = useTheme()
  console.log(theme.borderRadius);
  return (
    <Card sx={{borderRadius:'19px'}}>
        {header}
        <CardContent>
            {content}
        </CardContent>
    </Card>
  )
}

export default BasicCard