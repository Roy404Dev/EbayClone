import { createClient } from "@/utils/supabase/server/server";
import { cookies } from "next/headers";
import React from "react";

const Products = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: products } = await supabase.from("product").select();
  console.log(products);
  return (
    <div>
      <ul>{products?.map((product) => <li>{product.product_name}</li>)}</ul>
    </div>
  );
};

export default Products;
