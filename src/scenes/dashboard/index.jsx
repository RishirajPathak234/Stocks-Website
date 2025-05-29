// import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockData";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import Header from "../../components/Header";

// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (

//     <Box m="20px">
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center" >
//         <Header title="Today's Sales" subtitle="Sales Summary" />

//       </Box>

//       {/* GRID & CHARTS */}
//       <Box
//         display="grid"
//         gridTemplateColumns="repeat(12, 1fr)"
//         gridAutoRows="140px"
//         gap="20px"
//       >

//         {/* ROW 1 */}
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="12,361"
//             subtitle="Emails Sent"
//             progress="0.75"
//             increase="+14%"
//             icon={
//               <EmailIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="431,225"
//             subtitle="Sales Obtained"
//             progress="0.50"
//             increase="+21%"
//             icon={
//               <PointOfSaleIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="32,441"
//             subtitle="New Clients"
//             progress="0.30"
//             increase="+5%"
//             icon={
//               <PersonAddIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="1,325,134"
//             subtitle="Traffic Received"
//             progress="0.80"
//             increase="+43%"
//             icon={
//               <TrafficIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>

//         {/* ROW 2 */}
//         <Box
//           gridColumn="span 8"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//         >
//           <Box
//             mt="25px"
//             p="0 30px"
//             display="flex "
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Box>
//               <Typography
//                 variant="h5"
//                 fontWeight="600"
//                 color={colors.grey[100]}
//               >
//                 Revenue Generated
//               </Typography>
//               <Typography
//                 variant="h3"
//                 fontWeight="bold"
//                 color={colors.greenAccent[500]}
//               >
//                 $59,342.32
//               </Typography>
//             </Box>
//             <Box>
//               <IconButton>
//                 <DownloadOutlinedIcon
//                   sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
//                 />
//               </IconButton>
//             </Box>
//           </Box>
//           <Box height="250px" m="-20px 0 0 0">
//             <LineChart isDashboard={true} />
//           </Box>
//         </Box>
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           overflow="auto"
//         >
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             borderBottom={`4px solid ${colors.primary[500]}`}
//             colors={colors.grey[100]}
//             p="15px"
//           >
//             <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
//               Recent Transactions
//             </Typography>
//           </Box>
//           {mockTransactions.map((transaction, i) => (
//             <Box
//               key={`${transaction.txId}-${i}`}
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//               borderBottom={`4px solid ${colors.primary[500]}`}
//               p="15px"
//             >
//               <Box>
//                 <Typography
//                   color={colors.greenAccent[500]}
//                   variant="h5"
//                   fontWeight="600"
//                 >
//                   {transaction.txId}
//                 </Typography>
//                 <Typography color={colors.grey[100]}>
//                   {transaction.user}
//                 </Typography>
//               </Box>
//               <Box color={colors.grey[100]}>{transaction.date}</Box>
//               <Box
//                 backgroundColor={colors.greenAccent[500]}
//                 p="5px 10px"
//                 borderRadius="4px"
//               >
//                 ${transaction.cost}
//               </Box>
//             </Box>
//           ))}
//         </Box>

//         {/* ROW 3 */}
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           p="30px"
//         >
//           <Typography variant="h5" fontWeight="600">
//             Campaign
//           </Typography>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             mt="25px"
//           >
//             <ProgressCircle size="125" />
//             <Typography
//               variant="h5"
//               color={colors.greenAccent[500]}
//               sx={{ mt: "15px" }}
//             >
//               $48,352 revenue generated
//             </Typography>
//             <Typography>Includes extra misc expenditures and costs</Typography>
//           </Box>
//         </Box>
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//         >
//           <Typography
//             variant="h5"
//             fontWeight="600"
//             sx={{ padding: "30px 30px 0 30px" }}
//           >
//             Sales Quantity
//           </Typography>
//           <Box height="250px" mt="-20px">
//             <BarChart isDashboard={true} />
//           </Box>
//         </Box>
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           padding="30px"
//         >
//           <Typography
//             variant="h5"
//             fontWeight="600"
//             sx={{ marginBottom: "15px" }}
//           >
//             Geography Based Traffic
//           </Typography>
//           <Box height="200px">
//             <GeographyChart isDashboard={true} />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

// import { Box, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../theme";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

// // StatBox Component Definition
// const StatBox = ({ title, subtitle, icon, increase }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   // Extract the percentage color based on the first character
//   const getIncreaseColor = (text) => {
//     if (text.startsWith("+")) {
//       // Different colors based on the metric
//       if (increase.includes("10%")) return "#FFD700"; // Yellow for 10%
//       if (increase.includes("8%")) return "#4ECCA3"; // Teal for 8%
//       if (increase.includes("2%")) return "#D667CF"; // Purple for 2%
//       if (increase.includes("3%")) return "#38B2AC"; // Blue for 3%
//       return colors.greenAccent[600]; // Default green
//     }
//     return colors.redAccent[600]; // Red for negative values
//   };

//   return (
//     <Box width="100%" m="0" p="20px">
//       <Box display="flex" justifyContent="flex-start">
//         {icon}
//       </Box>
//       <Box mt="20px">
//         <Typography variant="h1" fontWeight="bold" color={colors.grey[100]}>
//           {title}
//         </Typography>
//         <Typography variant="h5" color={colors.grey[400]} mt="5px">
//           {subtitle}
//         </Typography>
//       </Box>
//       <Box mt="10px">
//         <Typography
//           variant="h6"
//           fontWeight="bold"
//           color={getIncreaseColor(increase)}
//         >
//           {increase}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// // Progress Bar Component for Top Products
// const ProgressBar = ({ value, color }) => {
//   return (
//     <Box width="100%" height="8px" bgcolor="#2e2e3c" borderRadius="4px">
//       <Box
//         height="100%"
//         bgcolor={color}
//         borderRadius="4px"
//         width={`${value}%`}
//       />
//     </Box>
//   );
// };

// // Main Dashboard Component
// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   // Mock data for top products
//   const topProducts = [
//     { id: "01", name: "Home Decore Range", popularity: 78, color: "#FFB74D" },
//     { id: "02", name: "Disney Princess Dress", popularity: 62, color: "#4ECCA3" },
//     { id: "03", name: "Bathroom Essentials", popularity: 51, color: "#64B5F6" },
//     { id: "04", name: "Apple Smartwatch", popularity: 29, color: "#E57373" },
//   ];

//   // Mock data for volume chart
//   const volumeData = [75, 80, 60, 40, 85, 95];
//   const maxHeight = 190; // maximum height in pixels for the tallest bar

//   return (
//     <Box m="20px">
//       {/* TOP SALES SUMMARY SECTION */}
//       <Box
//         sx={{
//           backgroundColor: colors.primary[500],
//           borderRadius: "10px",
//           padding: "30px",
//           mb: "20px"
//         }}
//       >
//         {/* HEADER */}
//         <Box>
//           <Typography
//             variant="h2"
//             fontWeight="bold"
//             color={colors.grey[100]}
//             mb="5px"
//           >
//             Today's Sales
//           </Typography>
//           <Typography
//             variant="h5"
//             color={colors.grey[500]}
//             mb="20px"
//           >
//             Sales Summary
//           </Typography>
//         </Box>

//         {/* GRID & CHARTS */}
//         <Box
//           display="grid"
//           gridTemplateColumns="repeat(12, 1fr)"
//           gridAutoRows="140px"
//           gap="20px"
//         >

//           {/* Total Sales */}
//           <Box
//             gridColumn="span 3"
//             backgroundColor={colors.primary[400]}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             borderRadius="10px"
//           >
//             <StatBox
//               title="$5k"
//               subtitle="Total Sales"
//               increase="+10% from yesterday"
//               icon={
//                 <BarChartOutlinedIcon
//                   sx={{ color: "#FFD700", fontSize: "26px" }}
//                 />
//               }
//             />
//           </Box>

//           {/* Total Order */}
//           <Box
//             gridColumn="span 3"
//             backgroundColor={colors.primary[400]}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             borderRadius="10px"
//           >
//             <StatBox
//               title="500"
//               subtitle="Total Order"
//               increase="+8% from yesterday"
//               icon={
//                 <BoltOutlinedIcon
//                   sx={{ color: "#4ECCA3", fontSize: "26px" }}
//                 />
//               }
//             />
//           </Box>

//           {/* Product Sold */}
//           <Box
//             gridColumn="span 3"
//             backgroundColor={colors.primary[400]}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             borderRadius="10px"
//           >
//             <StatBox
//               title="9"
//               subtitle="Product Sold"
//               increase="+2% from yesterday"
//               icon={
//                 <ShoppingBagOutlinedIcon
//                   sx={{ color: "#D667CF", fontSize: "26px" }}
//                 />
//               }
//             />
//           </Box>

//           {/* New Customer */}
//           <Box
//             gridColumn="span 3"
//             backgroundColor={colors.primary[400]}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             borderRadius="10px"
//           >
//             <StatBox
//               title="12"
//               subtitle="New Customer"
//               increase="+3% from yesterday"
//               icon={
//                 <PersonAddOutlinedIcon
//                   sx={{ color: "#38B2AC", fontSize: "26px" }}
//                 />
//               }
//             />
//           </Box>
//         </Box>
//       </Box>

//       {/* BOTTOM SECTIONS: LEVEL AND TOP PRODUCTS */}
//       <Box display="flex" gap="20px">
//         {/* Level Section - Bar Chart */}
//         <Box
//           sx={{
//             backgroundColor: colors.primary[500],
//             borderRadius: "10px",
//             padding: "30px",
//             flex: 1
//           }}
//         >
//           <Typography
//             variant="h2"
//             fontWeight="bold"
//             color={colors.grey[100]}
//             mb="30px"
//           >
//             Level
//           </Typography>

//           {/* Bar Chart */}
//           <Box height="250px" display="flex" alignItems="flex-end" position="relative">
//             {volumeData.map((value, index) => (
//               <Box
//                 key={index}
//                 mx="18px"
//                 display="flex"
//                 flexDirection="column"
//                 alignItems="center"
//                 height="100%"
//                 justifyContent="flex-end"
//               >
//                 <Box
//                   width="35px"
//                   height={`${(value / 100) * maxHeight}px`}
//                   bgcolor="#4ECCA3"
//                   borderRadius="6px"
//                 />
//               </Box>
//             ))}
//           </Box>

//           {/* Legend */}
//           <Box display="flex" justifyContent="space-between" mt="10px" px="10px">
//             <Box display="flex" alignItems="center">
//               <Box width="10px" height="10px" borderRadius="50%" bgcolor="#4ECCA3" mr="10px" />
//               <Typography color={colors.grey[300]}>Volume</Typography>
//             </Box>
//             <Typography color={colors.grey[300]}>Service</Typography>
//           </Box>
//         </Box>

//         {/* Top Products Section */}
//         <Box
//           sx={{
//             backgroundColor: colors.primary[500],
//             borderRadius: "10px",
//             padding: "30px",
//             flex: 1
//           }}
//         >
//           <Typography
//             variant="h2"
//             fontWeight="bold"
//             color={colors.grey[100]}
//             mb="30px"
//           >
//             Top Products
//           </Typography>

//           {/* Table Header */}
//           <Box display="flex" mb="15px">
//             <Typography color={colors.grey[400]} flex="1">
//               #
//             </Typography>
//             <Typography color={colors.grey[400]} flex="3">
//               Name
//             </Typography>
//             <Typography color={colors.grey[400]} flex="3">
//               Popularity
//             </Typography>
//             <Typography color={colors.grey[400]} flex="1" textAlign="right">
//               Sales
//             </Typography>
//           </Box>

//           {/* Table Rows */}
//           {topProducts.map((product) => (
//             <Box
//               key={product.id}
//               display="flex"
//               alignItems="center"
//               mb="20px"
//               pb="15px"
//               borderBottom={`1px solid ${colors.primary[400]}`}
//             >
//               <Typography color={colors.grey[100]} flex="1">
//                 {product.id}
//               </Typography>
//               <Typography color={colors.grey[100]} flex="3">
//                 {product.name}
//               </Typography>
//               <Box flex="3" pr="15px">
//                 <ProgressBar value={product.popularity} color={product.color} />
//               </Box>
//               <Box
//                 flex="1"
//                 sx={{
//                   border: `1px solid ${product.color}`,
//                   borderRadius: "4px",
//                   padding: "5px 10px",
//                   textAlign: "center",
//                   color: colors.grey[100]
//                 }}
//               >
//                 {product.popularity}%
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

