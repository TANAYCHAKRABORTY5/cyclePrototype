// components/BlueCircle.tsx
import { Cyclone, Rectangle } from "@mui/icons-material";
import React from "react";

const Circle: React.FC = () => {
  return (
    <div>
      <div className="absolute top-[180px] left-[120px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 38 38"
        >
          <circle cx="19" cy="19" r="18.5" fill="#6A85F6" />
        </svg>
      </div>
      <div className="absolute top-[220px] left-[90px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 38 38"
        >
          {/* <circle cx="19" cy="19" r="18.5" fill="red" /> */}
          <Rectangle className="bg-red-500" />
        </svg>
      </div>
      <div className="absolute top-[180px] left-[120px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 38 38"
        >
          <circle cx="19" cy="19" r="18.5" fill="#6A85F6" />
        </svg>
      </div>
    </div>
  );
};

export default Circle;
