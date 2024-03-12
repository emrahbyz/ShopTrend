import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/carSlice";
import { useNavigate } from "react-router-dom";
function Navbarright() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount } = useSelector((state) => state.carts);
  console.log(itemCount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Arama yapınız..."
        />
        <CiSearch size={28} />
      </div>
      <CiHeart size={28} />
      <div onClick={() => navigate("cart")} className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ">
          {itemCount}
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
}

export default Navbarright;
