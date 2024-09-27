
import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";
import Landing from "@/components/landing";

export default function Home() {
  return (
    <main>
      <Landing />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
    </main>
  );
}
