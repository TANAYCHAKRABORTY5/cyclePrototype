"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed w-full  flex justify-center top-0 left-0 z-10000 opacity-100 ">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center align-middle justify-between px-4 py-[10px] shadow-xl border rounded-2xl  gap-10 mt-4 max-w-[68rem] bg-white"
      >
        <div className="pl-2 flex items-center space-x-2 text-black">
          <span className="text-[22px] font-bold">0</span>
          <span className="text-[22px] font-bold">Cycle</span>
        </div>

        <div className="hidden md:flex space-x-4 text-xs font-medium text-gray-500 ">
          <button className="flex items-center gap-1 hover:text-gray-600">
            Product <Icon icon="mdi:chevron-down" width="16" height="16" />
          </button>
          <button className="hover:text-gray-600">Changelog</button>
          <button className="hover:text-gray-600">Customers</button>
          <button className="flex items-center gap-1 hover:text-gray-600">
            Resources <Icon icon="mdi:chevron-down" width="16" height="16" />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-xs text-gray-500">Log in</button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-[13px]">
            Book a demo
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
