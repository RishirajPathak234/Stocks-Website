
// "use client"

// import { Box, Typography, Button } from "@mui/material"
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import AddIcon from "@mui/icons-material/Add"
// import { LineChart, Line, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
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

// // Portfolio Analytics Data - Generate different data based on timeframe
// const generatePortfolioData = (timeframe) => {
//   const dataPoints = {
//     "1D": [
//       { time: "10 am", value: 3000 },
//       { time: "10:30", value: 4500 },
//       { time: "11 am", value: 6500 },
//       { time: "11:30", value: 8000 },
//       { time: "12 pm", value: 14032.56 },
//       { time: "12:30", value: 12500 },
//       { time: "1 pm", value: 11000 },
//       { time: "1:30", value: 10500 },
//       { time: "2 pm", value: 12000 },
//     ],
//     "5D": [
//       { time: "Mon", value: 12400 },
//       { time: "Tue", value: 13200 },
//       { time: "Wed", value: 11800 },
//       { time: "Thu", value: 13500 },
//       { time: "Fri", value: 14032.56 },
//     ],
//     "1M": [
//       { time: "Week 1", value: 11200 },
//       { time: "Week 2", value: 12450 },
//       { time: "Week 3", value: 11380 },
//       { time: "Week 4", value: 14032.56 },
//     ],
//     "6M": [
//       { time: "Jan", value: 8800 },
//       { time: "Feb", value: 9100 },
//       { time: "Mar", value: 10300 },
//       { time: "Apr", value: 11500 },
//       { time: "May", value: 12400 },
//       { time: "Jun", value: 14032.56 },
//     ],
//     "1Y": [
//       { time: "Q1", value: 8500 },
//       { time: "Q2", value: 10000 },
//       { time: "Q3", value: 11200 },
//       { time: "Q4", value: 14032.56 },
//     ],
//     "5Y": [
//       { time: "2020", value: 5000 },
//       { time: "2021", value: 7500 },
//       { time: "2022", value: 9000 },
//       { time: "2023", value: 11500 },
//       { time: "2024", value: 14032.56 },
//     ],
//     Max: [
//       { time: "2018", value: 2000 },
//       { time: "2019", value: 3500 },
//       { time: "2020", value: 5000 },
//       { time: "2021", value: 7500 },
//       { time: "2022", value: 9000 },
//       { time: "2023", value: 11500 },
//       { time: "2024", value: 14032.56 },
//     ],
//   }
//   return dataPoints[timeframe] || dataPoints["1D"]
// }

// // Watchlist Data with company logos
// const watchlistData = [
//   {
//     company: "Amazon.com, Inc.",
//     symbol: "AMZN",
//     price: 102.24,
//     change: 3.02,
//     logo: <img src="/assets/amazon.png" alt="Amazon logo" style={{ width: 40, height: 40, objectFit: "contain" }} />,
//     bgColor: "#ffffff",
//   },
//   {
//     company: "Coca-Cola Co",
//     symbol: "KO",
//     price: 60.49,
//     change: -0.32,
//     logo: <img src="/assets/cola.png" alt="Coca-Cola logo" style={{ width: 50, height: 50, objectFit: "contain" }} />,
//     bgColor: "#ffffff",
//   },
//   {
//     company: "Bayerische Motoren Werke AG",
//     symbol: "BMW",
//     price: 92.94,
//     change: 0.59,
//     logo: <img src="/assets/bmw.png" alt="BMW logo" style={{ width: 40, height: 40, objectFit: "contain" }} />,
//     bgColor: "#ffffff",
//   },
//   {
//     company: "Microsoft Corp",
//     symbol: "MSFT",
//     price: 248.16,
//     change: 0.16,
//     logo: <img src="/assets/micro.png" alt="Microsoft logo" style={{ width: 55, height: 55, objectFit: "contain" }} />,
//     bgColor: "#ffffff",
//   },
//   {
//     company: "United Parcel Service, Inc.",
//     symbol: "UPS",
//     price: 182.09,
//     change: -2.39,
//     logo: <img src="/assets/ups.png" alt="UPS logo" style={{ width: 55, height: 55, objectFit: "contain" }} />,
//     bgColor: "#ffffff",
//   },
//   {
//     company: "Mastercard Inc",
//     symbol: "MA",
//     price: 285.43,
//     change: 1.24,
//     logo: (
//       <img src="/assets/master.png" alt="Mastercard logo" style={{ width: 42, height: 45, objectFit: "contain" }} />
//     ),
//     bgColor: "#ffffff",
//   },
// ]

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
//   const isPositive = change >= 0

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
//               fontSize: "13px",
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
//               color: textColor,
//             }}
//           >
//             {symbol}
//           </Typography>
//           <Typography
//             sx={{
//               fontSize: "13px",
//               fontWeight: "500",
//               color: isPositive ? "#7EC300" : "#ef4444",
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
//       <Box position="absolute" right="16px" bottom="10px" width="80px" height="40px">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={trendData}>
//             <Line
//               type="sharp"
//               dataKey="value"
//               stroke={symbol === "META" || symbol === "AMD" ? "#fff" : "#7EC300"}
//               strokeWidth={2}
//               dot={false}
//               activeDot={true}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </Box>
//     </Box>
//   )
// }

