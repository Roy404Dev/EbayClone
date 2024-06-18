import React from "react";

const BannerTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="w-80">
      <span className={className}>{children}</span>
    </div>
  );
};

export default BannerTitle;
