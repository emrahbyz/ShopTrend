import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/carSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };
  const addBasket = () => {
    dispatch(
      addToCard({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[700px] h-[700px] border-4 p-24"
        src={productDetail?.image}
      />
      <div className="">
        <div className="text-4xl underline font-bold">
          {productDetail?.title}
        </div>
        <div className="text-2xl  my-12">{productDetail?.description} </div>
        <div className="my-2 text-lg text-red-500">
          Rating : {productDetail?.rating?.rate}{" "}
        </div>
        <div className="my-2 text-lg text-red-500">
          Count : {productDetail?.rating?.count}{" "}
        </div>
        <div className="text-5xl font-bold">
          {productDetail?.price} <span className="text-sm"></span>
        </div>
        <div className="flex items-center gap-5 my-4 cursor-pointer">
          <div onClick={decrement} className="text-6xl">
            -
          </div>
          <input
            className="w-20 text-center text-4xl font-bold"
            type="text"
            value={quantity}
            placeholder="search"
            onChange={(e) => e.preventDefault()}
          />
          <div onClick={increment} className="text-5xl cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border w-[600px] text-2xl h-16 rounded-xl hover:active:scale-95  mt-4 flex items-center justify-center bg-orange-200"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
