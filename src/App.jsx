import { useState, useEffect } from "react";
import Home from "./Components/Home";
import CheckOut from "./Components/CheckOut";
import Navbar from "./Components/Navbar";
import { Data } from "./Components/Data";

function App() {
  const [storedCart, setStoredCart] = useState(Data);
  const [userCarts, setUserCarts] = useState([]);
  const [isopen, setIsopen] = useState(false);
  const [notify, setNotify] = useState(false);

  const handleAdd = (new_cart, id) => {
    if (userCarts.indexOf(new_cart) !== -1) return;
    setUserCarts([...userCarts, new_cart]);
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
    }, 1000);
    const disablee = storedCart.map((cart) => {
      return cart.id === id ? { ...cart, isclicked: true } : cart;
    });
    setStoredCart(disablee);
  };

  return (
    <div>
      <Navbar userCarts={userCarts} setIsopen={setIsopen} />
      <div>
        {isopen ? (
          <CheckOut
            storedCart={storedCart}
            setStoredCart={setStoredCart}
            setIsopen={setIsopen}
            userCarts={userCarts}
            setUserCarts={setUserCarts}
          />
        ) : (
          <Home handleAdd={handleAdd} Data={storedCart} notify={notify} />
        )}
      </div>
    </div>
  );
}

export default App;
