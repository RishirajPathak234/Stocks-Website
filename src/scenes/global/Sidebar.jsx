// import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
// import { tokens } from "../../theme";
// import AddHomeRoundedIcon from '@mui/icons-material/AddHomeRounded';
// import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
// import StarRoundedIcon from '@mui/icons-material/StarRounded';
// import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
// import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
// import { Star } from "@mui/icons-material";

// const Item = ({ title, to, icon, selected, setSelected, sx }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//         ...(sx || {gap: "1.5px", padding: "15px"}),
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

// const Sidebar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState("Dashboard");

//   return (
//     <Box
//       sx={{
//         "& .pro-sidebar-inner": {
//           background: "#060609 !important",
//           width: isCollapsed ? "100px" : "300px !important",
//           minWidth: isCollapsed ? "100px" : "300px !important",
//           maxWidth: isCollapsed ? "100px" : "300px !important",
//          transition: "width 0.3s",
//         },
//         "& .pro-sidebar": {
//           width: isCollapsed ? "100px" : "300px !important",
//           minWidth: isCollapsed ? "100px" : "300px !important",
//           maxWidth: isCollapsed ? "100px" : "300px !important",
//           backgroundColor: "#060609 !important",
//         },
//         "& .pro-icon-wrapper": {
//           backgroundColor: "transparent !important",
//         },
//         "& .pro-inner-item": {
//           padding: "5px 20px 5px 15px !important", // reduce horizontal padding
//           fontWeight: 900,
//         },
//         // Remove hover effect for the logo/menu item
//         "& .sidebar-logo-menuitem.pro-inner-item:hover": {
//           color: "inherit !important",
//           backgroundColor: "   !important",
//           borderRadius: "0",
//         },
//         "& .pro-inner-item:hover": {
//           color: "#bbbbbb !important",
//           backgroundColor: "transparent !important",
//           borderRadius: "15px",
//           width: "100%", // make the mint green hover background smaller
//           marginLeft: "auto",
//           marginRight: "auto",
//         },

//         "& .pro-menu-item": {
//           backgroundColor: "#060609 !important",
//           color: "gray !important",
//         },

//         "& .pro-menu-item.active": {
//           color: "#282828 !important",
//           borderRadius: "15px",
//           padding: "5px 18px 5px 12px !important",
//           backgroundColor: "#CFF7EF !important",
//           width: "90%", 
//           marginLeft: "auto",
//           marginRight: "auto",
//         },
//       }}
//     >
//       <ProSidebar collapsed={isCollapsed}>
//         <Menu iconShape="square">
//           {/* LOGO AND MENU ICON */}
//           <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={
//               isCollapsed ? (
//                 <MenuOpenRoundedIcon sx={{ fontSize: 40, ml: 4 }} />
//               ) : undefined
//             }
//             style={{
//               margin: "16px 0 28px 0",
//               color: colors.grey[200],
//               fontSize: "1.4rem",
//               minHeight: "80px",
//               pointerEvents: "auto",
//               backgroundColor: "transparent !important",
//             }}
//             className="sidebar-logo-menuitem"
//           >
//             {!isCollapsed && (
//               <Box
//                 display="flex"
//                 alignItems="center"
//                 ml="0"
//                 sx={{
//                   fontSize: 38,
//                   borderRadius: 15,
//                   backgroundColor: "transparent",
//                   padding: "10px 25px 5px 0px !important",
//                   width: "100%",
//                 }}
//               >
//                 <Typography
//                   variant="h3"
//                   color={colors.grey[100]}
//                   fontSize="1.6rem"
//                   mt="-10px"
//                   padding="1px 0px 28px 0px !important"
//                   sx={{ flexGrow: 1, textAlign: "left" }}
//                 >
//                   Foxstocks
//                 </Typography>
              
          
//               </Box>
//             )}
//           </MenuItem>

//           <Box paddingLeft={isCollapsed ? undefined : "3%"}>
//             <Item
//               title="Dashboard"
//               to="/"
//               icon={<AddHomeRoundedIcon sx={{ fontSize: 30 }} />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Item
//               title="Profile"
//               to="/profile"
//               icon={<PermIdentityOutlinedIcon sx={{ fontSize: 30 }} />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Item
//               title="Leaderboard"
//               to="/"
//               icon={<LeaderboardOutlinedIcon sx={{ fontSize: 30 }} />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Item
//               title="Order"
//               to="/invoices"
//               icon={<ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Item
//               title="Sales Report"
//               to="/form"
//               icon={<TrendingUpOutlinedIcon sx={{ fontSize: 30 }} />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Message"
//               to="/calendar"
//               icon={<MessageOutlinedIcon sx={{ fontSize: 30 }} />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Settings"
//               to="/faq"
//               icon={<SettingsOutlinedIcon sx={{ fontSize: 30 }} />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Item
//               title="Favorites"
//               to="/contacts"
//               icon={<StarRoundedIcon sx={{ fontSize: 30 }} />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//           </Box>
//         </Menu>
//       </ProSidebar>
//     </Box>
//   );
// };

