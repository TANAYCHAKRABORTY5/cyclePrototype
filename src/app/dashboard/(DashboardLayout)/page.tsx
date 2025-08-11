"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "./components/container/PageContainer";
// components
import SalesOverview from "./components/dashboard/SalesOverview";
import YearlyBreakup from "./components/dashboard/YearlyBreakup";
import RecentTransactions from "./components/dashboard/RecentTransactions";
import ProductPerformance from "./components/dashboard/ProductPerformance";
import Blog from "./components/dashboard/Blog";
import MonthlyEarnings from "./components/dashboard/MonthlyEarnings";

const Dashboard = () => {
  return (
    <div className="max-w-[500vh] p-10">
      <PageContainer title="Dashboard" description="this is Dashboard">
        <Box>
          <Grid container spacing={3}>
            <Grid
              size={{
                xs: 12,
                lg: 8,
              }}
            >
              <SalesOverview />
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </div>
  );
};

export default Dashboard;
