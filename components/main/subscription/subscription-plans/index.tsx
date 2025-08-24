"use client";
import Modal from "@/components/ui/Modal";
import Header from "./Header";
import { useEffect, useState } from "react";
import SubscriptionPlanList from "./SubscriptionPlanList";
import PeriodFilters from "./PeriodFilters";

function SubscriptionPlans() {
  const [subscriptionPlansOpen, setSubscriptionPlansOpen] = useState(false);
  useEffect(() => {
    const alreadyOpened = sessionStorage.getItem("subscriptionPlansShown");

    if (!alreadyOpened) {
      setSubscriptionPlansOpen(true);
      sessionStorage.setItem("subscriptionPlansShown", "true");
    }
  }, []);
  return (
    <Modal
      open={subscriptionPlansOpen}
      onClose={() => setSubscriptionPlansOpen(false)}
      title={<Header />}
      contentClassName="lg:max-w-[900px]"
    >
      <div className="pt-1 sm:pt-6 space-y-5 sm:space-y-10 max-h-[70vh] overflow-y-auto">
        <PeriodFilters />
        <SubscriptionPlanList />
      </div>
    </Modal>
  );
}

export default SubscriptionPlans;
