"use client";

import React, { useEffect } from "react";
import { Card } from "../UI/Card/Card";
import CardTitle from "../UI/Card/CardTitle";
import CardImage from "../UI/Card/CardImage";
import Image from "next/image";
import usePopularCategoriesQuery from "@/hooks/queries/use-popular-categories-query";

const PopularCategories = () => {
  const {
    data: popularCategories,
    isLoading,
    isError,
  } = usePopularCategoriesQuery();

  return (
    <div className=" mx-auto max-w-7xl">
      <span className="text-2xl font-[700]">Explore Popular Categories</span>
      {/* //flex gap-4 overflow-x-scroll lg:overflow-x-hidden mt-8 */}
      <div className="lg:flex-nowrap  xl:overflow-x-hidden md:flex mt-8 grid grid-flow-row grid-cols-3 gap-4 overflow-x-scroll last:in-range:hidden ">
        {popularCategories?.map((popularCategory, index) => (
          <Card
            className="relative min-h-20 min-w-20 max-w-40 cursor-pointer text-center"
            key={popularCategory.id}
            isLast={index === popularCategories.length - 1}
          >
            <CardImage>
              <Image
                alt="category image"
                src={popularCategory.image_url || ""}
                width={190}
                height={190}
                className="min-h-20 min-w-20 cursor-pointer rounded-full"
              />
            </CardImage>
            <CardTitle>{popularCategory.label || ""}</CardTitle>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
