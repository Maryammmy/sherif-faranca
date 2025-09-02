import Banner from "./Banner";
import DiscoverPrograms from "./DiscoverPrograms";
import ClassicClass from "./ClassicClass";
import RecentWatched from "./RecentWatched";
import RecommendForYou from "./RecommendForYou";
import SubscriptionPlans from "./subscription/subscription-plans";
import SpecialOffer from "./subscription/special-offer";
import NavigationBar from "./navigation-bar";

export default function Home() {
  return (
    <div className="space-y-2">
      <NavigationBar />
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
