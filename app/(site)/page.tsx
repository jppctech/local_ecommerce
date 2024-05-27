import { CarouselHome } from "@/components/component/carousel ";
import BestProductsSection from "./_components/best_products";
import ShopFreshFood from "./_components/shop_fresh_food";
import HotDeals from "./_components/hot_deals";
import ShopByCategory from "./_components/shop_by_category";
import Footer from "./_components/footer";
import CopyRight from "./_components/copyright";
import Header from "./_components/header";

export default function HomeDashboard() {
  return (
    <div className="flex flex-col w-full">
      <Header/>
      <div className="">
        <CarouselHome/> 
      </div>
      <BestProductsSection/>
      <ShopFreshFood/>
      <HotDeals/>
      <ShopByCategory/>
      <Footer/>
      <CopyRight/>
    </div>
  );
}