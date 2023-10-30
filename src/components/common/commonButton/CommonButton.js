import React from 'react'
import Button from "@mui/material/Button";

const CommonButton = ({
  children,
  color,
  disable,
  sx,
  variant,
  size,
  handleClick,
}) => {
  return (
    <Button
      color={color}
      disable={disable}
      sx={sx}
      size={size}
      variant={variant}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default CommonButton