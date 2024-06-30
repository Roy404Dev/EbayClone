import Banner from "../components/layout/Banner/Banner";
import Header from "../components/layout/Header/Header";
import Tabs from "@/components/layout/Tabs/Tabs";
import MainLayout from "@/components/layout/Main/MainLayout";
import Footer from "@/components/layout/Footer/Footer";
export default async function Home() {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <Header />
      <Tabs />
      <MainLayout />
      <Footer />
    </div>
  );
}
