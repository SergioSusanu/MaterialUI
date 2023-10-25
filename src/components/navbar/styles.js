import {AppStyles} from "../app/AppStyles";

 const drawerWidth = 240;

export const NavBarStyles = {
  drawer: {
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
    },
  },
  icons: { color: AppStyles.Colors.PrimaryGreen },
  text: { color: AppStyles.Colors.PrimaryGreen, fontWeight:"700" },
};

