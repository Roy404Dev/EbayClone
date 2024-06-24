import BannerLayout from "@/components/UI/Banner/BannerLayout";
import Aside from "@/components/layout/Aside/Aside";
import Header from "@/components/layout/Header/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header></Header>
      <div className="grid">
      {/* <BannerLayout></BannerLayout> */}
      <Aside />
      {/* <BannerLayout></BannerLayout> */}

      </div>

    </div>
  );
};

export default layout;