// // Balance Card Component
// const BalanceCard = ({ title, amount, change, isMain = false, bgColor = "#6425fe", onClick }) => {
//   return (
//     <Box
//       display="flex"
//       gap="8px"
//       alignItems="stretch"
//        boxShadow= "0 1px 3px rgba(0,0,0,0.1)"
//       sx={{
//         "&:hover .balance-card-main": {
//           boxShadow: isMain ? "0 2px 12px 0 rgba(100,37,254,0.18)" : undefined,
//           background: isMain ? `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}cc 100%)` : "#232323",
//         },
//         "&:hover .balance-card-arrow": {
//           backgroundColor: "#4338ca",
//         },
//       }}
//     >
//       <Box
//         className="balance-card-main"
//         sx={{
//           background: isMain ? `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%)` : "#2C2C2C ",
//           borderRadius: "8px",
//           padding: "10px",
//           color: "white",
//           position: "relative",
//           overflow: "hidden",
//           cursor: onClick ? "pointer" : "default",
//           display: "flex",
//           alignItems: "center",
//           textAlign: "center",
//           justifyContent: "start",
//           flex: 1,
//           transition: "background 0.2s, box-shadow 0.2s",
//         }}
//         onClick={onClick}
//       >
//         <Typography sx={{ fontSize: "22px", mb: "2px" }}>{amount}</Typography>

//         {!isMain && onClick && (
//           <Box
//             className="balance-card-arrow"
//             sx={{
//               position: "absolute",
//               right: "8px",
//               top: "50%",
//               transform: "translateY(-50%)",
//               backgroundColor: "#6425fe",
//               borderRadius: "8px",
//               width: "44px",
//               height: "44px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               transition: "background 0.2s",
//             }}
//           >
//             <ArrowForwardIcon sx={{ fontSize: "26px", color: "white" }} />
//           </Box>
//         )}
//       </Box>
//       {isMain && change && (
//         <Box
//           className="balance-card-change"
//           sx={{
//             backgroundColor: "#A8E885",
//             borderRadius: "12px",
//             textColor: "black",
//             padding: "2px 6px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             minWidth: "auto",
//             width: "auto",
//             transition: "background 0.2s",
//           }}
//         >
//           <Typography sx={{ fontSize: "14px", fontWeight: "500", color: "black" }}>{change}</Typography>
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
//       backgroundColor: isActive ? "#6425fe" : "transparent",
//       color: isActive ? "white" : colors.text.secondary,
//       borderRadius: "8px",
//       padding: "4px 16px",
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

// // Custom Tooltip Component for Portfolio Analytics
// const PortfolioTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     const value = payload[0].value
//     return (
//       <Box
//         sx={{
//           backgroundColor: "#6425fe",
//           color: "white",
//           padding: "8px 12px",
//           borderRadius: "8px",
//           fontSize: "14px",
//           border: "none",
//           boxShadow: "0 4px 12px rgba(100, 37, 254, 0.3)",
//           minWidth: "120px",
//           position: "relative",
//         }}
//       >
//         <Typography sx={{ fontSize: "11px", color: "rgba(255,255,255,0.9)", mb: "2px" }}>
//           Jan 30, 01:12:16 AM
//         </Typography>
//         <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "600" }}>${value.toLocaleString()}</Typography>
//       </Box>
//     )
//   }
//   return null
// }

// // Custom Tooltip Component for other charts
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
//           {`${label}: $${payload[0].value.toLocaleString()}`}
//         </Typography>
//       </Box>
//     )
//   }
//   return null
// }

// // Watchlist Item Component
// const WatchlistItem = ({ company, symbol, price, change, logo, bgColor }) => {
//   const isPositive = change >= 0

//   return (
//     <Box
//       display="flex"
//       justifyContent="space-between"
//       alignItems="center"
//       sx={{
//         padding: "12px 0",
//         borderBottom: "1px solid #f3f4f6",
//         "&:last-child": {
//           borderBottom: "none",
//         },
//       }}
//     >
//       <Box display="flex" alignItems="center" gap="12px">
//         <Box
//           sx={{
//             width: "32px",
//             height: "32px",
//             borderRadius: "8px",
//             backgroundColor: bgColor,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: "16px",
//           }}
//         >
//           {logo}
//         </Box>
//         <Box>
//           <Typography
//             sx={{
//               fontSize: "14px",
//               fontWeight: "500",
//               color: colors.text.primary,
//             }}
//           >
//             {company}
//           </Typography>
//           <Typography
//             sx={{
//               fontSize: "12px",
//               color: colors.text.secondary,
//             }}
//           >
//             {symbol}
//           </Typography>
//         </Box>
//       </Box>
//       <Box textAlign="right">
//         <Typography
//           sx={{
//             fontSize: "14px",
//             fontWeight: "600",
//             color: colors.text.primary,
//           }}
//         >
//           ${price}
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: "12px",
//             fontWeight: "500",
//             color: isPositive ? "#7EC300" : "#ef4444",
//           }}
//         >
//           {isPositive ? "+" : ""}
//           {change}
//         </Typography>
//       </Box>
//     </Box>
//   )
// }

// // Main Dashboard Component
// const Dashboard = () => {
//   const [activeExchange, setActiveExchange] = useState("NASDAQ")
//   const [activeTimeframe, setActiveTimeframe] = useState("1D")
//   const [portfolioTimeframe, setPortfolioTimeframe] = useState("1D")
//   const [portfolioData, setPortfolioData] = useState(generatePortfolioData("1D"))

//   // Generate different chart data based on timeframe using recharts format
//   const generateChartData = (timeframe) => {
//     const dataPoints = {
//       "1D": [
//         { time: "10 am", value: 110550, volume: 1200000 },
//         { time: "10:30", value: 911580, volume: 1350000 },
//         { time: "11 am", value: 311620, volume: 1100000 },
//         { time: "11:30", value: 811650, volume: 1450000 },
//         { time: "12 pm", value: 401691, volume: 1600000 },
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
//     }
//     return dataPoints[timeframe] || dataPoints["1D"]
//   }

//   const handlePortfolioTimeframeChange = (timeframe) => {
//     setPortfolioTimeframe(timeframe)
//     setPortfolioData(generatePortfolioData(timeframe))
//   }

