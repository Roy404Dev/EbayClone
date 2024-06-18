import React from "react";

const CardTitle = ({ children }: { children: string }) => {
  return (
    <span className='relative cursor-pointer font-semibold after:absolute after:-bottom-3 after:left-0 after:hidden after:h-[2px] after:w-full after:bg-black after:content-[""] hover:after:block'>
      {children}
    </span>
  );
};

export default CardTitle;
