"use client";
import CardSection from "./components/Cards/cardsSection";
import ChatBot from "./components/ChatBot";
// import { motion } from "motion/react";

import HeroSection from "./components/heroSection/hero";
import Navbar from "./components/Navbar";
import ScrollSection from "./components/scrollSection";
import Dashboard from "./dashboard/(DashboardLayout)/page";

export default function Home() {
  return (
    <div className="bg-white  min-h-screen">
      <main>
        <Navbar />
        <ChatBot />
        <HeroSection />
        <Dashboard />
        <CardSection />
        <ScrollSection />
      </main>
    </div>
  );
}