// export default Sidebar;


import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import AddHomeRoundedIcon from '@mui/icons-material/AddHomeRounded';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const Item = ({ title, to, icon, selected, setSelected, sx }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? "#6366f1" : "#64748b",
        margin: "2px 16px",
        borderRadius: "8px",
        padding: "8px 12px",
        fontSize: "14px",
        fontWeight: selected === title ? 600 : 400,
        backgroundColor: selected === title ? "#e0e7ff" : "transparent",
        ...(sx || {}),
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography sx={{ fontSize: "14px", fontWeight: "inherit" }}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        height: "100vh",
        width: "280px",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        "& .pro-sidebar-inner": {
          background: "#ffffff !important",
          width: "280px !important",
          minWidth: "280px !important",
          maxWidth: "280px !important",
          height: "100%",
          border: "none !important",
        },
        "& .pro-sidebar": {
          width: "280px !important",
          minWidth: "280px !important",
          maxWidth: "280px !important",
          height: "100vh",
          backgroundColor: "#ffffff !important",
          border: "none !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
          minWidth: "20px !important",
          width: "20px !important",
          height: "20px !important",
          display: "flex !important",
          alignItems: "center !important",
          justifyContent: "center !important",
          marginRight: "12px !important",
        },
        "& .pro-inner-item": {
          padding: "8px 12px !important",
          fontWeight: 400,
          fontSize: "14px",
          borderRadius: "8px",
          margin: "2px 16px",
          transition: "all 0.2s ease",
          color: "#64748b !important",
        },
        "& .pro-inner-item:hover": {
          color: "#6366f1 !important",
          backgroundColor: "#f8fafc !important",
        },
        "& .pro-menu-item": {
          backgroundColor: "transparent !important",
          color: "#64748b !important",
        },
        "& .pro-menu-item.active": {
          color: "#6366f1 !important",
          backgroundColor: "#e0e7ff !important",
          fontWeight: "600 !important",
          "& .pro-icon-wrapper": {
            color: "#6366f1 !important",
          }
        },
        "& .pro-menu-item .pro-icon-wrapper": {
          color: "#64748b !important",
        },
        "& .pro-menu-item.active .pro-icon-wrapper": {
          color: "#6366f1 !important",
        }
      }}
    >
      <ProSidebar collapsed={false}>
        <Menu iconShape="square">
          {/* LOGO */}
          <Box sx={{ padding: "24px 20px 16px 20px" }}>
            <Typography
              variant="h5"
              sx={{ 
                color: "#1e293b",
                fontSize: "1.25rem",
                fontWeight: 600,
                letterSpacing: "-0.025em"
              }}
            >
              Foxstocks
            </Typography>
          </Box>

          {/* USER PANEL SECTION */}
          <Box sx={{ padding: "0 20px 16px 20px" }}>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                color: "#64748b",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "8px"
              }}
            >
              User Panel
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Item
              title="Dashboard"
              to="/"
              icon={<AddHomeRoundedIcon sx={{ fontSize: 18 }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Portfolio"
              to="/profile"
              icon={<PermIdentityOutlinedIcon sx={{ fontSize: 18 }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Trading & Market"
              to="/trading"
              icon={<BarChartOutlinedIcon sx={{ fontSize: 18 }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Research Portal"
              to="/research"
              icon={<SearchOutlinedIcon sx={{ fontSize: 18 }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Wallet Transfer Pay"
              to="/wallet"
              icon={<AccountBalanceWalletOutlinedIcon sx={{ fontSize: 18 }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Reporting & Transaction"
              to="/reporting"
              icon={<AssessmentOutlinedIcon sx={{ fontSize: 18 }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Tutorial"
              to="/tutorial"
              icon={<SchoolOutlinedIcon sx={{ fontSize: 18 }} />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>

          {/* MOTIVATIONAL QUOTE CARD */}
          <Box sx={{ padding: "16px 20px 24px 20px" }}>
            <Card 
              sx={{ 
                backgroundColor: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "12px",
                boxShadow: "none"
              }}
            >
              <CardContent sx={{ padding: "16px !important" }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
                  <Box
                    sx={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#dcfce7",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <LightbulbOutlinedIcon sx={{ fontSize: 16, color: "#16a34a" }} />
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "#16a34a",
                    textAlign: "center",
                    marginBottom: "4px"
                  }}
                >
                  Thoughts Time
                </Typography>
                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "#166534",
                    textAlign: "center",
                    lineHeight: 1.4
                  }}
                >
                  If you aren't willing to own a stock for 10 years, don't even think about owning it for 10 minutes.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* LOGOUT */}
          <Box sx={{ padding: "0 20px 24px 20px" }}>
            <MenuItem
              style={{
                color: "#64748b",
                padding: "8px 12px",
                borderRadius: "8px",
                fontSize: "14px",
              }}
              icon={<ExitToAppOutlinedIcon sx={{ fontSize: 18 }} />}
            >
              <Typography sx={{ fontSize: "14px" }}>Logout</Typography>
            </MenuItem>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;