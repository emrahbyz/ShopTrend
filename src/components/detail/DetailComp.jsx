import React from "react";

const DetailComp = ({ productDetail }) => {
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
        <div>Rating : {productDetail?.rating?.rate} </div>
        <div>Count : {productDetail?.rating?.count} </div>
        <div>
          Count : {productDetail?.price} <span className="text-sm"></span>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
