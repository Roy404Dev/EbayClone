import { createClient } from "@/utils/supabase/server/server";
import { cookies } from "next/headers";
import React from "react";
import ShopByBrandItem from "./ShopByBrandItem";
import Image from "next/image";

export const revalidate = 60;

const ShopByBrand = async () => {
  const cookieStore = cookies();
  const client = createClient(cookieStore);
  const { data: shopByBrand } = await client
    .from("brands")
    .select()
    .neq("brand_image_url", null);
  return (
    <section>
      <span className="text-2xl font-semibold">Shop by Brand</span>
      <ul className="grid grid-cols-5 gap-16 mt-8">
        {shopByBrand?.map((el) => (
          <li key={el.id} className="text-center">
            <ShopByBrandItem>
              <Image
                alt={el.brand_name + " logo"}
                height={205}
                width={205}
                src={el.brand_image_url || ""}
              />
            </ShopByBrandItem>
            <span>{el.brand_name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShopByBrand;