"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

export default function ChatBot() {
  return (
    <div className="fixed bottom-3 right-3 z-50">
      <button className="flex items-center justify-center align-middle p-2 pt-2.5 w-[38px] h-[38px] bg-gray-100  rounded-full cursor-pointer  hover:bg-gray-200 transition">
        <Icon
          className="text-black"
          icon="mdi:message-reply"
          width="24"
          height="24"
        />
      </button>
    </div>
  );
}
