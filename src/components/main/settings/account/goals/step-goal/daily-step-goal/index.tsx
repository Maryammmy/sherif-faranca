"use client";

import Modal from "@/src/components/ui/Modal";
import { useTranslations } from "next-intl";
import DailyStepGoal from "./DailyStepGoal";

interface IProps {
  open: boolean;
  onClose: () => void;
}

export default function DailyStepGoalModal({ open, onClose }: IProps) {
  const t = useTranslations("step.todayStepGoal.dailyStepGoal");

  return (
    <Modal
      open={open}
      onClose={onClose}
      contentClassName="md:max-w-xs"
      title={t("title")}
      titleClassName="font-semibold text-gray-600 text-start"
    >
      <DailyStepGoal onClose={onClose} />
    </Modal>
  );
}