// "use client"

// import { Box, Typography, useTheme } from "@mui/material"
// import { tokens } from "../../theme"
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
// import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined"
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
// import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined"

// // StatBox Component Definition
// const StatBox = ({ title, subtitle, icon, increase }) => {
//   const theme = useTheme()
//   const colors = tokens(theme.palette.mode)

//   // Extract the percentage color based on the first character
//   const getIncreaseColor = (text) => {
//     if (text.startsWith("+")) {
//       // Different colors based on the metric
//       if (increase.includes("10%")) return "#FFD700" // Yellow for 10%
//       if (increase.includes("8%")) return "#4ECCA3" // Teal for 8%
//       if (increase.includes("2%")) return "#D667CF" // Purple for 2%
//       if (increase.includes("3%")) return "#38B2AC" // Blue for 3%
//       return colors.greenAccent[600] // Default green
//     }
//     return colors.redAccent[600] // Red for negative values
//   }

//   return (
//     <Box width="100%" m="0" p="20px">
//       <Box display="flex" justifyContent="flex-start">
//         {icon}
//       </Box>
//       <Box mt="20px">
//         <Typography variant="h1" fontWeight="bold" color={colors.grey[100]}>
//           {title}
//         </Typography>
//         <Typography variant="h5" color={colors.grey[400]} mt="5px">
//           {subtitle}
//         </Typography>
//       </Box>
//       <Box mt="10px">
//         <Typography variant="h6" fontWeight="bold" color={getIncreaseColor(increase)}>
//           {increase}
//         </Typography>
//       </Box>
//     </Box>
//   )
// }

// // Progress Bar Component for Top Products
// const ProgressBar = ({ value, color }) => {
//   return (
//     <Box width="100%" height="8px" bgcolor="#181818" borderRadius="4px">
//       <Box height="100%" bgcolor={color} borderRadius="4px" width={`${value}%`} />
//     </Box>
//   )
// }

// // Main Dashboard Component
// const Dashboard = () => {
//   const theme = useTheme()
//   const colors = tokens(theme.palette.mode)

//   // Mock data for top products
//   const topProducts = [
//     { id: "01", name: "Home Decore Range", popularity: 78, color: "#FFB74D" },
//     { id: "02", name: "Disney Princess Dress", popularity: 62, color: "#4ECCA3" },
//     { id: "03", name: "Bathroom Essentials", popularity: 51, color: "#64B5F6" },
//     { id: "04", name: "Apple Smartwatch", popularity: 29, color: "#E57373" },
//   ]

//   // Mock data for volume chart
//   const volumeData = [100, 80, 60, 40, 85, 95]
//   const maxHeight = 190 // maximum height in pixels for the tallest bar

//   return (
//     <>
//       {/* TOP SALES SUMMARY SECTION */}
//       <Box
//         sx={{
//           backgroundColor: "#181818",
//           borderRadius: "15px",
//           padding: "20px",
//           margin: "0 auto",
//           width: "98%",
//           mb: "20px",

//         }}
//       >
//         {/* HEADER */}
//         <Box width="100%" mb="20px" p="20px" >
//           <Box>
//             <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="5px">
//               Today's Sales
//             </Typography>
//             <Typography variant="h5" color={colors.grey[400]} mb="20px">
//               Sales Summary
//             </Typography>
//           </Box>

//           {/* GRID & CHARTS */}
//           <Box display="grid"  gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="200px" gap="20px">
//             {/* Total Sales */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="$5k"
//                 subtitle="Total Sales"
//                 increase="+10% from yesterday"
//                 icon={<BarChartOutlinedIcon sx={{ color: "#FFD700", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* Total Order */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="500"
//                 subtitle="Total Order"
//                 increase="+8% from yesterday"
//                 icon={<BoltOutlinedIcon sx={{ color: "#4ECCA3", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* Product Sold */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="9"
//                 subtitle="Product Sold"
//                 increase="+2% from yesterday"
//                 icon={<ShoppingBagOutlinedIcon sx={{ color: "#D667CF", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* New Customer */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="12"
//                 subtitle="New Customer"
//                 increase="+3% from yesterday"
//                 icon={<PersonAddOutlinedIcon sx={{ color: "#38B2AC", fontSize: "26px" }} />}
//               />
//             </Box>
//           </Box>
//         </Box>
//       </Box>

//       {/* BOTTOM SECTIONS: LEVEL AND TOP PRODUCTS */}
//         <Box display="flex" gap="20px">
//           {/* Level Section - Bar Chart */}
//           <Box
//             sx={{
//               backgroundColor: "#181818",
//               borderRadius: "10px",
//               padding: "30px",
//               flex: 1,
//               width: "45%",
//               ml: "13px",
//             }}
//           >
//             <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="30px">
//               Level
//             </Typography>

//             {/* <Box height="250px" display="flex" alignItems="flex-end" position="relative">
//               {volumeData.map((value, index) => (
//                 <Box
//                   key={index}
//                   mx="18px"
//                   display="flex"
//                   flexDirection="column"
//                   alignItems="center"
//                   height="100%"
//                   justifyContent="flex-end"
//                 >

//                   // LINES BAR
//                   <Box width="35px" height={`${(value / 100) * maxHeight}px`} bgcolor="#4ECCA3" borderRadius="6px" />
//                 </Box>
//               ))}
//             </Box> */}

//             {/* Legend */}

//         </Box>

//         {/* Top Products Section */}
//         <Box
//           sx={{
//             backgroundColor: "#181818",
//             borderRadius: "15px",
//             padding: "30px",
//             flex: 2,
//             mr: "13px",
//           }}
//         >
//           <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="30px">
//             Top Products
//           </Typography>

//           {/* Table Header */}
//           <Box display="flex" mb="15px">
//             <Typography color="#9e9eb1" flex="1">
//               #
//             </Typography>
//             <Typography color="#9e9eb1" flex="3">
//               Name
//             </Typography>
//             <Typography color="#9e9eb1" flex="3">
//               Popularity
//             </Typography>
//             <Typography color="#9e9eb1" flex="1" textAlign="right">
//               Sales
//             </Typography>
//           </Box>

//           {/* Table Rows */}
//           {topProducts.map((product) => (
//             <Box
//               key={product.id}
//               display="flex"
//               alignItems="center"
//               mb="20px"
//               pb="15px"
//               borderBottom={`1px solid #2e2e3c`}
//             >
//               <Typography color={colors.grey[100]} flex="1">
//                 {product.id}
//               </Typography>
//               <Typography color={colors.grey[100]} flex="3">
//                 {product.name}
//               </Typography>
//               <Box flex="3" pr="15px">
//                 <ProgressBar value={product.popularity} color={product.color} />
//               </Box>
//               <Box
//                 flex="1"
//                 sx={{
//                   border: `1px solid ${product.color}`,
//                   borderRadius: "4px",
//                   padding: "5px 10px",
//                   textAlign: "center",
//                   color: colors.grey[100],
//                 }}
//               >
//                 {product.popularity}%
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </>

//   )
// }

// export default Dashboard

// "use client"

// import { Box, Typography, useTheme } from "@mui/material"
// import { tokens } from "../../theme"
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
// import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined"
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
// import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// // StatBox Component Definition
// const StatBox = ({ title, subtitle, icon, increase }) => {
//   const theme = useTheme()
//   const colors = tokens(theme.palette.mode)

//   // Extract the percentage color based on the first character
//   const getIncreaseColor = (text) => {
//     if (text.startsWith("+")) {
//       // Different colors based on the metric
//       if (increase.includes("10%")) return "#FFD700" // Yellow for 10%
//       if (increase.includes("8%")) return "#4ECCA3" // Teal for 8%
//       if (increase.includes("2%")) return "#D667CF" // Purple for 2%
//       if (increase.includes("3%")) return "#38B2AC" // Blue for 3%
//       return colors.greenAccent[600] // Default green
//     }
//     return colors.redAccent[600] // Red for negative values
//   }

//   return (
//     <Box width="100%" m="0" p="20px">
//       <Box display="flex" justifyContent="flex-start">
//         {icon}
//       </Box>
//       <Box mt="20px">
//         <Typography variant="h1" fontWeight="bold" color={colors.grey[100]}>
//           {title}
//         </Typography>
//         <Typography variant="h5" color={colors.grey[400]} mt="5px">
//           {subtitle}
//         </Typography>
//       </Box>
//       <Box mt="10px">
//         <Typography variant="h6" fontWeight="bold" color={getIncreaseColor(increase)}>
//           {increase}
//         </Typography>
//       </Box>
//     </Box>
//   )
// }

// // Progress Bar Component for Top Products
// const ProgressBar = ({ value, color }) => {
//   return (
//     <Box width="100%" height="8px" bgcolor="#181818" borderRadius="4px">
//       <Box height="100%" bgcolor={color} borderRadius="4px" width={`${value}%`} />
//     </Box>
//   )
// }

// // Main Dashboard Component
// const Dashboard = () => {
//   const theme = useTheme()
//   const colors = tokens(theme.palette.mode)

//   // Mock data for top products
//   const topProducts = [
//     { id: "01", name: "Home Decore Range", popularity: 78, color: "#FFB74D" },
//     { id: "02", name: "Disney Princess Dress", popularity: 62, color: "#4ECCA3" },
//     { id: "03", name: "Bathroom Essentials", popularity: 51, color: "#64B5F6" },
//     { id: "04", name: "Apple Smartwatch", popularity: 29, color: "#E57373" },
//   ]

//   // Mock data for volume chart - formatted for Recharts
//   const volumeData = [
//     { level: 'level 1', Service: 78, Volume: 79 },
//     { level: 'level 2', Service: 78, Volume: 79 },
//     { level: 'level 3', Service: 92, Volume: 65 },
//     { level: 'level 4', Service: 114, Volume: 43 },
//     { level: 'level 5', Service: 75, Volume: 82 },
//     { level: 'level 6', Service: 52, Volume: 105 },
//   ]

//   return (
//     <>
//       {/* TOP SALES SUMMARY SECTION */}
//       <Box
//         sx={{
//           backgroundColor: "#181818",
//           borderRadius: "15px",
//           padding: "20px",
//           margin: "0 auto",
//           width: "98%",
//           mb: "20px",

//         }}
//       >
//         {/* HEADER */}
//         <Box width="100%" mb="20px" p="20px" >
//           <Box>
//             <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="5px">
//               Today's Sales
//             </Typography>
//             <Typography variant="h5" color={colors.grey[400]} mb="20px">
//               Sales Summary
//             </Typography>
//           </Box>

//           {/* GRID & CHARTS */}
//           <Box display="grid"  gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="200px" gap="20px">
//             {/* Total Sales */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="$5k"
//                 subtitle="Total Sales"
//                 increase="+10% from yesterday"
//                 icon={<BarChartOutlinedIcon sx={{ color: "#FFD700", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* Total Order */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="500"
//                 subtitle="Total Order"
//                 increase="+8% from yesterday"
//                 icon={<BoltOutlinedIcon sx={{ color: "#4ECCA3", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* Product Sold */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="9"
//                 subtitle="Product Sold"
//                 increase="+2% from yesterday"
//                 icon={<ShoppingBagOutlinedIcon sx={{ color: "#D667CF", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* New Customer */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="12"
//                 subtitle="New Customer"
//                 increase="+3% from yesterday"
//                 icon={<PersonAddOutlinedIcon sx={{ color: "#38B2AC", fontSize: "26px" }} />}
//               />
//             </Box>
//           </Box>
//         </Box>
//       </Box>

//       {/* BOTTOM SECTIONS: LEVEL AND TOP PRODUCTS */}
//         <Box display="flex" gap="20px">
//           {/* Level Section - Bar Chart */}
//           <Box
//             sx={{
//               backgroundColor: "#181818",
//               borderRadius: "15px",
//               padding: "30px",
//               flex: 1,
//               width: "45%",
//               ml: "13px",
//               mb: "100px",
//             }}
//           >
//             <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="30px">
//               Level
//             </Typography>

