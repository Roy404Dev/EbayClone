import { createClient } from "@/utils/supabase/server/server";
import { cookies } from "next/headers";
import React from "react";
import ShopByBrandItem from "./ShopByBrandItem";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 360;

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
      <ul className="mt-8 grid grid-cols-5 gap-8">
        {shopByBrand?.map((el) => (
          <li key={el.id} className="text-center">
            <Link href={`/categories/${el.brand_name}`}>
              <ShopByBrandItem>
                <Image
                  alt={el.brand_name + " logo"}
                  height={120}
                  width={120}
                  src={el.brand_image_url || ""}
                />
              </ShopByBrandItem>
              <span>{el.brand_name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShopByBrand;
