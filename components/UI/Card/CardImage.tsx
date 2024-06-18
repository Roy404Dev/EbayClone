import React from "react";

const CardImage = ({ children }: { children: React.ReactNode }) => {
  return <div className="hover:brightness-95">{children}</div>;
};

export default CardImage;

