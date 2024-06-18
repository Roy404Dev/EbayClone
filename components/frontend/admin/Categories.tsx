"use client";
import { createClient } from "@/utils/supabase/client/client";
import React, { useState } from "react";
const Categories = () => {
  const [categoryName, setCategoryName] = useState("");
  const supabase = createClient();

  const handleAddCategory = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { error } = await supabase
      .from("categories")
      .insert({ label: categoryName });
    error && console.log(error);
  };

  return (
    <div>
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
    </div>
  );
};

export default Categories;
