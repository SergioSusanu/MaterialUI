import React from 'react'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const BasicMenu = ({open, anchorEl, handleClose, menuItems}) => {

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItems.map((item)=>{
          return <MenuItem
          onClick={handleClose}
          key={item.id}>{item.label}</MenuItem>;
        })}
      </Menu>
    </div>
  );
}

export default BasicMenu