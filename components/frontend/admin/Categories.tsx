"use client";
import { createClient } from "@/utils/supabase/client/client";
import React, { useState } from "react";
const Categories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryInputData, setSubCategoryInputData] = useState({
    category_id: 0,
    label: "",
  });
  const supabase = createClient();
  const handleAddCategory = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { error } = await supabase
      .from("categories")
      .insert({ label: categoryName });
    error && console.log(error);
  };

  const handleAddSubCategory = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { error } = await supabase
      .from("subCategories")
      .insert(subCategoryInputData);
    error && console.error(error);
  };

  return (
    <div className="grid items-center gap-2 ">
      <form className="flex gap-4">
        <input
          type="text"
          placeholder="category name"
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button
          className="cursor-pointer rounded-xl bg-violet-500 px-3 py-2 font-[500] text-white"
          onClick={(e) => handleAddCategory(e)}
        >
          Add
        </button>
      </form>
      <form className="flex gap-4 items-center">
        <span>Add SubCategory</span>
        <input
          type="text"
          name="label"
          placeholder="Add label"
          required
          aria-labelledby="submit-btn"
          onChange={(e) => setSubCategoryInputData({...subCategoryInputData, label: e.target.value})}
        />
        <input
          type="text"
          name="category_id"
          placeholder="Add category_id"
          required
          aria-labelledby="submit-btn"
          onChange={(e) => setSubCategoryInputData({...subCategoryInputData, category_id: Number(e.target.value)})}
        />
        <button
          id="submit-btn"
          className="cursor-pointer rounded-xl bg-violet-500 px-3 py-2 font-[500] text-white"
          onClick={handleAddSubCategory}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Categories;