//             {/* Recharts Stacked Bar Chart */}
//             <Box height="300px" width="400px">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart
//                   data={volumeData}
//                   margin={{
//                     left: -20,
//                   }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
//                   <XAxis  stroke="#9e9e9e" />
//                   <YAxis stroke="#9e9e9e" />
//                   <Tooltip
//                     contentStyle={{
//                       backgroundColor: "#2d2d2d",
//                       border: "none",
//                       borderRadius: "15px",
//                       color: "#ffffff",
//                     }}
//                   />
//                   <Bar dataKey="Volume" stackId="a" fill="#4ECCA3" radius={[6, 6, 0, 0]} barSize={35} />
//                   <Bar dataKey="Service" stackId="a" fill="#FFC107" radius={[6, 6, 0, 0]} barSize={35} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Box>

//             {/* Legend */}

//         </Box>

//         {/* Top Products Section */}
//         <Box
//           sx={{
//             backgroundColor: "#181818",
//             borderRadius: "15px",
//             padding: "30px",
//             flex: 2,
//             mr: "13px",
//             mb: "100px",
//           }}
//         >
//           <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="30px">
//             Top Products
//           </Typography>

//           {/* Table Header */}
//           <Box display="flex" mb="15px">
//             <Typography color="#9e9eb1" flex="1">
//               #
//             </Typography>
//             <Typography color="#9e9eb1" flex="3">
//               Name
//             </Typography>
//             <Typography color="#9e9eb1" flex="3">
//               Popularity
//             </Typography>
//             <Typography color="#9e9eb1" flex="1" textAlign="right">
//               Sales
//             </Typography>
//           </Box>

//           {/* Table Rows */}
//           {topProducts.map((product) => (
//             <Box
//               key={product.id}
//               display="flex"
//               alignItems="center"
//               mb="20px"
//               pb="15px"
//               borderBottom={`1px solid #2e2e3c`}
//             >
//               <Typography color={colors.grey[100]} flex="1">
//                 {product.id}
//               </Typography>
//               <Typography color={colors.grey[100]} flex="3">
//                 {product.name}
//               </Typography>
//               <Box flex="3" pr="15px">
//                 <ProgressBar value={product.popularity} color={product.color} />
//               </Box>
//               <Box
//                 flex="1"
//                 sx={{
//                   border: `1px solid ${product.color}`,
//                   borderRadius: "4px",
//                   padding: "5px 10px",
//                   textAlign: "center",
//                   color: colors.grey[100],
//                 }}
//               >
//                 {product.popularity}%
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </>
//   )
// }

// export default Dashboard

// "use client"

// import { Box, Typography, useTheme } from "@mui/material"
// import { tokens } from "../../theme"
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
// import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined"
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
// import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
// import { Area, AreaChart, PieChart, Pie, Cell } from "recharts"

// // StatBox Component Definition
// const StatBox = ({ title, subtitle, icon, increase }) => {
//   const theme = useTheme()
//   const colors = tokens(theme.palette.mode)

//   // Extract the percentage color based on the first character
//   const getIncreaseColor = (text) => {
//     if (text.startsWith("+")) {
//       // Different colors based on the metric
//       if (increase.includes("10%")) return "#FFD700" // Yellow for 10%
//       if (increase.includes("8%")) return "#4ECCA3" // Teal for 8%
//       if (increase.includes("2%")) return "#D667CF" // Purple for 2%
//       if (increase.includes("3%")) return "#38B2AC" // Blue for 3%
//       return colors.greenAccent[600] // Default green
//     }
//     return colors.redAccent[600] // Red for negative values
//   }

//   return (
//     <Box width="100%" m="0" p="20px">
//       <Box display="flex" justifyContent="flex-start">
//         {icon}
//       </Box>
//       <Box mt="20px">
//         <Typography variant="h1" fontWeight="bold" color={colors.grey[100]}>
//           {title}
//         </Typography>
//         <Typography variant="h5" color={colors.grey[400]} mt="5px">
//           {subtitle}
//         </Typography>
//       </Box>
//       <Box mt="10px">
//         <Typography variant="h6" fontWeight="bold" color={getIncreaseColor(increase)}>
//           {increase}
//         </Typography>
//       </Box>
//     </Box>
//   )
// }

// // Progress Bar Component for Top Products
// const ProgressBar = ({ value, color }) => {
//   return (
//     <Box width="100%" height="8px" bgcolor="#181818" borderRadius="4px">
//       <Box height="100%" bgcolor={color} borderRadius="4px" width={`${value}%`} />
//     </Box>
//   )
// }

// // Main Dashboard Component
// const Dashboard = () => {
//   const theme = useTheme()
//   const colors = tokens(theme.palette.mode)

//   // Mock data for top products
//   const topProducts = [
//     { id: "01", name: "Home Decore Range", popularity: 78, color: "#FFB74D" },
//     { id: "02", name: "Disney Princess Dress", popularity: 62, color: "#4ECCA3" },
//     { id: "03", name: "Bathroom Essentials", popularity: 51, color: "#64B5F6" },
//     { id: "04", name: "Apple Smartwatch", popularity: 29, color: "#E57373" },
//   ]

//   // Mock data for volume chart - formatted for Recharts
//   const volumeData = [
//     { level: "level 1", Service: 78, Volume: 79 },
//     { level: "level 2", Service: 78, Volume: 79 },
//     { level: "level 3", Service: 92, Volume: 65 },
//     { level: "level 4", Service: 114, Volume: 43 },
//     { level: "level 5", Service: 75, Volume: 82 },
//     { level: "level 6", Service: 52, Volume: 105 },
//   ]

//   return (
//     <>
//       {/* TOP SALES SUMMARY SECTION */}
//       <Box
//         sx={{
//           backgroundColor: "#181818",
//           borderRadius: "15px",
//           padding: "20px",
//           margin: "0 auto",
//           width: "98%",
//           mb: "20px",
//           boxShadow: "0 2px 12px 0 rgba(0,0,0,0.7)",
//         }}
//       >
//         {/* HEADER */}
//         <Box width="100%" mb="20px" p="20px">
//           <Box>
//             <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="5px">
//               Today's Sales
//             </Typography>
//             <Typography variant="h5" color={colors.grey[400]} mb="20px">
//               Sales Summary
//             </Typography>
//           </Box>

//           {/* GRID & CHARTS */}
//           <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="200px" gap="20px">
//             {/* Total Sales */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="$5k"
//                 subtitle="Total Sales"
//                 increase="+10% from yesterday"
//                 icon={<BarChartOutlinedIcon sx={{ color: "#FFD700", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* Total Order */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="500"
//                 subtitle="Total Order"
//                 increase="+8% from yesterday"
//                 icon={<BoltOutlinedIcon sx={{ color: "#4ECCA3", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* Product Sold */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="9"
//                 subtitle="Product Sold"
//                 increase="+2% from yesterday"
//                 icon={<ShoppingBagOutlinedIcon sx={{ color: "#D667CF", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* New Customer */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="12"
//                 subtitle="New Customer"
//                 increase="+3% from yesterday"
//                 icon={<PersonAddOutlinedIcon sx={{ color: "#38B2AC", fontSize: "26px" }} />}
//               />
//             </Box>
//           </Box>
//         </Box>
//       </Box>

//       {/* BOTTOM SECTIONS: LEVEL AND TOP PRODUCTS */}
//       <Box display="flex" gap="20px">

//           <Box
//             sx={{
//               backgroundColor: "#181818",
//               borderRadius: "15px",
//               padding: "30px",
//               flex: 1,
//               width: "45%",
//               ml: "13px",
//               mb: "20px",
//              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.7)",
//             }}
//           >
//             <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="30px">
//               Level
//             </Typography>

//             {/* Recharts Stacked Bar Chart */}
//           <Box height="300px" width="400px">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart
//                 data={volumeData}
//                 margin={{
//                   left: -20,
//                 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
//                 <XAxis stroke="#9e9e9e" />
//                 <YAxis stroke="#9e9e9e" />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: "#2d2d2d",
//                     border: "none",
//                     borderRadius: "15px",
//                     color: "#ffffff",
//                   }}
//                 />
//                 <Bar dataKey="Volume" stackId="a" fill="#4ECCA3" radius={[6, 6, 0, 0]} barSize={35} />
//                 <Bar dataKey="Service" stackId="a" fill="#FFC107" radius={[6, 6, 0, 0]} barSize={35} />
//               </BarChart>
//             </ResponsiveContainer>
//           </Box>

//           {/* Legend */}
//         </Box>

//           <Box
//             sx={{
//               backgroundColor: "#181818",
//               borderRadius: "15px",
//               padding: "30px",
//               flex: 2,
//               mr: "13px",
//               mb: "20px",
//               boxShadow: "0 2px 12px 0 rgba(0,0,0,0.7)",

//             }}
//           >
//             <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="30px">
//               Top Products
//             </Typography>

//             {/* Table Header */}
//           <Box display="flex" mb="15px">
//             <Typography color="#9e9eb1" flex="1">
//               #
//             </Typography>
//             <Typography color="#9e9eb1" flex="3">
//               Name
//             </Typography>
//             <Typography color="#9e9eb1" flex="3">
//               Popularity
//             </Typography>
//             <Typography color="#9e9eb1" flex="1" textAlign="right">
//               Sales
//             </Typography>
//           </Box>

//           {/* Table Rows */}
//           {topProducts.map((product) => (
//             <Box
//               key={product.id}
//               display="flex"
//               alignItems="center"
//               mb="20px"
//               pb="15px"
//               borderBottom={`1px solid #2e2e3c`}
//             >
//               <Typography color={colors.grey[100]} flex="1">
//                 {product.id}
//               </Typography>
//               <Typography color={colors.grey[100]} flex="3">
//                 {product.name}
//               </Typography>
//               <Box flex="3" pr="15px">
//                 <ProgressBar value={product.popularity} color={product.color} />
//               </Box>
//               <Box
//                 flex="1"
//                 sx={{
//                   border: `1px solid ${product.color}`,
//                   borderRadius: "4px",
//                   padding: "5px 10px",
//                   textAlign: "center",
//                   color: colors.grey[100],
//                 }}
//               >
//                 {product.popularity}%
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>

//       {/* THIRD ROW: CUSTOMER FULFILLMENT AND EARNINGS */}
//       <Box display="flex" gap="20px" mb="20px">
//         {/* Customer Fulfillment Section */}
//         <Box
//           sx={{
//             backgroundColor: "#181818",
//             borderRadius: "15px",
//             padding: "30px",
//             flex: 1,
//             width: "45%",
//             ml: "13px",
//             mb: "20px",
//             boxShadow: "0 2px 12px 0 rgba(0,0,0,0.7)",
//           }}
//         >
//           <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="20px">
//             Customer Fulfillment
//           </Typography>

//           {/* Line Chart */}
//           <Box height="300px" width="100%">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart
//                 data={[
//                   { name: "Jan", thisMonth: 65, lastMonth: 40 },
//                   { name: "Feb", thisMonth: 30, lastMonth: 45 },
//                   { name: "Mar", thisMonth: 100, lastMonth: 60 },
//                   { name: "Apr", thisMonth: 70, lastMonth: 55 },
//                   { name: "May", thisMonth: 85, lastMonth: 65 },
//                   { name: "Jun", thisMonth: 90, lastMonth: 70 },
//                 ]}
//                 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
//                 <XAxis dataKey="name" stroke="#9e9e9e" />
//                 <YAxis stroke="#9e9e9e" />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: "#2d2d2d",
//                     border: "none",
//                     borderRadius: "15px",
//                     color: "#ffffff",
//                   }}
//                 />
//                 <defs>
//                   <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
//                     <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
//                   </linearGradient>
//                   <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
//                     <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.2} />
//                   </linearGradient>
//                 </defs>
//                 <Area
//                   type="monotone"
//                   dataKey="thisMonth"
//                   stroke="#8884d8"
//                   fillOpacity={1}
//                   fill="url(#colorThisMonth)"
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="lastMonth"
//                   stroke="#82ca9d"
//                   fillOpacity={1}
//                   fill="url(#colorLastMonth)"
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </Box>

