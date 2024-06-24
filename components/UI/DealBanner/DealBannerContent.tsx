import React from "react";

export const DealBannerContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="md:items-center md:flex-row flex flex-col justify-between">
      {children}
    </div>
  );
};
