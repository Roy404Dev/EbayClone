import React from "react";

export const DealBanner = ({
  children,
  bgClr,
}: {
  children: React.ReactNode;
  bgClr: string;
}) => {
  return (
    <div
      className={`mx-auto w-full max-w-7xl ${bgClr} rounded-2xl px-4 py-8`}
    >
      {children}
    </div>
  );
};