//           {/* Legend */}
//           <Box display="flex" justifyContent="space-between" mt="20px">
//             <Box display="flex" alignItems="center">
//               <Box width="12px" height="12px" borderRadius="50%" bgcolor="#8884d8" mr="8px" />
//               <Typography color={colors.grey[100]}>This Month</Typography>
//               <Typography color={colors.grey[100]} ml="10px" fontWeight="bold">
//                 $4,785
//               </Typography>
//             </Box>
//             <Box display="flex" alignItems="center">
//               <Box width="12px" height="12px" borderRadius="50%" bgcolor="#82ca9d" mr="8px" />
//               <Typography color={colors.grey[100]}>Last Month</Typography>
//               <Typography color={colors.grey[100]} ml="10px" fontWeight="bold">
//                 $4,029
//               </Typography>
//             </Box>
//           </Box>
//         </Box>

//         {/* Earnings Section */}
//         <Box
//           sx={{
//             backgroundColor: "#181818",
//             borderRadius: "15px",
//             padding: "30px",
//             flex: 1,
//             mr: "13px",
//             mb: "20px",
//             boxShadow: "0 2px 12px 0 rgba(0,0,0,0.7)",
//           }}
//         >
//           <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="10px">
//             Earnings
//           </Typography>
//           <Typography variant="h5" color={colors.grey[400]} mb="20px">
//             Total Expense
//           </Typography>

//           <Typography variant="h1" fontWeight="bold" color="#4ECCA3" mb="10px">
//             $6078.76
//           </Typography>
//           <Typography variant="h5" color={colors.grey[400]} mb="30px">
//             Profit is 48% More than last Month
//           </Typography>

//           {/* Gauge Chart */}
//           <Box display="flex" justifyContent="center" height="200px">
//             <ResponsiveContainer width="80%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={[
//                     { name: "Filled", value: 80 },
//                     { name: "Empty", value: 20 },
//                   ]}
//                   cx="50%"
//                   cy="50%"
//                   startAngle={180}
//                   endAngle={0}
//                   innerRadius={60}
//                   outerRadius={100}
//                   paddingAngle={0}
//                   dataKey="value"
//                 >
//                   <Cell fill="#4ECCA3" />
//                   <Cell fill="#181818" />
//                 </Pie>
//                 <text
//                   x="50%"
//                   y="50%"
//                   textAnchor="middle"
//                   dominantBaseline="middle"
//                   fill="#ffffff"
//                   fontSize="48px"
//                   fontWeight="bold"
//                 >
//                   80%
//                 </text>
//               </PieChart>
//             </ResponsiveContainer>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   )
// }

// export default Dashboard

// "use client"

// import { Box, Typography, Button } from "@mui/material"
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
// import { LineChart, Line, ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from "recharts"
// import { useState } from "react"

// // Light theme colors
// const colors = {
//   background: "#f8fafc",
//   white: "#ffffff",
//   text: {
//     primary: "#1f2937",
//     secondary: "#6b7280",
//     light: "#9ca3af",
//   },
//   purple: "#6366f1",
//   green: "#10b981",
//   red: "#ef4444",
// }

// // Stock Card Component
// const StockCard = ({
//   company,
//   symbol,
//   currentValue,
//   change,
//   changePercent,
//   trendData,
//   bgColor,
//   logo,
//   textColor = "white",
// }) => {
//   const isPositive = change >= 0

//   return (
//     <Box
//       sx={{
//         background: bgColor,
//         borderRadius: "16px",
//         padding: "20px",
//         minWidth: "200px",
//         height: "140px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         position: "relative",
//         boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//       }}
//     >
//       {/* Top section with logo and symbol */}
//       <Box display="flex" justifyContent="space-between" alignItems="flex-start">
//         <Box display="flex" alignItems="center" gap="8px">
//           <Box
//             sx={{
//               width: "32px",
//               height: "32px",
//               borderRadius: "8px",
//               backgroundColor: "rgba(255,255,255,0.2)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: "14px",
//               fontWeight: "bold",
//               color: textColor,
//             }}
//           >
//             {logo}
//           </Box>
//           <Typography
//             sx={{
//               fontSize: "14px",
//               fontWeight: "600",
//               color: textColor,
//             }}
//           >
//             {company}
//           </Typography>
//         </Box>
//         <Box textAlign="right">
//           <Typography
//             sx={{
//               fontSize: "14px",
//               fontWeight: "bold",
//               color: textColor,
//             }}
//           >
//             {symbol}
//           </Typography>
//           <Typography
//             sx={{
//               fontSize: "12px",
//               fontWeight: "600",
//               color: isPositive ? "#22c55e" : "#ef4444",
//             }}
//           >
//             {isPositive ? "+" : ""}
//             {change}
//           </Typography>
//         </Box>
//       </Box>

//       {/* Current Value section */}
//       <Box>
//         <Typography
//           sx={{
//             fontSize: "10px",
//             color: "rgba(255,255,255,0.7)",
//             mb: "2px",
//           }}
//         >
//           Current Value
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: "20px",
//             fontWeight: "bold",
//             color: textColor,
//           }}
//         >
//           ${currentValue}
//         </Typography>
//       </Box>

//       {/* Mini trend chart */}
//       <Box position="absolute" right="16px" bottom="16px" width="60px" height="20px">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={trendData}>
//             <Line type="monotone" dataKey="value" stroke="rgba(255,255,255,0.8)" strokeWidth={1.5} dot={false} />
//           </LineChart>
//         </ResponsiveContainer>
//       </Box>
//     </Box>
//   )
// }

// // Balance Card Component
// const BalanceCard = ({ title, amount, change, isMain = false, bgColor = colors.purple, onClick }) => {
//   return (
//     <Box
//       sx={{
//         background: isMain ? `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%)` : "#374151",
//         borderRadius: "12px",
//         padding: "16px",
//         color: "white",
//         position: "relative",
//         overflow: "hidden",
//         cursor: onClick ? "pointer" : "default",
//       }}
//       onClick={onClick}
//     >
//       <Typography sx={{ fontSize: "14px", opacity: 0.8, mb: "8px" }}>{title}</Typography>
//       <Typography sx={{ fontSize: "24px", fontWeight: "bold", mb: "4px" }}>{amount}</Typography>
//       {change && <Typography sx={{ fontSize: "12px", color: "#22c55e" }}>{change}</Typography>}
//       {onClick && (
//         <Box
//           sx={{
//             position: "absolute",
//             right: "16px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             backgroundColor: "rgba(255,255,255,0.2)",
//             borderRadius: "50%",
//             width: "32px",
//             height: "32px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <ArrowForwardIcon sx={{ fontSize: "16px", color: "white" }} />
//         </Box>
//       )}
//     </Box>
//   )
// }

// // Tab Button Component
// const TabButton = ({ label, isActive = false, onClick }) => (
//   <Button
//     onClick={onClick}
//     sx={{
//       backgroundColor: isActive ? colors.purple : "transparent",
//       color: isActive ? "white" : colors.text.secondary,
//       borderRadius: "8px",
//       padding: "8px 16px",
//       fontSize: "12px",
//       fontWeight: "500",
//       textTransform: "none",
//       minWidth: "auto",
//       "&:hover": {
//         backgroundColor: isActive ? colors.purple : "#f3f4f6",
//       },
//     }}
//   >
//     {label}
//   </Button>
// )

// // Main Dashboard Component
// const Dashboard = () => {
//   const [activeExchange, setActiveExchange] = useState("NASDAQ")
//   const [activeTimeframe, setActiveTimeframe] = useState("1D")

//   // Generate different chart data based on timeframe
//   const generateChartData = (timeframe) => {
//     const baseValue = 11600
//     const dataPoints = {
//       "1D": [
//         { time: "10 am", value: 11550 },
//         { time: "10:30", value: 11580 },
//         { time: "11 am", value: 11620 },
//         { time: "11:30", value: 11650 },
//         { time: "12 pm", value: 11691 },
//       ],
//       "5D": [
//         { time: "Mon", value: 11400 },
//         { time: "Tue", value: 11520 },
//         { time: "Wed", value: 11680 },
//         { time: "Thu", value: 11590 },
//         { time: "Fri", value: 11691 },
//       ],
//       "1M": [
//         { time: "Week 1", value: 11200 },
//         { time: "Week 2", value: 11450 },
//         { time: "Week 3", value: 11380 },
//         { time: "Week 4", value: 11691 },
//       ],
//       "6M": [
//         { time: "Jan", value: 10800 },
//         { time: "Feb", value: 11100 },
//         { time: "Mar", value: 11300 },
//         { time: "Apr", value: 11500 },
//         { time: "May", value: 11400 },
//         { time: "Jun", value: 11691 },
//       ],
//       "1Y": [
//         { time: "Q1", value: 10500 },
//         { time: "Q2", value: 11000 },
//         { time: "Q3", value: 11200 },
//         { time: "Q4", value: 11691 },
//       ],
//     }
//     return dataPoints[timeframe] || dataPoints["1D"]
//   }

//   const [chartData, setChartData] = useState(generateChartData("1D"))

//   const handleTimeframeChange = (timeframe) => {
//     setActiveTimeframe(timeframe)
//     setChartData(generateChartData(timeframe))
//   }

//   // Stock data
//   const stocksData = [
//     {
//       company: "Nvidia",
//       symbol: "NVDA",
//       currentValue: "203.65",
//       change: "+5.63",
//       bgColor: "linear-gradient(135deg, #6ee7b7 0%, #3b82f6 100%)",
//       logo: "N",
//       trendData: [
//         { value: 195 },
//         { value: 198 },
//         { value: 201 },
//         { value: 199 },
//         { value: 202 },
//         { value: 204 },
//         { value: 203.65 },
//       ],
//     },
//     {
//       company: "Meta",
//       symbol: "META",
//       currentValue: "151.74",
//       change: "-4.44",
//       bgColor: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
//       logo: "∞",
//       trendData: [
//         { value: 158 },
//         { value: 156 },
//         { value: 154 },
//         { value: 153 },
//         { value: 152 },
//         { value: 151 },
//         { value: 151.74 },
//       ],
//     },
//     {
//       company: "Tesla Inc",
//       symbol: "TSLA",
//       currentValue: "177.90",
//       change: "+17.63",
//       bgColor: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
//       logo: "⚡",
//       trendData: [
//         { value: 165 },
//         { value: 168 },
//         { value: 172 },
//         { value: 175 },
//         { value: 176 },
//         { value: 178 },
//         { value: 177.9 },
//       ],
//     },
//     {
//       company: "Apple Inc",
//       symbol: "AAPL",
//       currentValue: "145.93",
//       change: "+23.41",
//       bgColor: "linear-gradient(135deg, #84cc16 0%, #22c55e 100%)",
//       logo: "🍎",
//       trendData: [
//         { value: 135 },
//         { value: 138 },
//         { value: 142 },
//         { value: 144 },
//         { value: 145 },
//         { value: 146 },
//         { value: 145.93 },
//       ],
//     },
//     {
//       company: "Advanced Micro",
//       symbol: "AMD",
//       currentValue: "75.40",
//       change: "-2.15",
//       bgColor: "linear-gradient(135deg, #f472b6 0%, #a855f7 100%)",
//       logo: "AMD",
//       trendData: [
//         { value: 78 },
//         { value: 77 },
//         { value: 76 },
//         { value: 75.5 },
//         { value: 75.2 },
//         { value: 75.1 },
//         { value: 75.4 },
//       ],
//     },
//   ]

//   const teslaChartData = [
//     { value: 165 },
//     { value: 168 },
//     { value: 172 },
//     { value: 175 },
//     { value: 176 },
//     { value: 178 },
//     { value: 177.9 },
//   ]

//   return (
//     <Box sx={{ backgroundColor: colors.background, minHeight: "100vh", padding: "20px" }}>
//       {/* MY STOCKS SECTION */}
//       <Box
//         sx={{
//           backgroundColor: colors.white,
//           borderRadius: "20px",
//           padding: "24px",
//           margin: "0 auto",
//           width: "100%",
//           maxWidth: "1400px",
//           mb: "20px",
//           boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
//           <Typography
//             sx={{
//               fontSize: "20px",
//               fontWeight: "600",
//               color: colors.text.primary,
//             }}
//           >
//             My Stocks
//           </Typography>
//           <Box
//             sx={{
//               backgroundColor: colors.purple,
//               borderRadius: "50%",
//               width: "40px",
//               height: "40px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//             }}
//           >
//             <ArrowForwardIcon sx={{ color: "white", fontSize: "18px" }} />
//           </Box>
//         </Box>

