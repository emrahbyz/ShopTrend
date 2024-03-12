import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/carSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  console.log(carts, totalAmount, itemCount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className=" flex justify-end  text-3xl  ">
            TOPLAM TUTAR:{" "}
            <span className="font-bold ml-2"> {totalAmount} TL </span>
          </div>
        </div>
      ) : (
        <div>Kartınız Boş...</div>
      )}
    </div>
  );
};

export default Cart;
