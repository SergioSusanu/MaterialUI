import React from 'react';
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";

export const NavbarItems = [
  {
    id: 1,
    label: "Home",
    route: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    label: "About",
    route: "/",
    icon: <PeopleAltIcon />,
  },
  {
    id: 3,
    label: "Menu",
    route: "/",
    icon: <MenuBookIcon />,
  },
  {
    id: 4,
    label: "Reservations",
    route: "/",
    icon: <EventSeatIcon />,
  },
  {
    id: 5,
    label: "Order Online",
    route: "/",
    icon: <ShoppingCartIcon />,
  },
  {
    id: 6,
    label: "Login",
    route: "/",
    icon: <LoginIcon />,
  },
];