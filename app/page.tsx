import Banner from "../components/layout/Banner/Banner";
import Header from "../components/layout/Header/Header";
import Tabs from "@/components/layout/Tabs/Tabs";
import MainLayout from "@/components/layout/Main/MainLayout";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Header />
      <Tabs />
      {/* max-w-[90em] */}
      <MainLayout />
      <Footer />
    </div>
  );
}
