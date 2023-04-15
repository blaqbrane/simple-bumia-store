import React from "react";

const ItemList = ({handleAdd,data}) => {
    const{img,discount,price,id,isclicked,title} = data
  return (
    <>
      <div className="relative">
        <img
          src={img}
          alt="images"
          className="w-full h-full rounded object-contain"
        />
        {data.discount && (
          <p className="absolute top-[2px] right-[2px] text-[#F49867] text-sm p-1 rounded bg-white">
            -{discount}%{" "}
          </p>
        )}
      </div>
      <div className="p-1 rounded">
        <div>
          <h2 className="text-xs md:text-sm">{title}</h2>
          <div className="flex mt-2 items-center space-x-4 mb-2">
            {data.discount && (
              <h2 className="font-bold">
                ${price - Math.ceil(price / Number(discount))}
              </h2>
            )}
            <h2
              className={`${discount ? "line-through text-[gray]" : ""}`}
            >
              ${price}
            </h2>
          </div>
        </div>
        <div className="text-center">
          <button
            disabled={isclicked}
            onClick={() => handleAdd(data, data.id)}
            className="px-6 py-2 outline-none w-full font-bold text-[8px] bg-gradient-to-r from-[#F49867] to-pink-900  rounded text-white md:px-7 md:text-sm  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#F49867] hover:to-pink-900 hover:border border-[#F49867]"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemList;
