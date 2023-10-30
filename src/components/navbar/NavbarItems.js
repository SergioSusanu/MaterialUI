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
    route: "/about",
    icon: <PeopleAltIcon />,
  },
  {
    id: 7,
    label: "Authentication",
    route: "/authentication",
    icon: <PeopleAltIcon />,
  },
  {
    id: 3,
    label: "Menu",
    route: "/menu",
    icon: <MenuBookIcon />,
  },
  {
    id: 4,
    label: "Reservations",
    route: "/reservations",
    icon: <EventSeatIcon />,
  },
  {
    id: 5,
    label: "Order Online",
    route: "/order",
    icon: <ShoppingCartIcon />,
  },
  {
    id: 6,
    label: "Contact",
    route: "/contact",
    icon: <LoginIcon />,
  },
];