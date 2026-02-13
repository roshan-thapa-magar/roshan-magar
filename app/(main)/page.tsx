import BannerSlider from "@/components/BannerSlider";
import BestSellingItems from "@/components/MainPage/BestSellingItems";
import ComboMeal from "@/components/MainPage/ComboMeal";

export default function Page() {
  return <div>
    <BannerSlider />
    <ComboMeal/>
    <BestSellingItems/>
  </div>;
}