//   const [chartData, setChartData] = useState(generateChartData("1D"))

//   const handleTimeframeChange = (timeframe) => {
//     setActiveTimeframe(timeframe)
//     setChartData(generateChartData(timeframe))
//   }

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
//         { value: 9080 },
//         { value: 6950 },
//         { value: 9002 },
//         { value: 2090 },
//         { value: 8908 },
//         { value: 3045 },
//         { value: 2085 },
//         { value: 7085 },
//         { value: 4085 },
//       ],
//     },
//     {
//       company: "Meta",
//       symbol: "META",
//       currentValue: "151.74",
//       change: "-4.44",
//       bgColor: "#BFA6FE",
//       logoImage: "/assets/3.png",
//       fontWeight: "none",
//       trendData: [
//         { value: 10508 },
//         { value: 4256 },
//         { value: 8549 },
//         { value: 3543 },
//         { value: 10542 },
//         { value: 4501 },
//         { value: 4591.74 },
//         { value: 1591.74 },
//         { value: 1591.74 },
//       ],
//     },
//     {
//       company: "Tesla Inc",
//       symbol: "TSLA",
//       currentValue: "177.90",
//       change: "17.63",
//       bgColor: "#FFD875",
//       logoImage: "/assets/4.png",
//       fontWeight: "none",
//       textColor: "black",
//       trendData: [
//         { value: 10165 },
//         { value: 5168 },
//         { value: 8172 },
//         { value: 4175 },
//         { value: 9176 },
//         { value: 8178 },
//         { value: 1177.9 },
//         { value: 10177.9 },
//       ],
//     },
//     {
//       company: "Apple Inc",
//       symbol: "AAPL",
//       currentValue: "145.93",
//       change: "23.41",
//       bgColor: "#A8E885",
//       logoImage: "/assets/5.png",
//       textColor: "black",
//       trendData: [
//         { value: 10165 },
//         { value: 5168 },
//         { value: 8172 },
//         { value: 4175 },
//         { value: 9176 },
//         { value: 8178 },
//         { value: 1177.9 },
//         { value: 10177.9 },
//       ],
//     },
//     {
//       company: "Advanced Micro Devices",
//       symbol: "AMD",
//       currentValue: "75.40",
//       change: "-2.15",
//       bgColor: "#FFA8F5",
//       logoImage: "/assets/6.png",
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
//   ]

//   const teslaChartData = [
//     { time: "Day 1", value: 2165 },
//     { time: "Day 2", value: 9160 },
//     { time: "Day 3", value: 8167 },
//     { time: "Day 4", value: 4170 },
//     { time: "Day 5", value: 25175 },
//     { time: "Day 6", value: 8169 },
//     { time: "Day 7", value: 9173 },
//     { time: "Day 8", value: 10180 },
//     { time: "Day 9", value: 2172 },
//     { time: "Day 10", value: 2176 },
//     { time: "Day 11", value: 1178 },
//     { time: "Day 12", value: 9175 },
//   ]

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
//           borderRadius: "10px",
//           padding: "20px",
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
//               backgroundColor: "#6425fe",
//               borderRadius: "20%",
//               width: "45px",
//               height: "45px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               zIndex: "2",
//               transition: "background 0.2s, box-shadow 0.2s",
//               "&:hover": {
//                 background: "#4338ca",
//                 boxShadow: "0 2px 8px 0 rgba(6, 8, 101, 0.25)",
//               },
//             }}
//           >
//             <KeyboardArrowRightIcon sx={{ color: "white", fontSize: "36px" }} />
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

//       {/* MAIN CONTENT SECTION - Three columns in one row */}
//       <Box display="flex" gap="20px" mb="20px" maxWidth="1400px" margin="0 auto">
//         {/* Left Column - Balance, Invested, Top Stock */}
//         <Box
//           sx={{
//             backgroundColor: colors.white,
//             borderRadius: "10px",
//             p: "20px",
//             boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//             width: "350px",
//             minWidth: "280px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//           }}
//         >
//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: "600",
//                 color: "#000000",
//                 mb: "8px",
//               }}
//             >
//               Balance
//             </Typography>
//             <BalanceCard
//               amount="$14,032.56"
//               change="+5.63%"
//               isMain={true}
//               onClick={() => console.log("Balance clicked")}
//             />
//           </Box>

//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: "600",
//                 color: "#000000",
//                 mb: "8px",
//               }}
//             >
//               Invested
//             </Typography>
//             <BalanceCard amount="$7,532.21" onClick={() => console.log("Invested clicked")} />
//           </Box>

//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 color: "gray",
//                 mb: "8px",
//               }}
//             >
//               Top Stock
//             </Typography>
//             <Box
//               sx={{
//                 bgcolor: colors.white,
//                 p: "16px",
//               }}
//             >
//               <Box display="flex" alignItems="center" gap="12px" mb="12px">
//                 <Box
//                   sx={{
//                     width: "32px",
//                     height: "32px",
//                     borderRadius: "8px",
//                     background: "white",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <img
//                     src="/assets/7.png"
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
//                       fontSize: "13px",
//                       fontWeight: "600",
//                       color: colors.text.primary,
//                     }}
//                   >
//                     Tesla Inc
//                   </Typography>
//                 </Box>
//                 <Box textAlign="right">
//                   <Typography
//                     sx={{
//                       fontSize: "12px",
//                       color: "#000000",
//                       fontWeight: "500",
//                     }}
//                   >
//                     TSLA
//                   </Typography>
//                   <Typography
//                     sx={{
//                       fontSize: "12px",
//                       color: "#7EC300",
//                       fontWeight: "500",
//                     }}
//                   >
//                     +17.63
//                   </Typography>
//                 </Box>
//               </Box>

