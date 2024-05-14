import React from "react";
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import Home from '../assets/Home.png'

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AddHomeWorkOutlinedIcon />,
  },

  {
    title: "Category",
    path: "/api/categories",
    icon: <GridViewOutlinedIcon />,
  },
  {
    title: "Products",
    path: "/api/products",
    icon: <RedeemOutlinedIcon />,
  },

];