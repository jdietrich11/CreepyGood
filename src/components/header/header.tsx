import React from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./headerStyles.scss";
import { SvgIcon } from "@mui/material";

const Header: React.FC = () => {
  return (
    <div className="header">
      <SvgIcon className="Icon" component={MenuIcon} sx={{ fontSize: 35 }} />
      <Link to="/" className="home">
        Creepy Good's Artist Shop
      </Link>
      <SvgIcon
        className="Icon"
        component={ShoppingCartOutlinedIcon}
        sx={{ fontSize: 35 }}
      />
    </div>
  );
};

export default Header;
