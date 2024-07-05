import React from "react";

const ShopByBrandItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-full w-full cursor-pointer items-center justify-center bg-gray-100 py-6 align-middle transition ease-linear hover:outline hover:outline-2 hover:outline-gray-700 hover:duration-300">
      {children}
    </div>
  );
};

export default ShopByBrandItem;
