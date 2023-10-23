import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavbarItems } from './NavbarItems';
import { NavBarStyles } from './styles';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate()

  return (
    <Drawer
      sx={NavBarStyles.drawer}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {NavbarItems.map((item) => (
          <ListItem key={item.id} disablePadding onClick={() => navigate(item.route)}>
            <ListItemButton>
              <ListItemIcon sx={NavBarStyles.icons}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} sx={NavBarStyles.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}