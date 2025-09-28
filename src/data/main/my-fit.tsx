import { IHabit, IRing } from "@/src/interfaces/main/my-fit";
import { Droplet, Footprints, Flame, Clock12 } from "lucide-react";
const baseScale = 1;
const spacing = 0.18;

export const rings: IRing[] = [
  { value: 90, color: "#FFD700", strokeWidth: 5, scale: baseScale },
  { value: 80, color: "#87CEFA", strokeWidth: 5, scale: baseScale - spacing },
  {
    value: 70,
    color: "#7CFC00",
    strokeWidth: 5,
    scale: baseScale - spacing * 2,
  },
];
export const habits: IHabit[] = [
  {
    title: "Water",
    value: "0.8",
    unit: "liters",
    goal: "Goal 2 Liters",
    icon: <Droplet className="text-blue-400" size={24} />,
  },
  {
    title: "Steps",
    value: "1.2k",
    unit: "steps",
    goal: "Goal 3K steps",
    icon: <Footprints className="text-green-400" size={24} />,
  },
  {
    title: "Duration",
    value: "1,45",
    unit: "hours",
    goal: "Goal 8 Hours",
    icon: <Clock12 className="text-gray-400" size={24} />,
  },
  {
    title: "Calories",
    value: "1700",
    unit: "kcal",
    goal: "Goal 250 Kcal",
    icon: <Flame className="text-orange-400" size={24} />,
  },
];