//               <Box display="flex" justifyContent="space-between" mb="8px">
//                 <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Invested Value</Typography>
//                 <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Current Value</Typography>
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

//               <Box height="60px" mb="8px" mt="20px">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={teslaChartData} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
//                     <Line
//                       type="sharp"
//                       dataKey="value"
//                       stroke="#7EC300"
//                       strokeWidth={2.5}
//                       dot={false}
//                       activeDot={false}
//                     />
//                     <Tooltip content={<CustomTooltip />} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </Box>

//               <Box display="flex" alignItems="center" justifyContent="center">
//                 <Button
//                   sx={{
//                     backgroundColor: "#6425fe",
//                     color: "white",
//                     borderRadius: "8px",
//                     padding: "4px 4px",
//                     fontSize: "12px",
//                     textTransform: "none",
//                     minWidth: "auto",
//                     "&:hover": {
//                       backgroundColor: "#6425fe",
//                     },
//                   }}
//                 >
//                   <KeyboardArrowDownIcon sx={{ fontSize: "40px" }} />
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Box>

//         {/* Middle Column - Chart (reduced width) */}
//         <Box
//           flex="0 0 420px"
//           maxWidth="400px"
//           minWidth="350px"
//           sx={{ height: "550px" }}
//           bgcolor={colors.white}
//           borderRadius="10px"
//           p="20px"
//           boxShadow="0 1px 3px rgba(0,0,0,0.1)"
//           display="flex"
//           flexDirection="column"
//           justifyContent="flex-start"
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

//           {/* Timeframe Tabs with partitions of equal width */}
//           <Box display="flex" alignItems="center" mb="20px">
//             {["1D", "5D", "1M", "6M", "1Y"].map((timeframe, idx, arr) => (
//               <Box key={timeframe} display="flex" alignItems="center">
//                 <Box
//                   sx={{
//                     minWidth: 63,
//                     display: "flex",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <TabButton
//                     label={timeframe}
//                     isActive={activeTimeframe === timeframe}
//                     onClick={() => handleTimeframeChange(timeframe)}
//                   />
//                 </Box>
//                 {idx < arr.length - 1 && (
//                   <Box
//                     sx={{
//                       width: "16px",
//                       height: "14px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: "2px",
//                         height: "24px",
//                         backgroundColor: "#e5e7eb",
//                         mx: "auto",
//                       }}
//                     />
//                   </Box>
//                 )}
//               </Box>
//             ))}
//           </Box>
//           <Box flex="1" minHeight="0" mb="20px">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 0 }}>
//                 <defs>
//                   <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
//                     <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#909090" />
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
//                   type="sharp"
//                   dataKey="value"
//                   stroke="#8b5cf6"
//                   strokeWidth={3}
//                   fill="url(#colorGradient)"
//                   activeDot={{ r: 6, fill: "#8b5cf6" }}
//                   dots={true}
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </Box>

//           {/* Modified: High & Prev Close in one row, Low & Open in another row */}
//           <Box>
//             <Box display="flex" justifyContent="space-between" alignItems="center" mb="8px">
//               <Box mb="8px">
//                 <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>High</Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     color: colors.text.primary,
//                   }}
//                 >
//                   11,691.89
//                 </Typography>
//               </Box>
//               <Box mb="8px">
//                 <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>
//                   Prev Close (Avr 28 Days)
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     color: colors.text.primary,
//                   }}
//                 >
//                   11,512.41
//                 </Typography>
//               </Box>
//             </Box>
//             <Box display="flex" justifyContent="space-between" alignItems="center">
//               <Box>
//                 <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Low</Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     color: colors.text.primary,
//                   }}
//                 >
//                   11,470.47
//                 </Typography>
//               </Box>
//               <Box mr="76px">
//                 <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Open</Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: "600",
//                     color: colors.text.primary,
//                   }}
//                 >
//                   11,690.11
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Box>

//         {/* Right Column - Snapshot Section with title inside the box */}
//         <Box sx={{ width: "350px", minWidth: "350px" }}>
//           <Box bgcolor={colors.white} borderRadius="10px" p="16px" boxShadow="0 1px 3px rgba(0,0,0,0.1)">
//             {/* Snapshot title moved inside the box */}
//             <Typography
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: "600",
//                 color: colors.text.primary,
//                 mb: "16px",
//               }}
//             >
//               Snapshot
//             </Typography>
//             <Box display="flex" justifyContent="space-between" mb="2px">
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Prev Close</Typography>
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary, marginRight: "70px" }}>Open</Typography>
//             </Box>
//             <Box display="flex" justifyContent="space-between" mb="10px" borderBottom="1px solid #e5e7eb">
//               <Typography
//                 sx={{
//                   fontSize: "22px",
//                   fontWeight: "600",
//                   color: colors.text.primary,
//                 }}
//               >
//                 12,051.48
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "22px",
//                   fontWeight: "600",
//                   color: colors.text.primary,
//                   marginBottom: "25px",
//                 }}
//               >
//                 12.000.21
//               </Typography>
//             </Box>

//             <Box display="flex" justifyContent="space-between" mb="8px" mt="26px">
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
//             <Box display="flex" justifyContent="space-between" mb="25px">
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Day Low</Typography>
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Day High</Typography>
//             </Box>

//             {/* Range indicator */}
//             <Box position="relative" height="4px" bgcolor="#f899ff" mb="8px" borderRadius="2px">
//               <Box
//                 position="absolute"
//                 sx={{
//                   height: "20px",
//                   width: "3.5px",
//                   bgcolor: "#000000",
//                   top: "-8px",
//                   left: "70%", // Approximate position based on the image
//                 }}
//               />
//             </Box>

