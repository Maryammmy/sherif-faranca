import Banner from "@/components/main/home/Banner";
import DiscoverPrograms from "@/components/main/home/DiscoverPrograms";
import ClassicClass from "@/components/main/home/ClassicClass";
import RecentWatched from "@/components/main/home/RecentWatched";
import RecommendForYou from "@/components/main/home/RecommendForYou";
import SubscriptionPlans from "@/components/main/subscription/subscription-plans";
import SpecialOffer from "@/components/main/subscription/special-offer";
import NavigationBar from "@/components/main/home/navigation-bar";
import PrefetchHydrate from "@/components/query";
import { homeAPI } from "@/services/home";

export default function Home() {
  return (
    <div className="space-y-2">
      <NavigationBar />
      <PrefetchHydrate queryKey={["home"]} queryFn={homeAPI}>
        <RecentWatched />
        <RecommendForYou />
        <ClassicClass />
        <Banner />
        <DiscoverPrograms />
      </PrefetchHydrate>
      <SubscriptionPlans />
      <SpecialOffer />
    </div>
  );
}
