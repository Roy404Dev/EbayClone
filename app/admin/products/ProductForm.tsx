"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client/client";

const ProductForm = () => {
  const [data, setData] = useState({
    product_name: "",
    category_id: 0,
  });
  const supabase = createClient();
  const session = useSession();
  const handleAddProduct = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if(session.data?.user?.id) {
      const { error } = await supabase.from("product").insert({
        product_name: data.product_name,
        category_id: data.category_id,
        user_id: session.data?.user.id
      });
      console.error(error);
    }
  };
  return (
    <div>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="product name"
          onChange={(e) => setData({ ...data, product_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="category id"
          onChange={(e) =>
            setData({ ...data, category_id: Number(e.target.value) })
          }
        />
        <button
          className="cursor-pointer rounded-xl bg-violet-500 px-3 py-2 font-[500] text-white"
          onClick={(e) => handleAddProduct(e)}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
