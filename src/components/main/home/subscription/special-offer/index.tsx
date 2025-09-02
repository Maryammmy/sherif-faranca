"use client";
import Modal from "@/src/components/ui/Modal";
import Header from "./Header";
import { useState } from "react";
import Content from "./Content";

function SpecialOffer() {
  const [specialOfferOpen, setSpecialOfferOpen] = useState(false);
  return (
    <Modal
      open={specialOfferOpen}
      onClose={() => setSpecialOfferOpen(false)}
      title={<Header />}
      contentClassName="lg:max-w-[700px]"
    >
      <Content />
    </Modal>
  );
}

export default SpecialOffer;
