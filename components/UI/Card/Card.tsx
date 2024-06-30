// import { useRouter } from "next/navigation";
import React from "react";

export const Card = ({
  children,
  className,
  isLast,
  popularCategory,
}: {
  children: React.ReactNode;
  className: string;
  isLast: boolean;
  popularCategory: {
    id: number;
    image_url: string | null;
    label: string | null;
  };
}) => {
  // const router = useRouter();

  return (
    <div
      className={className + `${isLast ? " md:block hidden" : ""}`}
      // onClick={() =>
      //   router.push(`/category/${popularCategory.label?.toLocaleLowerCase()}/${popularCategory.id}`)
      // }
    >
      {children}
    </div>
  );
};
