import React from "react";
import { removeFromCart } from "../../redux/carSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between border-4 border-y-gray-500 bg-gray-50 p-4 ">
      <img
        className="w-[150px] rounded-md  h-[150px] transition-all ease-in-out duration-200 border-2 p-2 hover:w-[255px] hover:h-[255px] hover:items-center"
        src={cart?.image}
        alt=""
      />
      <div className="w-[476px]">
        <div className="text-2xl font-bold tracking-widest ">{cart?.title}</div>
        <div> {cart?.description} </div>
      </div>
      <div className="text-xl font-bold tracking-widest ">
        Fiyat : {cart?.price} <span>TL</span>
      </div>
      <div className="text-xl font-bold tracking-widest ">
        Adet : {cart?.quantity}
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-2xl text-white  rounded-2xl cursor-pointer w-[150px] h-14 mt-6 flex items-center justify-center"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
