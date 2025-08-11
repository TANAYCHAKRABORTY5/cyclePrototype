"use client";
import { styled, Container, Box } from "@mui/material";
import React from "react";
import Header from "./layout/header/Header";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
  marginLeft: "250px", // pushes content right so it doesn't overlap fixed sidebar
}));

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <MainWrapper className="mainwrapper">
      {/* Sidebar - fixed */}
      <Box
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          zIndex: 1200,
        }}
      ></Box>

      {/* Main Content */}
      <PageWrapper className="page-wrapper">
        <Header toggleMobileSidebar={() => {}} />
        <Container
          sx={{
            paddingTop: "20px",
            maxWidth: "1200px",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
}
