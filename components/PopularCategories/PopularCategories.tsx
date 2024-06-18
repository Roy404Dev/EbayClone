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
    <div className="mx-auto max-w-7xl px-8 lg:px-0">
      <span className="text-2xl font-[700]">Explore Popular Categories</span>
      <div className="flex gap-4 overflow-x-scroll lg:overflow-x-hidden mt-8">
        {popularCategories?.map((popularCategory) => (
          <Card className="relative cursor-pointer text-center">
            <CardImage>
              <Image
                alt="category image"
                src={popularCategory.image_url || ""}
                width={190}
                height={190}
                className="cursor-pointer rounded-full sm:min-h-24 sm:min-w-24"
              />
            </CardImage>
            <CardTitle>{popularCategory.label || ""}</CardTitle>
          </Card>
        ))}
        {/* <Card className="relative text-center">
          <CardImage>
            <Image
              alt="category image"
              src="https://ir.ebaystatic.com/cr/v/c01/01_PopularDestination_Luxury.jpg"
              width={160}
              height={160}
              className="cursor-pointer rounded-full sm:min-h-24 sm:min-w-24"
            />
          </CardImage>
          <CardTitle>Luxury</CardTitle>
        </Card>
        <Card className="relative text-center">
          <CardImage>
            <Image
              alt="category image"
              src="https://ir.ebaystatic.com/cr/v/c01/01_PopularDestination_Luxury.jpg"
              width={160}
              height={160}
              className="cursor-pointer rounded-full sm:min-h-24 sm:min-w-24"
            />
          </CardImage>
          <CardTitle>Luxury</CardTitle>
        </Card>
        <Card className="relative text-center">
          <CardImage>
            <Image
              alt="category image"
              src="https://ir.ebaystatic.com/cr/v/c01/01_PopularDestination_Luxury.jpg"
              width={160}
              height={160}
              className="cursor-pointer rounded-full sm:min-h-24 sm:min-w-24"
            />
          </CardImage>
          <CardTitle>Luxury</CardTitle>
        </Card>
        <Card className="relative text-center">
          <CardImage>
            <Image
              alt="category image"
              src="https://ir.ebaystatic.com/cr/v/c01/01_PopularDestination_Luxury.jpg"
              width={160}
              height={160}
              className="cursor-pointer rounded-full sm:min-h-24 sm:min-w-24"
            />
          </CardImage>
          <CardTitle>Luxury</CardTitle>
        </Card>
        <Card className="relative text-center">
          <CardImage>
            <Image
              alt="category image"
              src="https://ir.ebaystatic.com/cr/v/c01/01_PopularDestination_Luxury.jpg"
              width={160}
              height={160}
              className="cursor-pointer rounded-full sm:min-h-24 sm:min-w-24"
            />
          </CardImage>
          <CardTitle>Luxury</CardTitle>
        </Card>
        <Card className="relative text-center">
          <CardImage>
            <Image
              alt="category image"
              src="https://ir.ebaystatic.com/cr/v/c01/01_PopularDestination_Luxury.jpg"
              width={160}
              height={160}
              className="cursor-pointer rounded-full sm:min-h-24 sm:min-w-24"
            />
          </CardImage>
          <CardTitle>Lux</CardTitle>
        </Card>
        <Card className="relative text-center">
          <CardImage>
            <Image
              alt="category image"
              src="https://ir.ebaystatic.com/cr/v/c01/01_PopularDestination_Luxury.jpg"
              width={160}
              height={160}
              className="cursor-pointer rounded-full sm:min-h-24 sm:min-w-24"
            />
          </CardImage>
          <CardTitle>Luxury</CardTitle>
        </Card> */}
      </div>
    </div>
  );
};

export default PopularCategories;
