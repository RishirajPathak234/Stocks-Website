// import { Box, IconButton, useTheme } from "@mui/material";
// import { useContext } from "react";
// import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
// import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import Avatar from "@mui/material/Avatar";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { useState } from "react";

// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Typography from "@mui/material/Typography";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

// import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

// const Topbar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const colorMode = useContext(ColorModeContext);

//   return (
//     <Box display="flex" justifyContent="space-between" p={3}>
//       {/* SEARCH BAR */}
//       <Box
//         display="flex"
//         backgroundColor={"#303030"}
//         borderRadius="8px"
//         padding="10px 10px"
//         width="60%"
//       >
//         <IconButton type="button" sx={{ p: 1 }}>
//           <SearchIcon />
//         </IconButton>
//         <InputBase
//           sx={{ flex: 1, fontSize: 16 }}
//           placeholder="Search here..."
//         />
//       </Box>

//       {/* ICONS */}
//       <Box display="flex" alignItems="center">
//         <IconButton>
//           <NotificationAddOutlinedIcon sx={{ fontSize: 25 }} />
//         </IconButton>
//         <Box display="flex" alignItems="center" ml={2}>
//           <Avatar src="./assets/1.jpg" sx={{ width: 40, height: 40 }} />
//           <IconButton>
//             <ArrowDropDownIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Topbar;

// import { Box, IconButton, useTheme } from "@mui/material";
// import { useContext, useState } from "react";
// import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
// import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
// import SearchIcon from "@mui/icons-material/Search";
// import Avatar from "@mui/material/Avatar";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Typography from "@mui/material/Typography";
// import PersonIcon from "@mui/icons-material/Person";
// import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
// import SwitchAccountRoundedIcon from "@mui/icons-material/SwitchAccountRounded";
// import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

// const Topbar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const colorMode = useContext(ColorModeContext);

//   // Add state for dropdown menu
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//     <KeyboardArrowUpOutlinedIcon />;
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box display="flex" justifyContent="space-between" p={3}>
//       {/* SEARCH BAR */}
//       <Box
//         display="flex"
//         backgroundColor={"#1F1F24"}
//         borderRadius="8px"
//         padding="10px 10px"
//         width="60%"
//       >
//         <IconButton type="button" sx={{ p: 1 }}>
//           <SearchIcon />
//         </IconButton>
//         <InputBase
//           sx={{ flex: 1, fontSize: 16 }}
//           placeholder="Search here..."
//         />
//       </Box>

//       {/* ICONS */}
//       <Box display="flex" alignItems="center">
//         <IconButton>
//           <NotificationsNoneRoundedIcon sx={{ fontSize: 25 }} />
//         </IconButton>
//         <Box display="flex" alignItems="center" ml={2}>
//           <Avatar src="./assets/1.jpg" sx={{ width: 40, height: 40 }} />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Topbar;


import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SwitchAccountRoundedIcon from "@mui/icons-material/SwitchAccountRounded";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // Add state for dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center"
      px={4} 
      py={3.5}
      sx={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #f0f0f0',
        minHeight: '70px',
      
      }}
    >
      {/* LEFT SIDE - GREETING */}
      <Box>
        <Typography 
          variant="h5" 
          sx={{ 
            color: '#333333',
            fontWeight: 550,
            fontSize: '23px'
          }}
        >
          Hello Matt,
        </Typography>
      </Box>

      {/* CENTER - SEARCH BAR */}
      <Box
        display="flex"
        alignItems="center"
        sx={{
          backgroundColor: '#f8f9fa',
          borderRadius: '12px',
          padding: '6.5px 20px',
          width: '375px',
          maxWidth: '40%',
          border: '1px solid #e9ecef',
          marginRight: "-45%",
        }}
      >
        <SearchIcon sx={{ color: '#6c757d', fontSize: 22, mr: 1, ml: -1 }} />
        <InputBase
          sx={{ 
            flex: 1, 
            fontSize: 14,
            color: '#495057',
            '& input::placeholder': {
              color: '#6c757d',
              opacity: 1
            }
          }}
          placeholder="Search for stocks and more"
        />
      </Box>

      {/* RIGHT SIDE - ICONS */}
      <Box display="flex" alignItems="center" gap={2}>
        {/* Notification Icon */}
        <IconButton 
          sx={{ 
            color: '#6c757d',
            '&:hover': {
              backgroundColor: '#f8f9fa'
            }
          }}
        >
          <NotificationsNoneRoundedIcon sx={{ fontSize: 24, color: "black" }} />
        </IconButton>
        
        {/* Profile Section without Dropdown */}
        <Box 
          display="flex" 
          alignItems="center" 
          sx={{ cursor: 'pointer' }}
        >
          <Avatar 
            src="./assets/1.jpg" 
            sx={{ 
              width: 40, 
              height: 40,
              border: '2px solid #e9ecef'
            }} 
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;