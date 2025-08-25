import Banner from "@/src/components/main/home/Banner";
import DiscoverPrograms from "@/src/components/main/home/DiscoverPrograms";
import ClassicClass from "@/src/components/main/home/ClassicClass";
import RecentWatched from "@/src/components/main/home/RecentWatched";
import RecommendForYou from "@/src/components/main/home/RecommendForYou";
import SubscriptionPlans from "@/src/components/main/subscription/subscription-plans";
import SpecialOffer from "@/src/components/main/subscription/special-offer";
import NavigationBar from "@/src/components/main/home/navigation-bar";
import PrefetchHydrate from "@/src/components/query";
import { homeAPI } from "@/src/services/queries/home";

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
