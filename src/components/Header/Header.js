import { Avatar, Grid, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import NotificationBell from '../common/notificationBell/NotificationBell'
import CommonButton from '../common/commonButton/CommonButton'
import Typography from "@mui/material/Typography";
import HelpIcon from "@mui/icons-material/Help";
import Box from "@mui/material/Box";

const Header = ({title}) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (e) => {
      setAnchorEl(e.currentTarget);
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const headerStyles ={
        wrapper: {
            width: '100%',
            backgroundColor: '#009be5',
            display: 'flex',
            flexDirection: 'column',
            padding:'20px',
        },
        topRow:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'end',
            alignItems:'center',
            marginBottom:'20px',
            '*':{
                marginRight:'5px'
            },
        },
        middleRow:{
            display:'flex',
            flexDirection:'row',
            alignItems: 'center',
            justifyContent:'space-between',
            marginBottom:'20px',
            marginLeft:'320px',
        },
        link:{
          fontWeight:500,
          color: 'rgba(255,255,255,0.7)',
          '&:hover':{
            color:'white',
            cursor:'pointer'
          }
        },
        webButton:{
          marginRight: '5px',
          color:'white',
          borderColor:'white'
        },
        iconButton:{
          color:'white'
        }
    }

  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <Typography sx={headerStyles.link}>Go to docs</Typography>
        <NotificationBell
          color="secondary"
          onClick={handleOpen}
          anchorEl={anchorEl}
          handleClose={handleClose}
          open={open}
        />
        <Avatar
          alt="Remy Martin"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
      </Box>
      <Box sx={headerStyles.middleRow}>
        <Typography variant="h1" color="white">{title} Auth</Typography>
        <Box>
          <CommonButton variant="outlined"
          sx={headerStyles.webButton}
          >Web setup</CommonButton>
          <Tooltip title="Help">
            <IconButton sx={headerStyles.iconButton}>
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}

export default Header