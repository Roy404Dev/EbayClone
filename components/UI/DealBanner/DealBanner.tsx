import React from "react";

export const DealBanner = ({
  children,
  bgClr,
}: {
  children: React.ReactNode;
  bgClr: string;
}) => {
  return (
    <div className={`mx-auto w-full max-w-7xl bg-[${bgClr}] px-4 py-8 rounded-2xl`}>{children}</div>
  );
};
