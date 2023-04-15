import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Footer from "./Footer";

const CheckOut = ({
  userCarts,
  setUserCarts,
  setIsopen,
  storedCart,
  setStoredCart,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const Increment = (id) => {
    const Add_num = userCarts.map((cart) => {
      return cart.id === id ? { ...cart, num: cart.num + 1 } : cart;
    });
    setUserCarts(Add_num);
  };
  const Decrement = (id) => {
    const decrease_num = userCarts.map((cart) => {
      return cart.id === id ? { ...cart, num: cart.num - 1 } : cart;
    });
    setUserCarts(decrease_num);
  };
  const DeleteCart = (id) => {
    setUserCarts(userCarts.filter((cart) => cart.id !== id));
    const disablee = storedCart.map((cart) => {
      return cart.id === id ? { ...cart, isclicked: false } : cart;
    });
    setStoredCart(disablee);
    handlePrice();
  };
  const handlePrice = () => {
    let updated_price = 0;
    const update = userCarts.map((cart) =>
      cart.discount
        ? (updated_price +=
            cart.num * (cart.price - Math.ceil(cart.price / cart.discount)))
        : (updated_price += cart.num * cart.price)
    );
    setTotalPrice(updated_price);
  };
  useEffect((id) => {
    handlePrice();
  });

  return (
    <div className="mt-24 p-2 space-y-2">
      <div className="h-[70vh] overflow-y-scroll space-y-3">
        {userCarts.map((carts) => {
          return (
            <div
              key={carts.id}
              className="flex justify-between items-center border rounded px-2 py-6 "
            >
              <div>
                <img
                  src={carts.img}
                  alt="images"
                  className="w-10 h-10 object-cover rounded"
                />
              </div>
              <div className="w-[100px] text-xs md:w-[200px]">
                <p>{carts.title}</p>
              </div>
              <div>
                <button
                  onClick={() => Increment(carts.id)}
                  className="border text-white px-2 rounded bg-[gray] md:px-4"
                >
                  +
                </button>
              </div>
              <div className="flex items-center ">
                <h2>{carts.num}</h2>
              </div>
              <div>
                {carts.num === 1 ? (
                  <button
                    className="border text-white px-2 rounded bg-[gray] md:px-4"
                    onClick={() => DeleteCart(carts.id)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    className="border text-white px-2 rounded bg-[gray] md:px-4"
                    disabled={carts.num === 0}
                    onClick={() => Decrement(carts.id)}
                  >
                    -
                  </button>
                )}
              </div>
              <div>${carts.price}</div>
              <FaTimes
                onClick={() => DeleteCart(carts.id)}
                style={{ color: "red", cursor: "pointer" }}
                size={24}
              />
            </div>
          );
        })}
        {userCarts.length < 1 ? (
          <button
            onClick={() => setIsopen(false)}
            className="p-3 rounded text-white bg-gradient-to-r from-[#F49867] to-pink-900"
          >
            Click to Add items
          </button>
        ) : (
          ""
        )}
      </div>
      <Footer totalPrice={totalPrice} />
    </div>
  );
};

export default CheckOut;