//         {/* Stocks Grid */}
//         <Box
//           display="flex"
//           gap="16px"
//           sx={{
//             overflowX: "auto",
//             paddingBottom: "8px",
//           }}
//         >
//           {stocksData.map((stock, index) => (
//             <StockCard key={index} {...stock} />
//           ))}
//         </Box>
//       </Box>

//       {/* BALANCE AND CHART SECTION */}
//       <Box display="flex" gap="20px" mb="20px">
//         {/* Left Side - Balance and Invested */}
//         <Box sx={{ width: "280px" }}>
//           <Box mb="16px">
//             <Typography sx={{ fontSize: "14px", fontWeight: "500", color: colors.text.secondary, mb: "8px" }}>
//               Balance
//             </Typography>
//             <BalanceCard
//               title=""
//               amount="$14,032.56"
//               change="+5.63%"
//               isMain={true}
//               onClick={() => console.log("Balance clicked")}
//             />
//           </Box>

//           <Box mb="20px">
//             <Typography sx={{ fontSize: "14px", fontWeight: "500", color: colors.text.secondary, mb: "8px" }}>
//               Invested
//             </Typography>
//             <BalanceCard title="" amount="$7,532.21" onClick={() => console.log("Invested clicked")} />
//           </Box>

//           <Box>
//             <Typography sx={{ fontSize: "14px", fontWeight: "500", color: colors.text.secondary, mb: "8px" }}>
//               Top Stock
//             </Typography>
//             <Box
//               sx={{
//                 bgcolor: colors.white,
//                 borderRadius: "12px",
//                 p: "16px",
//                 border: "1px solid #e5e7eb",
//               }}
//             >
//               <Box display="flex" alignItems="center" gap="12px" mb="12px">
//                 <Box
//                   sx={{
//                     width: "32px",
//                     height: "32px",
//                     borderRadius: "8px",
//                     background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "14px",
//                   }}
//                 >
//                   ⚡
//                 </Box>
//                 <Box>
//                   <Typography sx={{ fontSize: "14px", fontWeight: "600", color: colors.text.primary }}>
//                     Tesla Inc
//                   </Typography>
//                   <Typography sx={{ fontSize: "12px", color: colors.green, fontWeight: "500" }}>TSLA +17.63</Typography>
//                 </Box>
//               </Box>

//               <Box display="flex" justifyContent="space-between" mb="8px">
//                 <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Invested Value</Typography>
//                 <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Current Value</Typography>
//               </Box>
//               <Box display="flex" justifyContent="space-between" mb="12px">
//                 <Typography sx={{ fontSize: "14px", fontWeight: "600", color: colors.text.primary }}>$29.34</Typography>
//                 <Typography sx={{ fontSize: "14px", fontWeight: "600", color: colors.text.primary }}>
//                   $177.90
//                 </Typography>
//               </Box>

//               <Box height="40px" mb="12px">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={teslaChartData}>
//                     <Line type="monotone" dataKey="value" stroke="#fbbf24" strokeWidth={2} dot={false} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </Box>

//               <Box display="flex" alignItems="center" justifyContent="center">
//                 <Button
//                   sx={{
//                     backgroundColor: colors.purple,
//                     color: "white",
//                     borderRadius: "8px",
//                     padding: "8px 16px",
//                     fontSize: "12px",
//                     textTransform: "none",
//                     minWidth: "auto",
//                     "&:hover": {
//                       backgroundColor: "#5855eb",
//                     },
//                   }}
//                 >
//                   <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Box>

//         {/* Center - Chart */}
//         <Box flex={1} bgcolor={colors.white} borderRadius="16px" p="20px" border="1px solid #e5e7eb">
//           <Box display="flex" gap="8px" mb="20px">
//             {["NASDAQ", "SSE", "Euronext", "BSE"].map((exchange) => (
//               <TabButton
//                 key={exchange}
//                 label={exchange}
//                 isActive={activeExchange === exchange}
//                 onClick={() => setActiveExchange(exchange)}
//               />
//             ))}
//           </Box>

//           <Box display="flex" gap="8px" mb="20px">
//             {["1D", "5D", "1M", "6M", "1Y"].map((timeframe) => (
//               <TabButton
//                 key={timeframe}
//                 label={timeframe}
//                 isActive={activeTimeframe === timeframe}
//                 onClick={() => handleTimeframeChange(timeframe)}
//               />
//             ))}
//           </Box>

//           <Box height="200px" mb="20px">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart data={chartData}>
//                 <defs>
//                   <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
//                     <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//                 <XAxis
//                   dataKey="time"
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{ fontSize: 12, fill: colors.text.light }}
//                 />
//                 <YAxis
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{ fontSize: 12, fill: colors.text.light }}
//                   domain={["dataMin - 50", "dataMax + 50"]}
//                 />
//                 <Area type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} fill="url(#colorGradient)" />
//               </AreaChart>
//             </ResponsiveContainer>
//           </Box>

//           <Box display="flex" justifyContent="space-between" alignItems="center">
//             <Box>
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>High</Typography>
//               <Typography sx={{ fontSize: "14px", fontWeight: "600", color: colors.text.primary }}>
//                 11,691.89
//               </Typography>
//             </Box>
//             <Box>
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Low</Typography>
//               <Typography sx={{ fontSize: "14px", fontWeight: "600", color: colors.text.primary }}>
//                 11,470.47
//               </Typography>
//             </Box>
//             <Box>
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Prev Close (Apr 28 Days)</Typography>
//               <Typography sx={{ fontSize: "14px", fontWeight: "600", color: colors.text.primary }}>
//                 11,512.41
//               </Typography>
//             </Box>
//             <Box>
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Open</Typography>
//               <Typography sx={{ fontSize: "14px", fontWeight: "600", color: colors.text.primary }}>
//                 11,690.11
//               </Typography>
//             </Box>
//           </Box>
//         </Box>

//         {/* Right Side - Snapshot */}
//         <Box sx={{ width: "250px" }}>
//           <Typography sx={{ fontSize: "16px", fontWeight: "600", color: colors.text.primary, mb: "16px" }}>
//             Snapshot
//           </Typography>

//           <Box bgcolor={colors.white} borderRadius="12px" p="16px" border="1px solid #e5e7eb">
//             <Box display="flex" justifyContent="space-between" mb="8px">
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Prev Close</Typography>
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Open</Typography>
//             </Box>
//             <Box display="flex" justifyContent="space-between" mb="16px">
//               <Typography sx={{ fontSize: "16px", fontWeight: "600", color: colors.text.primary }}>
//                 12,051.48
//               </Typography>
//               <Typography sx={{ fontSize: "16px", fontWeight: "600", color: colors.text.primary }}>
//                 12,000.21
//               </Typography>
//             </Box>

//             <Box display="flex" justifyContent="space-between" mb="8px">
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Day Low</Typography>
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Day High</Typography>
//             </Box>
//             <Box display="flex" justifyContent="space-between" mb="16px">
//               <Typography sx={{ fontSize: "14px", fontWeight: "600", color: colors.text.primary }}>
//                 11,999.87
//               </Typography>
//               <Typography sx={{ fontSize: "14px", fontWeight: "600", color: colors.text.primary }}>
//                 12,248.15
//               </Typography>
//             </Box>

//             <Box textAlign="center" mb="16px">
//               <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: colors.text.primary }}>
//                 12,166.60
//               </Typography>
//             </Box>

//             <Box display="flex" justifyContent="space-between" mb="8px">
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>52 Week Low</Typography>
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>52 Week High</Typography>
//             </Box>
//             <Box display="flex" justifyContent="space-between" mb="16px">
//               <Typography sx={{ fontSize: "14px", fontWeight: "600", color: colors.text.primary }}>
//                 10,440.64
//               </Typography>
//               <Typography sx={{ fontSize: "14px", fontWeight: "600", color: colors.text.primary }}>
//                 15,265.42
//               </Typography>
//             </Box>

//             <Box textAlign="center" mb="16px">
//               <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: colors.text.primary }}>
//                 12,166.60
//               </Typography>
//             </Box>

//             <Box display="flex" justifyContent="space-between">
//               <Box>
//                 <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Trade Time</Typography>
//                 <Typography sx={{ fontSize: "14px", fontWeight: "600", color: colors.text.primary }}>
//                   05:16 PM
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Trade Date</Typography>
//                 <Typography sx={{ fontSize: "14px", fontWeight: "600", color: colors.text.primary }}>
//                   01/27/23
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// export default Dashboard

// "use client";

// import { Box, Typography, Button } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import {
//   LineChart,
//   Line,
//   ResponsiveContainer,
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";
// import { useState } from "react";

// // Light theme colors
// const colors = {
//   background: "#f8fafc",
//   white: "#ffffff",
//   text: {
//     primary: "#1f2937",
//     secondary: "#6b7280",
//     light: "#9ca3af",
//   },
//   purple: "#6366f1",
//   green: "#10b981",
//   red: "#ef4444",
// };

// // Stock Card Component
// const StockCard = ({
//   company,
//   symbol,
//   currentValue,
//   change,
//   changePercent,
//   trendData,
//   bgColor,
//   logo,
//   logoImage,
//   textColor = "white",
//   logoSize = 24,
// }) => {
//   const isPositive = change >= 0;

//   return (
//     <Box
//       sx={{
//         background: bgColor,
//         borderRadius: "10px",
//         padding: "20px",
//         minWidth: "200px",
//         height: "140px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         position: "relative",
//         boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//       }}
//     >
//       {/* Top section with logo and symbol */}
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="flex-start"
//       >
//         <Box display="flex" alignItems="center" gap="8px">
//           <Box
//             sx={{
//               width: "32px",
//               height: "32px",
//               borderRadius: "8px",
//               backgroundColor: "rgba(255,255,255,0.2)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               overflow: "hidden",
//             }}
//           >
//             {logoImage ? (
//               <img
//                 src={logoImage || "/placeholder.svg"}
//                 alt={`${company} logo`}
//                 style={{
//                   width: logoSize,
//                   height: logoSize,
//                   objectFit: "contain",
//                 }}
//               />
//             ) : (
//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   fontWeight: "bold",
//                   color: textColor,
//                 }}
//               >
//                 {logo}
//               </Typography>
//             )}
//           </Box>
//           <Typography
//             sx={{
//               fontSize: "14px",
//               fontWeight: "600",
//               color: textColor,
//             }}
//           >
//             {company}
//           </Typography>
//         </Box>
//         <Box textAlign="right">
//           <Typography
//             sx={{
//               fontSize: "14px",
//               fontWeight: "bold",
//               color: textColor,
//             }}
//           >
//             {symbol}
//           </Typography>
//           <Typography
//             sx={{
//               fontSize: "12px",
//               fontWeight: "600",
//               color: isPositive ? "#22c55e" : "#ef4444",
//             }}
//           >
//             {isPositive ? "+" : ""}
//             {change}
//           </Typography>
//         </Box>
//       </Box>

//       {/* Current Value section */}
//       <Box>
//         <Typography
//           sx={{
//             fontSize: "12px",
//             color: "rgb(244, 244, 244)",
//             mb: "2px",
//           }}
//         >
//           Current Value
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: "20px",
//             fontWeight: "500",
//             color: textColor,
//           }}
//         >
//           ${currentValue}
//         </Typography>
//       </Box>

//       {/* Mini trend chart using recharts */}
//       <Box
//         position="absolute"
//         right="16px"
//         bottom="16px"
//         width="60px"
//         height="20px"
//       >
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={trendData}>
//             <Line
//               type="monotone"
//               dataKey="value"
//               stroke="rgba(255,255,255,0.8)"
//               strokeWidth={1.5}
//               dot={false}
//               activeDot={false}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </Box>
//     </Box>
//   );
// };

