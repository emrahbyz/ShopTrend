import React from "react";
import { useNavigate } from "react-router-dom";

function Navbarleft() {
  const navigate = useNavigate();
  return (
    <div>
      <p onClick={() => navigate("/")} className="text-6xl cursor-pointer">
        ShopTrend
      </p>
    </div>
  );
}

export default Navbarleft;
