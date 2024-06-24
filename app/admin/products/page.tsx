import React from "react";
import ProductForm from "./ProductForm";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import getCategories from "@/hooks/func/get-categories";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import Products from "./Products";
import { createClient } from "@/utils/supabase/server/server";
const productPage = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const queryClient = new QueryClient();
  await prefetchQuery(queryClient, getCategories(supabase));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex max-h-screen w-full justify-between px-4 pt-4">
        <div className="grid">
          <span>Product List</span>
          <Products />
          <ProductForm />
        </div>
        <pre className="overflow-y-scroll">
          {/* {JSON.stringify(categories, null, 2)} */}
        </pre>
      </div>
    </HydrationBoundary>
  );
};

export default productPage;
