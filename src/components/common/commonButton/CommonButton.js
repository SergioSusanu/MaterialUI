import React from 'react'
import Button from "@mui/material/Button";

const CommonButton = (props) => {
  return (
    <Button
      color={props.color}
      disable={props.disable}
      sx={props.sx}
      size={props.size}
      variant={props.variant}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default CommonButton