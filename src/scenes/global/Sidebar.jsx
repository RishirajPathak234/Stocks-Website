import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import AddHomeRoundedIcon from '@mui/icons-material/AddHomeRounded';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import { Star } from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected, sx }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        ...(sx || {gap: "1.5px", padding: "15px"}),
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: "#181818 !important",
          width: isCollapsed ? "100px" : "300px !important",
          minWidth: isCollapsed ? "100px" : "300px !important",
          maxWidth: isCollapsed ? "100px" : "300px !important",
         transition: "width 0.3s",
        },
        "& .pro-sidebar": {
          width: isCollapsed ? "100px" : "300px !important",
          minWidth: isCollapsed ? "100px" : "300px !important",
          maxWidth: isCollapsed ? "100px" : "300px !important",
          backgroundColor: "#181818 !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 20px 5px 15px !important", // reduce horizontal padding
          fontWeight: 900,
        },
        // Remove hover effect for the logo/menu item
        "& .sidebar-logo-menuitem.pro-inner-item:hover": {
          color: "inherit !important",
          backgroundColor: "   !important",
          borderRadius: "0",
        },
        "& .pro-inner-item:hover": {
          color: "#bbbbbb !important",
          backgroundColor: "transparent !important",
          borderRadius: "15px",
          width: "100%", // make the mint green hover background smaller
          marginLeft: "auto",
          marginRight: "auto",
        },

        "& .pro-menu-item": {
          backgroundColor: "#181818 !important",
          color: "gray !important",
        },

        "& .pro-menu-item.active": {
          color: "#282828 !important",
          borderRadius: "15px",
          padding: "5px 18px 5px 12px !important",
          backgroundColor: "#CFF7EF !important",
          width: "90%", 
          marginLeft: "auto",
          marginRight: "auto",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={
              isCollapsed ? (
                <MenuOpenRoundedIcon sx={{ fontSize: 40, ml: 4 }} />
              ) : undefined
            }
            style={{
              margin: "16px 0 28px 0",
              color: colors.grey[200],
              fontSize: "1.4rem",
              minHeight: "80px",
              pointerEvents: "auto",
              backgroundColor: "transparent !important",
            }}
            className="sidebar-logo-menuitem"
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                sx={{
                  fontSize: 38,
                  borderRadius: 15,
                  backgroundColor: "transparent",
                  padding: "5px 25px 5px 15px !important",
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight="bolder"
                  color={colors.grey[100]}
                  fontSize="1.4rem"
                  mt="-20px"
                  padding="2px 15px 0 5px !important"
                >
                  Sales <br /> Management
                </Typography>
                <Box sx={{ width: "10px" }} /> {/* Add gap between text and button */}
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOpenRoundedIcon sx={{ fontSize: 38, borderRadius: 15 }} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "3%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<AddHomeRoundedIcon sx={{ fontSize: 30 }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Profile"
              to="/profile"
              icon={<PermIdentityOutlinedIcon sx={{ fontSize: 30 }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Leaderboard"
              to="/"
              icon={<LeaderboardOutlinedIcon sx={{ fontSize: 30 }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Order"
              to="/invoices"
              icon={<ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Sales Report"
              to="/form"
              icon={<TrendingUpOutlinedIcon sx={{ fontSize: 30 }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Message"
              to="/calendar"
              icon={<MessageOutlinedIcon sx={{ fontSize: 30 }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/faq"
              icon={<SettingsOutlinedIcon sx={{ fontSize: 30 }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Favorites"
              to="/contacts"
              icon={<StarRoundedIcon sx={{ fontSize: 30 }} />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
