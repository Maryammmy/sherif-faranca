import Banner from "@/components/main/home/Banner";
import DiscoverPrograms from "@/components/main/home/DiscoverPrograms";
import ClassicClass from "@/components/main/home/ClassicClass";
import RecentWatched from "@/components/main/home/RecentWatched";
import RecommendForYou from "@/components/main/home/RecommendForYou";
import SubscriptionPlans from "@/components/main/subscription/subscription-plans";
import SpecialOffer from "@/components/main/subscription/special-offer";

export default function HomePage() {
  return (
    <div className="space-y-2">
      <RecentWatched />
      <RecommendForYou />
      <ClassicClass />
      <Banner />
      <DiscoverPrograms />
      <SubscriptionPlans />
      <SpecialOffer />
    </div>
  );
}
