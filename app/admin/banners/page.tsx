"use client";
import { BannerCard } from "@/components/frontend/admin/Banner/BannerCard/BannerCard";
import useCategoriesQuery from "@/hooks/queries/categories/use-categories-query";
import useBannersQuery from "@/hooks/queries/use-banners-query";
import useSupabaseBrowser from "@/utils/supabase-browser";
import React, { useState } from "react";

type selectedParamType = {
  category_id: null | number;
  subCategory_id: null | number;
};

const page = () => {


  const client = useSupabaseBrowser();
  const [selectedParam, setSelectedParam] = useState<selectedParamType>({
    category_id: 3,
    subCategory_id: null,
  });

  const { data: banners } = useBannersQuery();
  const { data: categories } = useCategoriesQuery();


  //Filtering banners and making sure id passed isn't null
  const filteredBanners = banners?.filter((banner) => {
    const {
      category_id: bannerCategoryId,
      subCategory_id: bannerSubCategoryId,
    } = banner;
    return (
      (selectedParam.category_id != null &&
        selectedParam.category_id === bannerCategoryId) ||
      (selectedParam.subCategory_id != null &&
        selectedParam.subCategory_id === bannerSubCategoryId)
    );
  });
  //TODO
  return (
    <div className="mx-4">
      <div className="my-4">
        <select name="selectCategory" id="" className="cursor-pointer">
          {/* loop over elements */}
          <option value="">Select Category</option>
          {categories?.map((category) => (
            <option value="" key={category.id}>
              {category.label}
            </option>
          ))}
        </select>
        <select name="selectSubCategory" id="" className="cursor-pointer">
          <option value="">Select Subcategory</option>
        </select>
        <select name="selectCarousel" id="" className="cursor-pointer">
          <option value="">Select carousel</option>
        </select>
      </div>
      <div className="">
        {filteredBanners?.map((banner) => (
          <BannerCard image_path={banner.backgroundImage_url} title={banner.heading}/>
        ))}
      </div>
    </div>
  );
};

export default page;
