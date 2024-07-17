"use client";
import { increment } from "@/app/redux/features/categories/categorySlice";
import Link from "next/link";
import useSubCategoriesQuery from "@/hooks/func/use-subCategories-query";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import useSupabaseBrowser from "@/utils/supabase-browser";
import useCategoryBrandsQuery from "@/hooks/queries/categoryBrands/use-categoryBrands-query";
const Aside = ({ params }: { params: { slug: string } }) => {
  const dispatch = useDispatch();
  const client = useSupabaseBrowser();

  const { data: subCategories } = useQuery(
    useSubCategoriesQuery({ client: client, slug: params.slug }),
  );

  let ranEffect = true;
  useEffect(() => {
    subCategories && dispatch(increment(subCategories));
    return () => {
      ranEffect = false;
    };
  }, [subCategories]);

  const { data: categoryBrands } = useCategoryBrandsQuery(
    params.slug.toLocaleLowerCase(),
  );

  return (
    <div className="hidden lg:block">
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
      <ul>
        {categoryBrands &&
          categoryBrands.map((categoryBrand) => (
            <>
              {/* If categoryBrands doesnt exist then "Your favorite brands should be showed" */}
              <span className="text-sm font-bold">Your favorite brands</span>
              <li key={categoryBrand.id}>
                <Link
                  href={`/categories/${categoryBrand.brand_name}`}
                  className="text-sm text-gray-700 hover:underline"
                >
                  {categoryBrand.brand_name}
                </Link>
              </li>
            </>
          ))}
      </ul>
    </div>
  );
};

export default Aside;
