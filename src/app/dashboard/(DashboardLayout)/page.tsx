"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "./components/container/PageContainer";
// components
import SalesOverview from "./components/dashboard/SalesOverview";

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