//             <Box textAlign="center" ml="140px" mb="24px">
//               <Typography
//                 sx={{
//                   fontSize: "24px",
//                   fontWeight: "bold",
//                   color: colors.text.primary,
//                 }}
//               >
//                 12.166.60
//               </Typography>
//             </Box>

//             <Box display="flex" justifyContent="space-between" mb="4px">
//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   color: colors.text.primary,
//                   marginBottom: "6px",
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
//             <Box display="flex" justifyContent="space-between" mb="25px">
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>52 Week Low</Typography>
//               <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>52 Week High</Typography>
//             </Box>

//             {/* Range indicator */}
//             <Box position="relative" height="4px" bgcolor="#f899ff" mb="8px" borderRadius="2px">
//               <Box
//                 position="absolute"
//                 sx={{
//                   height: "20px",
//                   width: "3.5px",
//                   bgcolor: "#111827",
//                   top: "-8px",
//                   left: "30%", // Approximate position based on the image
//                 }}
//               />
//             </Box>

//             <Box textAlign="center" mr="120px" mb="24px">
//               <Typography
//                 sx={{
//                   fontSize: "24px",
//                   fontWeight: "bold",
//                   color: colors.text.primary,
//                 }}
//               >
//                 12.166.60
//               </Typography>
//             </Box>

//             <Box sx={{ borderTop: "1px solid #e5e7eb", pt: "23px", mb: "8px" }} />

//             <Box display="flex" justifyContent="space-between">
//               <Box>
//                 <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Trade Time</Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "20px",
//                     fontWeight: "600",
//                     color: colors.text.primary,
//                   }}
//                 >
//                   05:16 PM
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Trade Date</Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "20px",
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

//       {/* NEW PORTFOLIO ANALYTICS AND WATCHLIST SECTIONS - Two separate boxes side by side */}
//       <Box display="flex" gap="20px" maxWidth="1600px" margin="0 auto" mt="20px">
//         {/* Portfolio Analytics Box */}
//         <Box
//           sx={{
//             backgroundColor: colors.white,
//             borderRadius: "10px",
//             padding: "20px",
//             flex: "1 1 0",
//             minWidth: 0,
//              // increased width from 900px to 1050px
//                   width: "100%",
//                   boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//                   }}
//                 >
//                   <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
//                   <Typography
//                     sx={{
//                     fontSize: "20px",
//                     fontWeight: "600",
//                     color: colors.text.primary,
//                     }}
//                   >
//                     Portfolio Analytics
//                   </Typography>
//                   <Box display="flex" gap="0">
//                     {["1D", "5D", "1M", "6M", "1Y", "5Y", "Max"].map((timeframe, idx, arr) => (
//                     <Box key={timeframe} display="flex" alignItems="center">
//                       <TabButton
//                       label={timeframe}
//                       isActive={portfolioTimeframe === timeframe}
//                       onClick={() => handlePortfolioTimeframeChange(timeframe)}
//                       />
//                       {idx < arr.length - 1 && (
//                       <Box
//                         sx={{
//                         width: "2px",
//                         height: "24px",
//                         backgroundColor: "#e5e7eb",
//                         mx: "4px",
//                         borderRadius: "1px",
//                         }}
//                       />
//                       )}
//                     </Box>
//                     ))}
//                   </Box>
//                   </Box>

//                   <Box height="300px">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <AreaChart data={portfolioData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                     <defs>
//                       <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2} />
//                       <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
//                       </linearGradient>
//                     </defs>
//                     <CartesianGrid strokeDasharray="4 4" stroke="#909090" />
//                     <XAxis
//                       dataKey="time"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fontSize: 12, fill: colors.text.light }}
//                     />
//                     <YAxis
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fontSize: 12, fill: colors.text.light }}
//                       domain={[0, 15000]}
//                       tickFormatter={(value) => `$${value}`}
//                     />
//                     <Tooltip
//                       content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       const value = payload[0].value
//                       return (
//                         <Box
//                           sx={{
//                             backgroundColor: "#6425fe",
//                             color: "white",
//                             padding: "8px 12px",
//                             borderRadius: "8px",
//                             fontSize: "14px",
//                             border: "none",
//                             boxShadow: "0 4px 12px rgba(100, 37, 254, 0.3)",
//                             minWidth: "120px",
//                             position: "relative",
//                           }}
//                         >
//                           <Typography sx={{ fontSize: "11px", color: "rgba(255,255,255,0.9)", mb: "2px" }}>
//                             Jan 30, 01:12:16 AM
//                           </Typography>
//                           <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "600" }}>
//                             ${value.toLocaleString()}
//                           </Typography>
//                         </Box>
//                       )
//                     }
//                     return null
//                   }}
//                   cursor={{ stroke: "#6425fe", strokeWidth: 1, strokeDasharray: "3 3" }}
//                   isAnimationActive={false}
//                 />
//                 <Area
//                   type="sharp"
//                   dataKey="value"
//                   stroke="#8b5cf6"
//                   strokeWidth={2.5}
//                   fill="url(#portfolioGradient)"
//                   activeDot={{
//                     r: 6,
//                     fill: "#6425fe",
//                     stroke: "#ffffff",
//                     strokeWidth: 2,
//                     style: { cursor: "pointer" },
//                   }}
//                   dot={false}
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </Box>
//         </Box>

