import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-[420px] p-4 mb-5 mx-5    border rounded-md relative cursor-pointer"
    >
      <div className="text-2xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1">
        {product.price} <span className="text-sm">TL</span>
      </div>
      <img className="w-[200px] h-[200px]  m-auto " src={product?.image} />
      <div className="text-xl font-bold text-center p-2 m-1 px-3 ">
        {product.title}
      </div>
    </div>
  );
};

export default Product;
