import React from "react";

const ShopByBrandItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-full w-[205px] cursor-pointer items-center justify-center bg-gray-100 p-4 align-middle hover:outline-2 hover:outline-gray-700 hover:outline hover:duration-300 ease-linear transition">
      {children}
    </div>
  );
};

export default ShopByBrandItem;