//         {/* Watchlist Box */}
//         <Box
//           sx={{
//             backgroundColor: colors.white,
//             borderRadius: "10px",
//             padding: "20px",
//             width: "358px",
//             minWidth: "358px",
//             boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//           }}
//         >
//           <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
//             <Typography
//               sx={{
//                 marginTop: "8px",
//                 fontSize: "20px",
//                 fontWeight: "600",
//                 color: colors.text.primary,
//               }}
//             >
//               Watchlist
//             </Typography>
//             <Box
//               sx={{
//                 backgroundColor: "#6425fe",
//                 borderRadius: "10%",
//                 width: "30px",
//                 height: "30px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 cursor: "pointer",
//                 transition: "background 0.2s, box-shadow 0.2s",
//                 "&:hover": {
//                   background: "#4338ca",
//                   boxShadow: "0 2px 8px 0 rgba(6, 8, 101, 0.25)",
//                 },
//               }}
//             >
//               <AddIcon sx={{ color: "white", fontSize: "20px" }} />
//             </Box>
//           </Box>

//           <Box
//             sx={{
//               maxHeight: "350px",
//               overflowY: "auto",
//               pr: "8px",
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//               "&::-webkit-scrollbar": {
//                 display: "none",
//               },
//             }}
//           >
//             {watchlistData.map((stock, index) => (
//               <WatchlistItem key={index} {...stock} />
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// export default Dashboard


"use client"

import { Box, Typography, Button } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddIcon from "@mui/icons-material/Add"
import { LineChart, Line, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { useState } from "react"

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

const generatePortfolioData = (timeframe) => {
  const dataPoints = {
    "1D": [
      { time: "10 am", value: 3000 },
      { time: "10:30", value: 4500 },
      { time: "11 am", value: 6500 },
      { time: "11:30", value: 8000 },
      { time: "12 pm", value: 14032.56 },
      { time: "12:30", value: 12500 },
      { time: "1 pm", value: 11000 },
      { time: "1:30", value: 10500 },
      { time: "2 pm", value: 12000 },
    ],
    "5D": [
      { time: "Mon", value: 12400 },
      { time: "Tue", value: 13200 },
      { time: "Wed", value: 11800 },
      { time: "Thu", value: 13500 },
      { time: "Fri", value: 14032.56 },
    ],
    "1M": [
      { time: "Week 1", value: 11200 },
      { time: "Week 2", value: 12450 },
      { time: "Week 3", value: 11380 },
      { time: "Week 4", value: 14032.56 },
    ],
    "6M": [
      { time: "Jan", value: 8800 },
      { time: "Feb", value: 9100 },
      { time: "Mar", value: 10300 },
      { time: "Apr", value: 11500 },
      { time: "May", value: 12400 },
      { time: "Jun", value: 14032.56 },
    ],
    "1Y": [
      { time: "Q1", value: 8500 },
      { time: "Q2", value: 10000 },
      { time: "Q3", value: 11200 },
      { time: "Q4", value: 14032.56 },
    ],
    "5Y": [
      { time: "2020", value: 5000 },
      { time: "2021", value: 7500 },
      { time: "2022", value: 9000 },
      { time: "2023", value: 11500 },
      { time: "2024", value: 14032.56 },
    ],
    Max: [
      { time: "2018", value: 2000 },
      { time: "2019", value: 3500 },
      { time: "2020", value: 5000 },
      { time: "2021", value: 7500 },
      { time: "2022", value: 9000 },
      { time: "2023", value: 11500 },
      { time: "2024", value: 14032.56 },
    ],
  }
  return dataPoints[timeframe] || dataPoints["1D"]
}

const watchlistData = [
  {
    company: "Amazon.com, Inc.",
    symbol: "AMZN",
    price: 102.24,
    change: 3.02,
    logo: <img src="/assets/amazon.png" alt="Amazon logo" style={{ width: 40, height: 40, objectFit: "contain" }} />,
    bgColor: "#ffffff",
  },
  {
    company: "Coca-Cola Co",
    symbol: "KO",
    price: 60.49,
    change: -0.32,
    logo: <img src="/assets/cola.png" alt="Coca-Cola logo" style={{ width: 50, height: 50, objectFit: "contain" }} />,
    bgColor: "#ffffff",
  },
  {
    company: "Bayerische Motoren Werke AG",
    symbol: "BMW",
    price: 92.94,
    change: 0.59,
    logo: <img src="/assets/bmw.png" alt="BMW logo" style={{ width: 40, height: 40, objectFit: "contain" }} />,
    bgColor: "#ffffff",
  },
  {
    company: "Microsoft Corp",
    symbol: "MSFT",
    price: 248.16,
    change: 0.16,
    logo: <img src="/assets/micro.png" alt="Microsoft logo" style={{ width: 55, height: 55, objectFit: "contain" }} />,
    bgColor: "#ffffff",
  },
  {
    company: "United Parcel Service, Inc.",
    symbol: "UPS",
    price: 182.09,
    change: -2.39,
    logo: <img src="/assets/ups.png" alt="UPS logo" style={{ width: 55, height: 55, objectFit: "contain" }} />,
    bgColor: "#ffffff",
  },
  {
    company: "Mastercard Inc",
    symbol: "MA",
    price: 285.43,
    change: 1.24,
    logo: (
      <img src="/assets/master.png" alt="Mastercard logo" style={{ width: 42, height: 45, objectFit: "contain" }} />
    ),
    bgColor: "#ffffff",
  },
]

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
      <Box position="absolute" right="16px" bottom="10px" width="80px" height="40px">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData}>
            <Line
              type="sharp"
              dataKey="value"
              stroke={symbol === "META" || symbol === "AMD" ? "#fff" : "#7EC300"}
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

