import React from 'react'
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton, Tooltip } from '@mui/material';
import BasicMenu from '../BasicMenu/BasicMenu';


const NotificationBell = ({color, onClick, anchorEl, handleClose, open}) => {
    const notifications = [
      {
        id: 1,
        label: "Notification 1",
      },
      {
        id: 2,
        label: "Notification 2",
      },
      {
        id: 3,
        label: "Notification 3",
      },
    ];

      const newNotifications = `You have ${notifications.length} new messages`;
      const noNotifications = "No new notifications";

  return (
    <div>
      <Tooltip
        title={notifications.length ? newNotifications : noNotifications}
      >
        <IconButton
          color="primary"
          onClick={notifications.length ? onClick : null}
        >
          <Badge badgeContent={notifications.length} color={color}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
        menuItems={notifications}
      />
    </div>
  );
}

export default NotificationBell