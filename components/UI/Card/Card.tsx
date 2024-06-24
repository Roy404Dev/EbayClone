import React from "react";

export const Card = ({
  children,
  className,
  isLast,
}: {
  children: React.ReactNode;
  className: string;
  isLast: boolean;
}) => {
  return (
    <div className={className + `${isLast ? " hidden md:block" : ""}`}>
      {children}
    </div>
  );
};