const BalanceCard = ({ title, amount, change, isMain = false, bgColor = "#6425fe", onClick }) => {
  return (
    <Box
      display="flex"
      gap="8px"
      alignItems="stretch"
       boxShadow= "0 1px 3px rgba(0,0,0,0.1)"
      sx={{
        "&:hover .balance-card-main": {
          boxShadow: isMain ? "0 2px 12px 0 rgba(100,37,254,0.18)" : undefined,
          background: isMain ? `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}cc 100%)` : "#232323",
        },
        "&:hover .balance-card-arrow": {
          backgroundColor: "#4338ca",
        },
      }}
    >
      <Box
        className="balance-card-main"
        sx={{
          background: isMain ? `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%)` : "#2C2C2C ",
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

const TabButton = ({ label, isActive = false, onClick }) => (
  <Button
    onClick={onClick}
    sx={{
      backgroundColor: isActive ? "#6425fe" : "transparent",
      color: isActive ? "white" : colors.text.secondary,
      borderRadius: "8px",
      padding: "4px 16px",
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

const PortfolioTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value
    return (
      <Box
        sx={{
          backgroundColor: "#6425fe",
          color: "white",
          padding: "8px 12px",
          borderRadius: "8px",
          fontSize: "14px",
          border: "none",
          boxShadow: "0 4px 12px rgba(100, 37, 254, 0.3)",
          minWidth: "120px",
          position: "relative",
        }}
      >
        <Typography sx={{ fontSize: "11px", color: "rgba(255,255,255,0.9)", mb: "2px" }}>
          Jan 30, 01:12:16 AM
        </Typography>
        <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "600" }}>${value.toLocaleString()}</Typography>
      </Box>
    )
  }
  return null
}

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
          {`${label}: $${payload[0].value.toLocaleString()}`}
        </Typography>
      </Box>
    )
  }
  return null
}

const WatchlistItem = ({ company, symbol, price, change, logo, bgColor }) => {
  const isPositive = change >= 0

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        padding: "12px 0",
        borderBottom: "1px solid #f3f4f6",
        "&:last-child": {
          borderBottom: "none",
        },
      }}
    >
      <Box display="flex" alignItems="center" gap="12px">
        <Box
          sx={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            backgroundColor: bgColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        >
          {logo}
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: colors.text.primary,
            }}
          >
            {company}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: colors.text.secondary,
            }}
          >
            {symbol}
          </Typography>
        </Box>
      </Box>
      <Box textAlign="right">
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: colors.text.primary,
          }}
        >
          ${price}
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "500",
            color: isPositive ? "#7EC300" : "#ef4444",
          }}
        >
          {isPositive ? "+" : ""}
          {change}
        </Typography>
      </Box>
    </Box>
  )
}