// // Balance Card Component
// const BalanceCard = ({
//   title,
//   amount,
//   change,
//   isMain = false,
//   bgColor = colors.purple,
//   onClick,
// }) => {
//   return (
//     <Box
//       sx={{
//         background: isMain
//           ? `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%)`
//           : "#374151",
//         borderRadius: "12px",
//         padding: "16px",
//         color: "white",
//         position: "relative",
//         overflow: "hidden",
//         cursor: onClick ? "pointer" : "default",
//       }}
//       onClick={onClick}
//     >
//       <Typography sx={{ fontSize: "14px", opacity: 0.8, mb: "8px" }}>
//         {title}
//       </Typography>
//       <Typography sx={{ fontSize: "24px", fontWeight: "bold", mb: "4px" }}>
//         {amount}
//       </Typography>
//       {change && (
//         <Typography sx={{ fontSize: "12px", color: "#22c55e" }}>
//           {change}
//         </Typography>
//       )}
//       {onClick && (
//         <Box
//           sx={{
//             position: "absolute",
//             right: "16px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             backgroundColor: "rgba(255,255,255,0.2)",
//             borderRadius: "50%",
//             width: "32px",
//             height: "32px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <ArrowForwardIcon sx={{ fontSize: "16px", color: "white" }} />
//         </Box>
//       )}
//     </Box>
//   );
// };

// // Tab Button Component
// const TabButton = ({ label, isActive = false, onClick }) => (
//   <Button
//     onClick={onClick}
//     sx={{
//       backgroundColor: isActive ? colors.purple : "transparent",
//       color: isActive ? "white" : colors.text.secondary,
//       borderRadius: "8px",
//       padding: "8px 16px",
//       fontSize: "12px",
//       fontWeight: "500",
//       textTransform: "none",
//       minWidth: "auto",
//       "&:hover": {
//         backgroundColor: isActive ? colors.purple : "#f3f4f6",
//       },
//     }}
//   >
//     {label}
//   </Button>
// );

// // Custom Tooltip Component for recharts
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <Box
//         sx={{
//           backgroundColor: "rgba(0, 0, 0, 0.8)",
//           color: "white",
//           padding: "8px 12px",
//           borderRadius: "6px",
//           fontSize: "12px",
//           border: "none",
//         }}
//       >
//         <Typography sx={{ fontSize: "12px", color: "white" }}>
//           {`${label}: ${payload[0].value.toLocaleString()}`}
//         </Typography>
//       </Box>
//     );
//   }
//   return null;
// };

// // Main Dashboard Component
// const Dashboard = () => {
//   const [activeExchange, setActiveExchange] = useState("NASDAQ");
//   const [activeTimeframe, setActiveTimeframe] = useState("1D");

//   // Generate different chart data based on timeframe using recharts format
//   const generateChartData = (timeframe) => {
//     const dataPoints = {
//       "1D": [
//         { time: "10 am", value: 11550, volume: 1200000 },
//         { time: "10:30", value: 11580, volume: 1350000 },
//         { time: "11 am", value: 11620, volume: 1100000 },
//         { time: "11:30", value: 11650, volume: 1450000 },
//         { time: "12 pm", value: 11691, volume: 1600000 },
//       ],
//       "5D": [
//         { time: "Mon", value: 11400, volume: 2200000 },
//         { time: "Tue", value: 11520, volume: 2350000 },
//         { time: "Wed", value: 11680, volume: 2100000 },
//         { time: "Thu", value: 11590, volume: 2450000 },
//         { time: "Fri", value: 11691, volume: 2600000 },
//       ],
//       "1M": [
//         { time: "Week 1", value: 11200, volume: 8200000 },
//         { time: "Week 2", value: 11450, volume: 8350000 },
//         { time: "Week 3", value: 11380, volume: 8100000 },
//         { time: "Week 4", value: 11691, volume: 8450000 },
//       ],
//       "6M": [
//         { time: "Jan", value: 10800, volume: 32200000 },
//         { time: "Feb", value: 11100, volume: 33350000 },
//         { time: "Mar", value: 11300, volume: 31100000 },
//         { time: "Apr", value: 11500, volume: 34450000 },
//         { time: "May", value: 11400, volume: 33200000 },
//         { time: "Jun", value: 11691, volume: 35450000 },
//       ],
//       "1Y": [
//         { time: "Q1", value: 10500, volume: 95200000 },
//         { time: "Q2", value: 11000, volume: 98350000 },
//         { time: "Q3", value: 11200, volume: 92100000 },
//         { time: "Q4", value: 11691, volume: 101450000 },
//       ],
//     };
//     return dataPoints[timeframe] || dataPoints["1D"];
//   };

//   const [chartData, setChartData] = useState(generateChartData("1D"));

//   const handleTimeframeChange = (timeframe) => {
//     setActiveTimeframe(timeframe);
//     setChartData(generateChartData(timeframe));
//   };

//   // Stock data with company logos
//   const stocksData = [
//     {
//       company: "Nvidia",
//       symbol: "NVDA",
//       currentValue: "203.65",
//       change: "5.63",
//       bgColor: "#A6F0DB",
//       logo: "N",
//       logoImage: "./assets/2.png",
//       color: "#000000",
//       textColor: "black",
//       trendData: [
//         { value: 2080 },
//         { value: 1950 },
//         { value: 2002 },
//         { value: 1090 },
//         { value: 1908 },
//         { value: 2045 },
//         { value: 1085 },
//       ],
//     },
//     {
//       company: "Meta",
//       symbol: "META",
//       currentValue: "151.74",
//       change: "-4.44",
//       bgColor: "#BFA6FE",

//       logoImage: "./assets/3.png",

//       fontWeight: "none",
//       trendData: [
//         { value: 1508 },
//         { value: 1956 },
//         { value: 1549 },
//         { value: 1543 },
//         { value: 1542 },
//         { value: 1501 },
//         { value: 2591.74 },
//         { value: 2591.74 },
//       ],
//     },
//     {
//       company: "Tesla Inc",
//       symbol: "TSLA",
//       currentValue: "177.90",
//       change: "17.63",
//       bgColor: "#FFD875",

//       logoImage: "./assets/4.png",
//       fontWeight: "none",
//       textColor: "black",
//       trendData: [
//         { value: 2165 },
//         { value: 3168 },
//         { value: 1172 },
//         { value: 2175 },
//         { value: 5176 },
//         { value: 2178 },
//         { value: 1177.9 },
//         { value: 2177.9 },
//       ],
//     },
//     {
//       company: "Apple Inc",
//       symbol: "AAPL",
//       currentValue: "145.93",
//       change: "23.41",
//       bgColor: "#A8E885",
     
//       logoImage: "./assets/5.png",
//       textColor: "black",

//       trendData: [
//         { value: 4135 },
//         { value: 3138 },
//         { value: 2142 },
//         { value: 1444 },
//         { value: 1435 },
//         { value: 1246 },
//         { value: 3145.93 },
//         { value: 2145.93 },
//       ],
//     },
//     {
//       company: "Advanced Micro Devices",
//       symbol: "AMD",
//       currentValue: "75.40",
//       change: "-2.15",
//       bgColor: "#FFA8F5",
   
//       logoImage: "./assets/6.png",
//       textColor: "black",
//       logoSize: 32,
//       trendData: [
//         { value: 8778 },
//         { value: 1277 },
//         { value: 2376 },
//         { value: 5475.5 },
//         { value: 4725.2 },
//         { value: 1275.1 },
//         { value: 7335.4 },
//         { value: 7445.4 },
//       ],
//     },
//   ];

//   const teslaChartData = [
//     { time: "Day 1", value: 165 },
//     { time: "Day 2", value: 168 },
//     { time: "Day 3", value: 172 },
//     { time: "Day 4", value: 175 },
//     { time: "Day 5", value: 176 },
//     { time: "Day 6", value: 178 },
//     { time: "Day 7", value: 177.9 },
//   ];

//   return (
//     <Box
//       sx={{
//         backgroundColor: colors.background,
//         minHeight: "100vh",
//         padding: "20px",
//       }}
//     >
//       {/* MY STOCKS SECTION */}
//       <Box
//         sx={{
//           backgroundColor: colors.white,
//           borderRadius: "20px",
//           padding: "20px",
//           margin: "0 auto",
//           width: "100%",
//           maxWidth: "1400px",
//           mb: "20px",
//           boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Box
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//           mb="20px"
//         >
//           <Typography
//             sx={{
//               fontSize: "20px",
//               fontWeight: "600",
//               color: colors.text.primary,
//             }}
//           >
//             My Stocks
//           </Typography>
//           <Box
//             sx={{
//               backgroundColor: colors.purple,
//               borderRadius: "50%",
//               width: "40px",
//               height: "40px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               transition: "background 0.2s, box-shadow 0.2s",
//               "&:hover": {
//                 background: "#4338ca", // changed hover color
//                 boxShadow: "0 2px 8px 0 rgba(6, 8, 101, 0.25)",
//               },
//             }}
//           >
//             <ArrowForwardIcon sx={{ color: "white", fontSize: "20px" }} />
//           </Box>
//         </Box>

//         {/* Stocks Grid */}
//         <Box
//           display="flex"
//           gap="16px"
//           sx={{
//             overflowX: "auto",
//             paddingTop: "2px",
//             paddingBottom: "10px",
//           }}
//         >
//           {stocksData.map((stock, index) => (
//             <StockCard key={index} {...stock} />
//           ))}
//         </Box>
//       </Box>

//       {/* BALANCE AND CHART SECTION */}
//       <Box display="flex" gap="20px" mb="20px">
//         {/* Left Side - Balance, Invested, Top Stock (with background box) */}
//         <Box
//           sx={{
//             backgroundColor: colors.white,
//             borderRadius: "16px",
//             p: "20px",
//             boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
//             width: "280px",
//             minWidth: "260px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//           }}
//         >
//           <Box mb="0">
//             <Typography
//               sx={{
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 color: colors.text.secondary,
//                 mb: "8px",
//               }}
//             >
//               Balance
//             </Typography>
//             <BalanceCard
//               title=""
//               amount="$14,032.56"
//               change="+5.63%"
//               isMain={true}
//               onClick={() => console.log("Balance clicked")}
//             />
//           </Box>

//           <Box mb="0">
//             <Typography
//               sx={{
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 color: colors.text.secondary,
//                 mb: "8px",
//               }}
//             >
//               Invested
//             </Typography>
//             <BalanceCard
//               title=""
//               amount="$7,532.21"
//               onClick={() => console.log("Invested clicked")}
//             />
//           </Box>

//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 color: colors.text.secondary,
//                 mb: "8px",
//               }}
//             >
//               Top Stock
//             </Typography>
//             <Box
//               sx={{
//                 bgcolor: colors.white,
//                 borderRadius: "12px",
//                 p: "16px",
//                 border: "1px solid #e5e7eb",
//               }}
//             >
//               <Box display="flex" alignItems="center" gap="12px" mb="12px">
//                 <Box
//                   sx={{
//                     width: "32px",
//                     height: "32px",
//                     borderRadius: "8px",
//                     background:
//                       "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <img
//                     src="/placeholder.svg?height=24&width=24&text=TSLA"
//                     alt="Tesla logo"
//                     style={{
//                       width: "20px",
//                       height: "20px",
//                       objectFit: "contain",
//                     }}
//                   />
//                 </Box>
//                 <Box flex={1}>
//                   <Typography
//                     sx={{
//                       fontSize: "14px",
//                       fontWeight: "600",
//                       color: colors.text.primary,
//                     }}
//                   >
//                     Tesla Inc
//                   </Typography>
//                 </Box>
//                 <Box>
//                   <Typography
//                     sx={{
//                       fontSize: "12px",
//                       color: colors.green,
//                       fontWeight: "500",
//                     }}
//                   >
//                     TSLA
//                   </Typography>
//                   <Typography
//                     sx={{
//                       fontSize: "12px",
//                       color: colors.green,
//                       fontWeight: "500",
//                     }}
//                   >
//                     +17.63
//                   </Typography>
//                 </Box>
//               </Box>

