import { Grid } from '@mui/material'
import React, { useState } from 'react'
import CommonButton from '../components/common/commonButton/CommonButton';
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationBell from '../components/common/notificationBell/NotificationBell';
import BasicMenu from '../components/common/BasicMenu/BasicMenu';

const About = () => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      This is the about page
      <NotificationBell color="secondary"
        onClick={handleOpen}
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
      />
      <CommonButton variant="default">
        Go to docs
      </CommonButton>
    </div>
  );
}

export default About