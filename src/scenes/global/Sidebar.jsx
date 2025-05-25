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

"use client"

import { useState } from "react"
import { Box, Typography, Card, CardContent } from "@mui/material"
import DashboardIcon from "@mui/icons-material/Dashboard"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import WalletSharpIcon from "@mui/icons-material/WalletSharp"
import CompareArrowsIcon from "@mui/icons-material/CompareArrows"
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined"
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined"
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp"
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"

const Item = ({ title, to, icon, selected, setSelected, sx }) => {
  return (
    <Box
      onClick={() => setSelected(title)}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "12px 16px",
        margin: "2px 8px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        backgroundColor: selected === title ? "#e0e7ff" : "transparent",
        color: selected === title ? "#6366f1" : "#64748b",
        fontWeight: selected === title ? 600 : 400,
        "&:hover": {
          backgroundColor: selected === title ? "#e0e7ff" : "#f8fafc",
        },
        ...(sx || {}),
      }}
    >
      <Box
        sx={{
          minWidth: "32px",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "16px",
          color: "inherit",
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontSize: "16px", fontWeight: "inherit" }}>{title}</Typography>
    </Box>
  )
}

const Sidebar = () => {
  const [selected, setSelected] = useState("Dashboard")

  return (
    <Box
      sx={{
        height: "78em",
        width: "400px",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* LOGO */}
      <Box sx={{ padding: "24px 20px 20px 25px", flexShrink: 0 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#1e293b",
            fontSize: "1.9rem",
            fontWeight: 700,
            letterSpacing: "-0.025em",
          }}
        >
          Foxstocks
        </Typography>
      </Box>

      {/* USER PANEL SECTION */}
      <Box sx={{ padding: "0 20px 16px 20px", flexShrink: 0 }}>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#64748b",
            letterSpacing: "0.02em",
            marginLeft: "6px",
            marginTop: "28px",
            marginBottom: "-5px",
            
          }}
        >
          User Panel
        </Typography>
      </Box>

      /* MENU ITEMS - Scrollable area */
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          paddingBottom: "16px",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          padding: "0 16px",
          display: "flex",
          flexDirection: "column",
          gap: "18px", // Add vertical gap between items
        }}
      >
        <Item
          title="Dashboard"
          to="/"
          icon={<DashboardIcon sx={{ fontSize: 24 }} />}
          selected={selected}
          setSelected={setSelected}
        />

        <Item
          title="Portfolio"
          to="/profile"
          icon={<BusinessCenterIcon sx={{ fontSize: 24 }} />}
          selected={selected}
          setSelected={setSelected}
        />

        <Item
          title="Trading & Market"
          to="/trading"
          icon={<BarChartOutlinedIcon sx={{ fontSize: 24 }} />}
          selected={selected}
          setSelected={setSelected}
        />

        <Item
          title="Research Portal"
          to="/research"
          icon={<WalletSharpIcon sx={{ fontSize: 24 }} />}
          selected={selected}
          setSelected={setSelected}
        />

        <Item
          title="Wallet Transfer Pay"
          to="/wallet"
          icon={<AccountBalanceSharpIcon sx={{ fontSize: 24 }} />}
          selected={selected}
          setSelected={setSelected}
        />

        <Item
          title="Reporting & Transaction"
          to="/reporting"
          icon={<CompareArrowsIcon sx={{ fontSize: 24 }} />}
          selected={selected}
          setSelected={setSelected}
        />

        <Item
          title="Tutorial"
          to="/tutorial"
          icon={<SchoolOutlinedIcon sx={{ fontSize: 24 }} />}
          selected={selected}
          setSelected={setSelected}
        />
      </Box>

      {/* BOTTOM SECTION - Fixed at bottom */}
      <Box sx={{ flexShrink: 0 ,paddingBottom: "20px" }}>
        {/* MOTIVATIONAL QUOTE CARD */}
        <Box
          sx={{
            px: 3,
            pb: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box",
            py: -20,
          }}
        >
          <Card
            sx={{
              width: "100%",
              maxWidth: 320,
              minWidth: 0,
              height: "auto",
              background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
              border: "none",
              borderRadius: "16px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              mx: "auto",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-2px)",
              },
              overflow: "hidden",
            }}
          >
            <CardContent sx={{ p: 3, textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #fef3c7 0%, #fbbf24 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 35,
                      height: 35,
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                >
                  <LightbulbOutlinedIcon
                    sx={{
                      fontSize: 24,
                      color: "#92400e",
                      zIndex: 1,
                    }}
                  />
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#166534",
                  textAlign: "center",
                  mb: 1.5,
                  letterSpacing: "0.01em",
                }}
              >
                Thoughts Time
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#166534",
                  textAlign: "center",
                  lineHeight: 1.4,
                  fontWeight: 400,
                }}
              >
                If you aren't willing to own a stock for 10 years, don't even think about owning it for 10 minutes.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* LOGOUT BUTTON */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            px: 4,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              color: "#64748b",
              cursor: "pointer",
              padding: "15px 12px",
              borderRadius: "8px",
              transition: "all 0.2s",
            "&:hover": {
              backgroundColor: "#f8fafc",
              color: "#ef4444",
              boxShadow: "0 2px 8px 0 rgba(239,68,68,0.08)",
              transition: "all 0.2s",
            },
              marginTop: "30px",
              marginBottom: "0px",
            }}
          >
            <ExitToAppOutlinedIcon sx={{ fontSize: 24, mr: 2 }} />
            <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>Logout</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