const Dashboard = () => {
  const [activeExchange, setActiveExchange] = useState("NASDAQ")
  const [activeTimeframe, setActiveTimeframe] = useState("1D")
  const [portfolioTimeframe, setPortfolioTimeframe] = useState("1D")
  const [portfolioData, setPortfolioData] = useState(generatePortfolioData("1D"))

  const generateChartData = (timeframe) => {
    const dataPoints = {
      "1D": [
        { time: "10 am", value: 110550, volume: 1200000 },
        { time: "10:30", value: 911580, volume: 1350000 },
        { time: "11 am", value: 311620, volume: 1100000 },
        { time: "11:30", value: 811650, volume: 1450000 },
        { time: "12 pm", value: 401691, volume: 1600000 },
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

  const handlePortfolioTimeframeChange = (timeframe) => {
    setPortfolioTimeframe(timeframe)
    setPortfolioData(generatePortfolioData(timeframe))
  }

  const [chartData, setChartData] = useState(generateChartData("1D"))

  const handleTimeframeChange = (timeframe) => {
    setActiveTimeframe(timeframe)
    setChartData(generateChartData(timeframe))
  }

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
      logoImage: "/assets/3.png",
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
      logoImage: "/assets/4.png",
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
      logoImage: "/assets/5.png",
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
      logoImage: "/assets/6.png",
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
    { time: "Day 12", value: 9175 },
  ]

  return (
    <Box
      sx={{
        backgroundColor: colors.background,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: colors.white,
          borderRadius: "10px",
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
              backgroundColor: "#6425fe",
              borderRadius: "20%",
              width: "45px",
              height: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: "2",
              transition: "background 0.2s, box-shadow 0.2s",
              "&:hover": {
                background: "#4338ca",
                boxShadow: "0 2px 8px 0 rgba(6, 8, 101, 0.25)",
              },
            }}
          >
            <KeyboardArrowRightIcon sx={{ color: "white", fontSize: "36px" }} />
          </Box>
        </Box>
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
      <Box display="flex" gap="20px" mb="20px" maxWidth="1400px" margin="0 auto">
        <Box
          sx={{
            backgroundColor: colors.white,
            borderRadius: "10px",
            p: "20px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            width: "350px",
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
                    src="/assets/7.png"
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
                  <LineChart data={teslaChartData} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
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
        <Box
          flex="0 0 420px"
          maxWidth="400px"
          minWidth="350px"
          sx={{ height: "550px" }}
          bgcolor={colors.white}
          borderRadius="10px"
          p="20px"
          boxShadow="0 1px 3px rgba(0,0,0,0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
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
          <Box display="flex" alignItems="center" mb="20px">
            {["1D", "5D", "1M", "6M", "1Y"].map((timeframe, idx, arr) => (
              <Box key={timeframe} display="flex" alignItems="center">
                <Box
                  sx={{
                    minWidth: 63,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <TabButton
                    label={timeframe}
                    isActive={activeTimeframe === timeframe}
                    onClick={() => handleTimeframeChange(timeframe)}
                  />
                </Box>
                {idx < arr.length - 1 && (
                  <Box
                    sx={{
                      width: "16px",
                      height: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "2px",
                        height: "24px",
                        backgroundColor: "#e5e7eb",
                        mx: "auto",
                      }}
                    />
                  </Box>
                )}
              </Box>
            ))}
          </Box>
          <Box flex="1" minHeight="0" mb="20px">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#909090" />
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
                  strokeWidth={3}
                  fill="url(#colorGradient)"
                  activeDot={{ r: 6, fill: "#8b5cf6" }}
                  dots={true}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
          <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="8px">
              <Box mb="8px">
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
              <Box mb="8px">
                <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>
                  Prev Close (Avr 28 Days)
                </Typography>
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
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
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
              <Box mr="76px">
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
        </Box>
        <Box sx={{ width: "350px", minWidth: "350px" }}>
          <Box bgcolor={colors.white} borderRadius="10px" p="16px" boxShadow="0 1px 3px rgba(0,0,0,0.1)">
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
            <Box display="flex" justifyContent="space-between" mb="2px">
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Prev Close</Typography>
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary, marginRight: "70px" }}>Open</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb="10px" borderBottom="1px solid #e5e7eb">
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  color: colors.text.primary,
                }}
              >
                12,051.48
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  color: colors.text.primary,
                  marginBottom: "25px",
                }}
              >
                12.000.21
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb="8px" mt="26px">
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
            <Box display="flex" justifyContent="space-between" mb="25px">
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Day Low</Typography>
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Day High</Typography>
            </Box>
            <Box position="relative" height="4px" bgcolor="#f899ff" mb="8px" borderRadius="2px">
              <Box
                position="absolute"
                sx={{
                  height: "20px",
                  width: "3.5px",
                  bgcolor: "#000000",
                  top: "-8px",
                  left: "70%",
                }}
              />
            </Box>
            <Box textAlign="center" ml="140px" mb="24px">
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: colors.text.primary,
                }}
              >
                12.166.60
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb="4px">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: colors.text.primary,
                  marginBottom: "6px",
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
            <Box display="flex" justifyContent="space-between" mb="25px">
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>52 Week Low</Typography>
              <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>52 Week High</Typography>
            </Box>
            <Box position="relative" height="4px" bgcolor="#f899ff" mb="8px" borderRadius="2px">
              <Box
                position="absolute"
                sx={{
                  height: "20px",
                  width: "3.5px",
                  bgcolor: "#111827",
                  top: "-8px",
                  left: "30%",
                }}
              />
            </Box>
            <Box textAlign="center" mr="120px" mb="24px">
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: colors.text.primary,
                }}
              >
                12.166.60
              </Typography>
            </Box>
            <Box sx={{ borderTop: "1px solid #e5e7eb", pt: "23px", mb: "8px" }} />
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography sx={{ fontSize: "12px", color: colors.text.secondary }}>Trade Time</Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
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
                    fontSize: "20px",
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
      <Box display="flex" gap="20px" maxWidth="1600px" margin="0 auto" mt="20px">
        <Box
          sx={{
            backgroundColor: colors.white,
            borderRadius: "10px",
            padding: "20px",
            flex: "1 1 0",
            minWidth: 0,
            width: "100%",
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
              Portfolio Analytics
            </Typography>
            <Box display="flex" gap="0">
              {["1D", "5D", "1M", "6M", "1Y", "5Y", "Max"].map((timeframe, idx, arr) => (
                <Box key={timeframe} display="flex" alignItems="center">
                  <TabButton
                    label={timeframe}
                    isActive={portfolioTimeframe === timeframe}
                    onClick={() => handlePortfolioTimeframeChange(timeframe)}
                  />
                  {idx < arr.length - 1 && (
                    <Box
                      sx={{
                        width: "2px",
                        height: "24px",
                        backgroundColor: "#e5e7eb",
                        mx: "4px",
                        borderRadius: "1px",
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Box>
          <Box height="300px">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" stroke="#909090" />
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
                  domain={[0, 15000]}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const value = payload[0].value
                      return (
                        <Box
                          sx={{
                            backgroundColor: "#6425fe",
                            color: "white",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            fontSize: "14px",
                            border: "none",
                            boxShadow: "0 4px 12px rgba(100, 37, 254, 0.3)",
                            minWidth: "120px",
                            position: "relative",
                          }}
                        >
                          <Typography sx={{ fontSize: "11px", color: "rgba(255,255,255,0.9)", mb: "2px" }}>
                            Jan 30, 01:12:16 AM
                          </Typography>
                          <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "600" }}>
                            ${value.toLocaleString()}
                          </Typography>
                        </Box>
                      )
                    }
                    return null
                  }}
                  cursor={{ stroke: "#6425fe", strokeWidth: 1, strokeDasharray: "3 3" }}
                  isAnimationActive={false}
                />
                <Area
                  type="sharp"
                  dataKey="value"
                  stroke="#8b5cf6"
                  strokeWidth={2.5}
                  fill="url(#portfolioGradient)"
                  activeDot={{
                    r: 6,
                    fill: "#6425fe",
                    stroke: "#ffffff",
                    strokeWidth: 2,
                    style: { cursor: "pointer" },
                  }}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: colors.white,
            borderRadius: "10px",
            padding: "20px",
            width: "358px",
            minWidth: "358px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
            <Typography
              sx={{
                marginTop: "8px",
                fontSize: "20px",
                fontWeight: "600",
                color: colors.text.primary,
              }}
            >
              Watchlist
            </Typography>
            <Box
              sx={{
                backgroundColor: "#6425fe",
                borderRadius: "10%",
                width: "30px",
                height: "30px",
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
              <AddIcon sx={{ color: "white", fontSize: "20px" }} />
            </Box>
          </Box>
          <Box
            sx={{
              maxHeight: "350px",
              overflowY: "auto",
              pr: "8px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {watchlistData.map((stock, index) => (
              <WatchlistItem key={index} {...stock} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard