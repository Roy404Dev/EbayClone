"use client";
import { increment } from "@/app/redux/features/categories/categorySlice";
import Link from "next/link";
import useSubCategoriesQuery from "@/hooks/func/use-subCategories-query";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import useSupabaseBrowser from "@/utils/supabase-browser";
const Aside = ({params}: {params: {slug: string}}) => {
  const dispatch = useDispatch();
  const client = useSupabaseBrowser();
  const { data: subCategories } = useQuery(useSubCategoriesQuery({client: client, slug: params.slug}));
  console.log(subCategories);
  let ranEffect = true;
  useEffect(() => {
    subCategories && dispatch(increment(subCategories));
    return () => {
      ranEffect = false;
    };
  }, [subCategories]);
  return (
    <div>
      <span className="text-sm font-bold">Shop by Category</span>
      <ul>
        {subCategories &&
          subCategories.map((subCategory) => (
            <li key={subCategory.id}>
              <Link href="#" className="text-sm text-gray-700 hover:underline">
                {subCategory.label?.replace(/[_]/g, " & ").replace(/[-]/g, " ")}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Aside;
