import Modal from "@/src/components/ui/Modal";
import { useState } from "react";
import FaqItem from "./FaqItem";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const faqData = [
  {
    id: 1,
    question: "Alright, but what exactly do you do?",
    answer:
      "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
  },
  {
    id: 2,
    question:
      "I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?",
    answer: "Yes! We can assist with execution as well as strategy.",
  },
  {
    id: 3,
    question: "Are your rates competitive?",
    answer: "We tailor our rates to deliver value while staying competitive.",
  },
  {
    id: 4,
    question: "Why do you have a monthly project cap?",
    answer:
      "We cap projects monthly to ensure focus and quality delivery for every client.",
  },
];

function Faq({ open, onClose }: IProps) {
  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <Modal open={open} onClose={onClose} contentClassName="bg-[#F3F5F6]">
      <div className="bg-[#F3F5F6] max-h-[355.2px] overflow-y-auto">
        {faqData.map((item) => (
          <FaqItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </div>
    </Modal>
  );
}

export default Faq;
