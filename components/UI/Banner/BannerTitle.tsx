import React from "react";

const BannerTitle = ({
  children,
  className,
  maxWidth,
}: {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}) => {
  return (
    <div className={`w-full ${maxWidth ? `max-w-[${maxWidth}]` : "max-w-80"}`}>
      <span className={className + ' font-bold text-3xl'}>{children}</span>
    </div>
  );
};

export default BannerTitle;
