import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import {useForm} from "react-hook-form";
import { useState, useEffect } from "react";

import { tokens } from "../theme";
import StatBox from "../components/StatBox";
import Header from "../components/Header";
import LineChart from "../components/LineChart";
import SearchBarV2 from "../components/SearchBarV2";

import { mockAPIResponse as data} from "../data/mockAPIResponse";
import { mockLineData } from "../data/mockLineData";
import { mockTransactions } from "../data/mockTransactions";
import { dummy_stock_price_over_time as ds } from "../data/dummyStockPriceOverTime";
import { dummyrevenueovertime as dv } from "../data/dummyrevenueovertime";

import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import SearchIcon from "@mui/icons-material/Search";


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    {/* figure out how to parse the data input data points as own object */}
    {/* const [data_input, setDataInput] = useState(null); */}
    const data_input = data[0]; 
    return (
        <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {data_input && <Header title="DASHBOARD" subtitle={data_input.id} />}
        <SearchBarV2 />
      {/* ending box for header*/}
      </Box>
      
      {/* GRID & CHARTS */}
      {data_input && <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={data_input.stock_price}
            subtitle="Stock Price"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        {/* this ending box stat box */}
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={data_input.market_cap}
            subtitle="Market Cap"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        {/* this ending box stat box */}
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={data_input.shares_outstanding}
            subtitle="Shares Outstanding"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        {/* this ending box stat box*/}
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={data_input.p_e_ratio}
            subtitle="P/E Ratio"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        {/* this ending box stat box */}
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
              
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Stock Price Over Time
              </Typography>              
            </Box>            
          </Box>
              <Box height="25vh">
                <LineChart data={data_input.stock_price_over_time}/>
              </Box>
        {/* this end box for the entire stock price over time */}
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow = "auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Stock Price Values
            </Typography>
          </Box>
          {data_input.stock_price_over_time[0].data.map((transaction, i) => (
            <Box
              key={`${transaction.x}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.x}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.x}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.x}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.y}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 - start */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Over Time
              </Typography>
            </Box>
          </Box>
          <Box height="25vh">
                <LineChart data={data_input.revenue_over_time}/>
              </Box>
        {/* this end box for the entire revenue over time */}
        </Box>
        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow = "auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Revenue Values
            </Typography>
          </Box>
          {data_input.revenue_over_time[0].data.map((transaction, i) => (
            <Box
              key={`${transaction.x}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.x}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.x}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.x}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.y}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>}
    </Box>

    
    
    )   
  };
  
  export default Dashboard;