//               <Box display="flex" justifyContent="space-between" mb="8px">
//                 <Typography
//                   sx={{ fontSize: "12px", color: colors.text.secondary }}
//                 >
//                   Invested Value
//                 </Typography>
//                 <Typography
//                   sx={{ fontSize: "12px", color: colors.text.secondary }}
//                 >
//                   Current Value
//                 </Typography>
//               </Box>
//               <Box display="flex" justifyContent="space-between" mb="12px">
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     color: colors.text.primary,
//                   }}
//                 >
//                   $29.34
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     color: colors.text.primary,
//                   }}
//                 >
//                   $177.90
//                 </Typography>
//               </Box>

             
//               <Box height="40px" mb="12px">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={teslaChartData}>
//                     <Line
//                       type="monotone"
//                       dataKey="value"
//                       stroke="#fbbf24"
//                       strokeWidth={2}
//                       dot={false}
//                       activeDot={{ r: 4, fill: "#fbbf24" }}
//                     />
//                     <Tooltip content={<CustomTooltip />} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </Box>

//               <Box display="flex" alignItems="center" justifyContent="center">
//                 <Button
//                   sx={{
//                     backgroundColor: colors.purple,
//                     color: "white",
//                     borderRadius: "8px",
//                     padding: "8px 16px",
//                     fontSize: "12px",
//                     textTransform: "none",
//                     minWidth: "auto",
//                     "&:hover": {
//                       backgroundColor: "#5855eb",
//                     },
//                   }}
//                 >
//                   <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//         </Box>

//         {/* Center - Main Chart using recharts */}
//         <Box
//           flex={1}
//           bgcolor={colors.white}
//           borderRadius="16px"
//           p="20px"
//           border="1px solid #e5e7eb"
//         >
//           <Box display="flex" gap="8px" mb="20px">
//             {["NASDAQ", "SSE", "Euronext", "BSE"].map((exchange) => (
//               <TabButton
//                 key={exchange}
//                 label={exchange}
//                 isActive={activeExchange === exchange}
//                 onClick={() => setActiveExchange(exchange)}
//               />
//             ))}
//           </Box>

//           <Box display="flex" gap="8px" mb="20px">
//             {["1D", "5D", "1M", "6M", "1Y"].map((timeframe) => (
//               <TabButton
//                 key={timeframe}
//                 label={timeframe}
//                 isActive={activeTimeframe === timeframe}
//                 onClick={() => handleTimeframeChange(timeframe)}
//               />
//             ))}
//           </Box>

//           {/* Main chart using recharts AreaChart */}
//           <Box height="200px" mb="20px">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart
//                 data={chartData}
//                 margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//               >
//                 <defs>
//                   <linearGradient
//                     id="colorGradient"
//                     x1="0"
//                     y1="0"
//                     x2="0"
//                     y2="1"
//                   >
//                     <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
//                     <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                 <XAxis
//                   dataKey="time"
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{ fontSize: 12, fill: colors.text.light }}
//                 />
//                 <YAxis
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{ fontSize: 12, fill: colors.text.light }}
//                   domain={["dataMin - 50", "dataMax + 50"]}
//                 />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Area
//                   type="monotone"
//                   dataKey="value"
//                   stroke="#8b5cf6"
//                   strokeWidth={2}
//                   fill="url(#colorGradient)"
//                   activeDot={{ r: 6, fill: "#8b5cf6" }}
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </Box>

//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Box>
//               <Typography
//                 sx={{ fontSize: "12px", color: colors.text.secondary }}
//               >
//                 High
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   color: colors.text.primary,
//                 }}
//               >
//                 11,691.89
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{ fontSize: "12px", color: colors.text.secondary }}
//               >
//                 Low
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   color: colors.text.primary,
//                 }}
//               >
//                 11,470.47
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{ fontSize: "12px", color: colors.text.secondary }}
//               >
//                 Prev Close (Apr 28 Days)
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   color: colors.text.primary,
//                 }}
//               >
//                 11,512.41
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{ fontSize: "12px", color: colors.text.secondary }}
//               >
//                 Open
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   color: colors.text.primary,
//                 }}
//               >
//                 11,690.11
//               </Typography>
//             </Box>
//           </Box>
//         </Box>

//         {/* Right Side - Snapshot */}
//         <Box sx={{ width: "250px" }}>
//           <Typography
//             sx={{
//               fontSize: "16px",
//               fontWeight: "600",
//               color: colors.text.primary,
//               mb: "16px",
//             }}
//           >
//             Snapshot
//           </Typography>

//           <Box
//             bgcolor={colors.white}
//             borderRadius="12px"
//             p="16px"
//             border="1px solid #e5e7eb"
//           >
//             <Box display="flex" justifyContent="space-between" mb="8px">
//               <Typography
//                 sx={{ fontSize: "12px", color: colors.text.secondary }}
//               >
//                 Prev Close
//               </Typography>
//               <Typography
//                 sx={{ fontSize: "12px", color: colors.text.secondary }}
//               >
//                 Open
//               </Typography>
//             </Box>
//             <Box display="flex" justifyContent="space-between" mb="16px">
//               <Typography
//                 sx={{
//                   fontSize: "16px",
//                   fontWeight: "600",
//                   color: colors.text.primary,
//                 }}
//               >
//                 12,051.48
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "16px",
//                   fontWeight: "600",
//                   color: colors.text.primary,
//                 }}
//               >
//                 12,000.21
//               </Typography>
//             </Box>

//             <Box display="flex" justifyContent="space-between" mb="8px">
//               <Typography
//                 sx={{ fontSize: "12px", color: colors.text.secondary }}
//               >
//                 Day Low
//               </Typography>
//               <Typography
//                 sx={{ fontSize: "12px", color: colors.text.secondary }}
//               >
//                 Day High
//               </Typography>
//             </Box>
//             <Box display="flex" justifyContent="space-between" mb="16px">
//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   color: colors.text.primary,
//                 }}
//               >
//                 11,999.87
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   color: colors.text.primary,
//                 }}
//               >
//                 12,248.15
//               </Typography>
//             </Box>

//             <Box textAlign="center" mb="16px">
//               <Typography
//                 sx={{
//                   fontSize: "24px",
//                   fontWeight: "bold",
//                   color: colors.text.primary,
//                 }}
//               >
//                 12,166.60
//               </Typography>
//             </Box>

//             <Box display="flex" justifyContent="space-between" mb="8px">
//               <Typography
//                 sx={{ fontSize: "12px", color: colors.text.secondary }}
//               >
//                 52 Week Low
//               </Typography>
//               <Typography
//                 sx={{ fontSize: "12px", color: colors.text.secondary }}
//               >
//                 52 Week High
//               </Typography>
//             </Box>
//             <Box display="flex" justifyContent="space-between" mb="16px">
//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   color: colors.text.primary,
//                 }}
//               >
//                 10,440.64
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   color: colors.text.primary,
//                 }}
//               >
//                 15,265.42
//               </Typography>
//             </Box>

//             <Box textAlign="center" mb="16px">
//               <Typography
//                 sx={{
//                   fontSize: "24px",
//                   fontWeight: "bold",
//                   color: colors.text.primary,
//                 }}
//               >
//                 12,166.60
//               </Typography>
//             </Box>

//             <Box display="flex" justifyContent="space-between">
//               <Box>
//                 <Typography
//                   sx={{ fontSize: "12px", color: colors.text.secondary }}
//                 >
//                   Trade Time
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     color: colors.text.primary,
//                   }}
//                 >
//                   05:16 PM
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography
//                   sx={{ fontSize: "12px", color: colors.text.secondary }}
//                 >
//                   Trade Date
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     color: colors.text.primary,
//                   }}
//                 >
//                   01/27/23
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
    
//   );
// };

// export default Dashboard;


"use client"

import { Box, Typography, Button } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { LineChart, Line, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { useState } from "react"

// Light theme colors
const colors = {
  background: "#f8fafc",
  white: "#ffffff",
  text: {
    primary: "#1f2937",
    secondary: "#6b7280",
    light: "#9ca3af",
  },
  purple: "#6366f1",
  green: "#10b981",
  red: "#ef4444",
}

// Stock Card Component
const StockCard = ({
  company,
  symbol,
  currentValue,
  change,
  changePercent,
  trendData,
  bgColor,
  logo,
  logoImage,
  textColor = "white",
  logoSize = 24,
}) => {
  const isPositive = change >= 0

  return (
    <Box
      sx={{
        background: bgColor,
        borderRadius: "10px",
        padding: "20px",
        minWidth: "200px",
        height: "140px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      {/* Top section with logo and symbol */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start">
        <Box display="flex" alignItems="center" gap="8px">
          <Box
            sx={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              backgroundColor: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {logoImage ? (
              <img
                src={logoImage || "/placeholder.svg"}
                alt={`${company} logo`}
                style={{
                  width: logoSize,
                  height: logoSize,
                  objectFit: "contain",
                }}
              />
            ) : (
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: textColor,
                }}
              >
                {logo}
              </Typography>
            )}
          </Box>
          <Typography
            sx={{
              fontSize: "13px",
              color: textColor,
            }}
          >
            {company}
          </Typography>
        </Box>
        <Box textAlign="right">
          <Typography
            sx={{
              fontSize: "14px",
              color: textColor,
            }}
          >
            {symbol}
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "500",
              color: isPositive ? "#7EC300" : "#ef4444",
            }}
          >
            {isPositive ? "+" : ""}
            {change}
          </Typography>
        </Box>
      </Box>

      {/* Current Value section */}
      <Box>
        <Typography
          sx={{
            fontSize: "12px",
            color: "rgb(244, 244, 244)",
            mb: "2px",
          }}
        >
          Current Value
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "500",
            color: textColor,
          }}
        >
          ${currentValue}
        </Typography>
      </Box>

      {/* Mini trend chart using recharts */}
      <Box position="absolute" right="16px" bottom="10px" width="80px" height="40px">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData}>
            <Line
              type="sharp"
              dataKey="value"
              stroke={
                symbol === "META" || symbol === "AMD"
                  ? "#fff"
                  : "#7EC300"
              }
              strokeWidth={2}
              dot={false}
              activeDot={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}

// Balance Card Component
const BalanceCard = ({ title, amount, change, isMain = false, bgColor = "#6425fe", onClick }) => {
  return (
    <Box
      display="flex"
      gap="8px"
      alignItems="stretch"
      sx={{
        "&:hover .balance-card-main": {
          boxShadow: isMain ? "0 2px 12px 0 rgba(100,37,254,0.18)" : undefined,
          background: isMain
            ? `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}cc 100%)`
            : "#232323",
        },
        "&:hover .balance-card-arrow": {
          backgroundColor: "#4338ca",
        },
      }}
    >
      <Box
        className="balance-card-main"
        sx={{
          background: isMain
            ? `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%)`
            : "#2C2C2C ",
          borderRadius: "8px",
          padding: "10px",
          color: "white",
          position: "relative",
          overflow: "hidden",
          cursor: onClick ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "start",
          flex: 1,
          transition: "background 0.2s, box-shadow 0.2s",
        }}
        onClick={onClick}
      >
        <Typography sx={{ fontSize: "22px", mb: "2px" }}>{amount}</Typography>

        {!isMain && onClick && (
          <Box
            className="balance-card-arrow"
            sx={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#6425fe",
              borderRadius: "8px",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: "26px", color: "white" }} />
          </Box>
        )}
      </Box>
      {isMain && change && (
        <Box
          className="balance-card-change"
          sx={{
            backgroundColor: "#A8E885",
            borderRadius: "12px",
            textColor: "black",
            padding: "2px 6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "auto",
            width: "auto",
            transition: "background 0.2s",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "500", color: "black" }}>{change}</Typography>
        </Box>
      )}
    </Box>
  )
}

// Tab Button Component
const TabButton = ({ label, isActive = false, onClick }) => (
  <Button
    onClick={onClick}
    sx={{
      backgroundColor: isActive ? "#6425fe" : "transparent",
      color: isActive ? "white" : colors.text.secondary,
      borderRadius: "8px",
      padding: "8px 16px",
      fontSize: "12px",
      fontWeight: "500",
      textTransform: "none",
      minWidth: "auto",
      "&:hover": {
        backgroundColor: isActive ? colors.purple : "#f3f4f6",
      },
    }}
  >
    {label}
  </Button>
)

// Custom Tooltip Component for recharts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: "8px 12px",
          borderRadius: "6px",
          fontSize: "12px",
          border: "none",
        }}
      >
        <Typography sx={{ fontSize: "12px", color: "white" }}>
          {`${label}: ${payload[0].value.toLocaleString()}`}
        </Typography>
      </Box>
    )
  }
  return null
}

// Main Dashboard Component
const Dashboard = () => {
  const [activeExchange, setActiveExchange] = useState("NASDAQ")
  const [activeTimeframe, setActiveTimeframe] = useState("1D")

  // Generate different chart data based on timeframe using recharts format
  const generateChartData = (timeframe) => {
    const dataPoints = {
      "1D": [
        { time: "10 am", value: 11550, volume: 1200000 },
        { time: "10:30", value: 11580, volume: 1350000 },
        { time: "11 am", value: 11620, volume: 1100000 },
        { time: "11:30", value: 11650, volume: 1450000 },
        { time: "12 pm", value: 11691, volume: 1600000 },
      ],
      "5D": [
        { time: "Mon", value: 11400, volume: 2200000 },
        { time: "Tue", value: 11520, volume: 2350000 },
        { time: "Wed", value: 11680, volume: 2100000 },
        { time: "Thu", value: 11590, volume: 2450000 },
        { time: "Fri", value: 11691, volume: 2600000 },
      ],
      "1M": [
        { time: "Week 1", value: 11200, volume: 8200000 },
        { time: "Week 2", value: 11450, volume: 8350000 },
        { time: "Week 3", value: 11380, volume: 8100000 },
        { time: "Week 4", value: 11691, volume: 8450000 },
      ],
      "6M": [
        { time: "Jan", value: 10800, volume: 32200000 },
        { time: "Feb", value: 11100, volume: 33350000 },
        { time: "Mar", value: 11300, volume: 31100000 },
        { time: "Apr", value: 11500, volume: 34450000 },
        { time: "May", value: 11400, volume: 33200000 },
        { time: "Jun", value: 11691, volume: 35450000 },
      ],
      "1Y": [
        { time: "Q1", value: 10500, volume: 95200000 },
        { time: "Q2", value: 11000, volume: 98350000 },
        { time: "Q3", value: 11200, volume: 92100000 },
        { time: "Q4", value: 11691, volume: 101450000 },
      ],
    }
    return dataPoints[timeframe] || dataPoints["1D"]
  }

  const [chartData, setChartData] = useState(generateChartData("1D"))

  const handleTimeframeChange = (timeframe) => {
    setActiveTimeframe(timeframe)
    setChartData(generateChartData(timeframe))
  }

  // Stock data with company logos
  const stocksData = [
    {
      company: "Nvidia",
      symbol: "NVDA",
      currentValue: "203.65",
      change: "5.63",
      bgColor: "#A6F0DB",
      logo: "N",
      logoImage: "./assets/2.png",
      color: "#000000",
      textColor: "black",
      trendData: [
        { value: 9080 },
        { value: 6950 },
        { value: 9002 },
        { value: 2090 },
        { value: 8908 },
        { value: 3045 },
        { value: 2085 },
        { value: 7085 },
        { value: 4085 },
      ],
    },
    {
      company: "Meta",
      symbol: "META",
      currentValue: "151.74",
      change: "-4.44",
      bgColor: "#BFA6FE",
      logoImage: "./assets/3.png",
      fontWeight: "none",
      trendData: [
        { value: 10508 },
        { value: 4256 },
        { value: 8549 },
        { value: 3543 },
        { value: 10542 },
        { value: 4501 },
        { value: 4591.74 },
        { value: 1591.74 },
        { value: 1591.74 },
      ],
    },
    {
      company: "Tesla Inc",
      symbol: "TSLA",
      currentValue: "177.90",
      change: "17.63",
      bgColor: "#FFD875",
      logoImage: "./assets/4.png",
      fontWeight: "none",
      textColor: "black",
      trendData: [
        { value: 10165 },
        { value: 5168 },
        { value: 8172 },
        { value: 4175 },
        { value: 9176 },
        { value: 8178 },
        { value: 1177.9 },
        { value: 10177.9 },
      ],
    },
    {
      company: "Apple Inc",
      symbol: "AAPL",
      currentValue: "145.93",
      change: "23.41",
      bgColor: "#A8E885",
      logoImage: "./assets/5.png",
      textColor: "black",
     trendData: [
        { value: 10165 },
        { value: 5168 },
        { value: 8172 },
        { value: 4175 },
        { value: 9176 },
        { value: 8178 },
        { value: 1177.9 },
        { value: 10177.9 },
      ],
    },
    {
      company: "Advanced Micro Devices",
      symbol: "AMD",
      currentValue: "75.40",
      change: "-2.15",
      bgColor: "#FFA8F5",
      logoImage: "./assets/6.png",
      textColor: "black",
      logoSize: 32,
      trendData: [
        { value: 8778 },
        { value: 1277 },
        { value: 2376 },
        { value: 5475.5 },
        { value: 4725.2 },
        { value: 1275.1 },
        { value: 7335.4 },
        { value: 7445.4 },
      ],
    },
  ]

  const teslaChartData = [
  { time: "Day 1", value: 2165 },
  { time: "Day 2", value: 9160 },
  { time: "Day 3", value: 8167 },
  { time: "Day 4", value: 4170 },
  { time: "Day 5", value: 25175 },
  { time: "Day 6", value: 8169 },
  { time: "Day 7", value: 9173 },
  { time: "Day 8", value: 10180 },
  { time: "Day 9", value: 2172 },
  { time: "Day 10", value: 2176 },
  { time: "Day 11", value: 1178 },
  { time: "Day 12", value: 9175 }
];


  return (
    <Box
      sx={{
        backgroundColor: colors.background,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* MY STOCKS SECTION */}
      <Box
        sx={{
          backgroundColor: colors.white,
          borderRadius: "20px",
          padding: "20px",
          margin: "0 auto",
          width: "100%",
          maxWidth: "1400px",
          mb: "20px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: colors.text.primary,
            }}
          >
            My Stocks
          </Typography>
          <Box
            sx={{
              backgroundColor: colors.purple,
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s, box-shadow 0.2s",
              "&:hover": {
                background: "#4338ca",
                boxShadow: "0 2px 8px 0 rgba(6, 8, 101, 0.25)",
              },
            }}
          >
            <ArrowForwardIcon sx={{ color: "white", fontSize: "20px" }} />
          </Box>
        </Box>

        {/* Stocks Grid */}
        <Box
          display="flex"
          gap="16px"
          sx={{
            overflowX: "auto",
            paddingTop: "2px",
            paddingBottom: "10px",
          }}
        >
          {stocksData.map((stock, index) => (
            <StockCard key={index} {...stock} />
          ))}
        </Box>
      </Box>

      {/* MAIN CONTENT SECTION - Three columns in one row */}
      <Box display="flex" gap="20px" mb="20px" maxWidth="1400px" margin="0 auto">
        {/* Left Column - Balance, Invested, Top Stock */}
        <Box
          sx={{
            backgroundColor: colors.white,
            borderRadius: "16px",
            p: "20px",
            border: "1px solid #e5e7eb",
            width: "370px",
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#000000",
                mb: "8px",
              }}
            >
              Balance
            </Typography>
            <BalanceCard
              amount="$14,032.56"
              change="+5.63%"
              isMain={true}
              onClick={() => console.log("Balance clicked")}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#000000",
                mb: "8px",
              }}
            >
              Invested
            </Typography>
            <BalanceCard amount="$7,532.21" onClick={() => console.log("Invested clicked")} />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "gray",
                mb: "8px",
              }}
            >
              Top Stock
            </Typography>
            <Box
              sx={{
                bgcolor: colors.white,
                p: "16px",
              }}
            >
              <Box display="flex" alignItems="center" gap="12px" mb="12px">
                <Box
                  sx={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="./assets/7.png"
                    alt="Tesla logo"
                    style={{
                      width: "20px",
                      height: "20px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Box flex={1}>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: colors.text.primary,
                    }}
                  >
                    Tesla Inc
                  </Typography>
                </Box>
                <Box textAlign="right">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    TSLA
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#7EC300",
                      fontWeight: "500",
                    }}
                  >
                    +17.63
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" justifyContent="space-between" mb="8px">
                <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Invested Value</Typography>
                <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Current Value</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb="12px">
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: colors.text.primary,
                  }}
                >
                  $29.34
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: colors.text.primary,
                  }}
                >
                  $177.90
                </Typography>
              </Box>

              <Box height="60px" mb="8px" mt="20px">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={teslaChartData}
                    margin={{ top: 8, right: 8, left: 8, bottom: 8 }}
                  >
                    <Line
                      type="sharp"
                      dataKey="value"
                      stroke="#7EC300"
                      strokeWidth={2.5}
                      dot={false}
                      activeDot={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                  </LineChart>
                </ResponsiveContainer>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="center">
                <Button
                  sx={{
                    backgroundColor: "#6425fe",
                    color: "white",
                    borderRadius: "8px",
                    padding: "4px 4px",
                    fontSize: "12px",
                    textTransform: "none",
                    minWidth: "auto",
                    "&:hover": {
                      backgroundColor: "#6425fe",
                    },
                  }}
                >
                  <KeyboardArrowDownIcon sx={{ fontSize: "40px" }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Middle Column - Chart (reduced width) */}
        <Box
          flex="0 0 420px"
          maxWidth="420px"
          minWidth="320px"
          bgcolor={colors.white}
          borderRadius="16px"
          p="20px"
          border="1px solid #e5e7eb"
        >
          <Box display="flex" gap="8px" mb="20px">
            {["NASDAQ", "SSE", "Euronext", "BSE"].map((exchange) => (
              <TabButton
                key={exchange}
                label={exchange}
                isActive={activeExchange === exchange}
                onClick={() => setActiveExchange(exchange)}
              />
            ))}
          </Box>

          {/* Timeframe Tabs with partitions */}
          <Box display="flex" alignItems="center" gap={0} mb="20px">
            {["1D", "5D", "1M", "6M", "1Y"].map((timeframe, idx, arr) => (
              <Box key={timeframe} display="flex" alignItems="center">
                <TabButton
                  label={timeframe}
                  isActive={activeTimeframe === timeframe}
                  onClick={() => handleTimeframeChange(timeframe)}
                />
                {idx < arr.length - 1 && (
                  <Box
                    sx={{
                      width: "1px",
                      height: "24px",
                      backgroundColor: "#e5e7eb",
                      mx: "4px",
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>

          <Box height="200px" mb="20px">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="gray" />
                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: colors.text.light }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: colors.text.light }}
                  domain={["dataMin - 50", "dataMax + 50"]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="sharp"
                  dataKey="value"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  fill="url(#colorGradient)"
                  activeDot={{ r: 6, fill: "#8b5cf6" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>High</Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: colors.text.primary,
                }}
              >
                11,691.89
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Low</Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: colors.text.primary,
                }}
              >
                11,470.47
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Prev Close (Apr 28 Days)</Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: colors.text.primary,
                }}
              >
                11,512.41
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Open</Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: colors.text.primary,
                }}
              >
                11,690.11
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "250px", minWidth: "250px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              color: colors.text.primary,
              mb: "16px",
            }}
          >
            Snapshot
          </Typography>

          <Box bgcolor={colors.white} borderRadius="12px" p="16px" border="1px solid #e5e7eb">
            <Box display="flex" justifyContent="space-between" mb="8px">
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Prev Close</Typography>
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Open</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb="16px">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: colors.text.primary,
                }}
              >
                12,051.48
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: colors.text.primary,
                }}
              >
                12,000.21
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mb="8px">
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Day Low</Typography>
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Day High</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb="16px">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: colors.text.primary,
                }}
              >
                11,999.87
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: colors.text.primary,
                }}
              >
                12,248.15
              </Typography>
            </Box>

            <Box textAlign="center" mb="16px">
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: colors.text.primary,
                }}
              >
                12,166.60
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mb="8px">
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>52 Week Low</Typography>
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>52 Week High</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb="16px">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: colors.text.primary,
                }}
              >
                10,440.64
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: colors.text.primary,
                }}
              >
                15,265.42
              </Typography>
            </Box>

            <Box textAlign="center" mb="16px">
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: colors.text.primary,
                }}
              >
                12,166.60
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Trade Time</Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: colors.text.primary,
                  }}
                >
                  05:16 PM
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Trade Date</Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: colors.text.primary,
                  }}
                >
                  01/27/23
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
