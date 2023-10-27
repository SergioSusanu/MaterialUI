import React from 'react'
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton, Tooltip } from '@mui/material';
import BasicMenu from '../BasicMenu/BasicMenu';


const NotificationBell = ({badgeContent, color, onClick, anchorEl, handleClose, open}) => {
    const newNotifications = `You have ${badgeContent} new messages`;
    const noNotifications = "No new notifications"
  return (
    <div>
      <Tooltip title={badgeContent ? newNotifications : noNotifications}>
        <IconButton color="primary" onClick={onClick}>
          <Badge badgeContent={badgeContent} color={color}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
    </div>
  );
}

export default NotificationBell