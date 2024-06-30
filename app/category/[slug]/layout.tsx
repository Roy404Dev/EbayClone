import BannerLayout from "@/components/UI/Banner/BannerLayout";
import BannerSub from "@/components/UI/Banner/BannerSub";
import BannerTitle from "@/components/UI/Banner/BannerTitle";
import EffectButton from "@/components/UI/Buttons/EffectButton";
import Header from "@/components/layout/Header/Header";
import React, { useState } from "react";
import Aside from "./Aside";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import useSubCategoriesQuery from "@/hooks/func/use-subCategories-query";
import { createClient } from "@/utils/supabase/server/server";
import { cookies } from "next/headers";

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  const cookieStore = cookies();
  const client = createClient(cookieStore);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    useSubCategoriesQuery({ client: client, slug: params.slug }),
  );

  const bgProperties = {
    bgImage:
      "https://images.unsplash.com/photo-1606088295735-d8148a172c0b?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgPosition: "center",
    maxWidth: "95em",
  };

  // const store = useSelector((state: RootState) => state.category.value);

  return (
    <div className="mx-auto max-w-7xl">
      <Header></Header>
      <div className="grid grid-cols-[18%_minmax(900px,_1fr)]">
        <div className="col-span-2">
          <BannerLayout bgProperties={bgProperties} height="md" rounded={false}>
            <BannerTitle
              className="max-w-[90em] text-2xl font-bold"
              maxWidth="90"
            >
              Welcome to the world of tech
            </BannerTitle>
            <BannerSub className=" text-lg font-medium">
              Browse all the devices you need, from smartphones to PCs.
            </BannerSub>
          </BannerLayout>
        </div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Aside params={params} />
        </HydrationBoundary>
        <div className="">
          {/* main layout  */}
          <BannerLayout
            bgProperties={{
              bgImage:
                "https://images.unsplash.com/photo-1625463006115-09f08489f591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              bgPosition: "center",
            }}
            rounded={false}
          >
            <BannerTitle>Reconditioned tech</BannerTitle>
            <BannerSub>See the savings on refurb devices</BannerSub>
            <EffectButton buttonName="View the deal" theme="black" />
          </BannerLayout>
          {/* ===Shop by category==== */}
          <span>Shop by Category</span>
          <ul className=""></ul>
        </div>
      </div>
    </div>
  );
};

export default layout;
