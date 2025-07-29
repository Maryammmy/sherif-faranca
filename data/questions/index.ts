import {
  IFitnessLevel,
  IQuestion,
  ITime,
  IWorkoutFrequency,
} from "@/interfaces/questions";
import {
  Ban,
  Calendar1,
  CalendarFold,
  CalendarPlus,
  ScanFace,
} from "lucide-react";

export const genders: string[] = ["male", "female"];
export const areas: string[] = [
  "Arm",
  "Shoulder",
  "Chest",
  "Abs",
  "Leg",
  "Full Body",
];
export const goals: IQuestion[] = [
  { src: "lose-weight", label: "lose weight" },
  { src: "build-muscle", label: "build muscle" },
  { src: "keep-fit", label: "keep fit" },
];
export const shapes: IQuestion[] = [
  { src: "medium-body", label: "medium body" },
  { src: "fat-body", label: "fat body" },
  { src: "muscular-body", label: "muscular body" },
];
export const times: ITime[] = [
  { icon: ScanFace, label: "Right now" },
  { icon: CalendarFold, label: "<1 Year ago" },
  { icon: Calendar1, label: "1:3 Year ago" },
  { icon: CalendarPlus, label: "> 3 Year ago" },
  { icon: Ban, label: "Never" },
];
export const injuries: IQuestion[] = [
  { src: "none-injury", label: "none" },
  { src: "shoulder-injury", label: "shoulder" },
  { src: "wrist-injury", label: "wrist" },
  { src: "knee-injury", label: "knee" },
  { src: "ankle-injury", label: "ankle" },
  { src: "back-injury", label: "back" },
];
export const workoutFrequencies: IWorkoutFrequency[] = [
  {
    src: "calender-1",
    label: "I'm so busy, and would like to work out once in a while",
    value: 1,
  },
  {
    src: "calender-2",
    label: "I have free time, and would like to work but not much",
    value: 2,
  },
  {
    src: "calender-3",
    label: "I enjoy workout, and would like to make is part my life",
    value: 3,
  },
  {
    src: "calender-4",
    label: "More than better, and would like to make is part my life  ",
    value: 4,
  },
];
export const fitnessLevels: IFitnessLevel[] = [
  {
    src: "beginner",
    title: "beginner",
    description:
      "I'm so busy, and i,m new to fitness and would like to work out once in a while",
  },
  {
    src: "intermediate",
    title: "intermediate",
    description:
      "I'm enjoy workout, and would like to make is part my life work out",
  },
  {
    src: "advanced",
    title: "advanced",
    description:
      "I'm enjoy workout, more than better, and would like to make is part my life",
  },
];
export const workoutTime: string[] = [
  "In the morning",
  "In the evening",
  "I don’t mind the timing",
];
export const musicPreference: string[] = [
  "Pop",
  "Techno",
  "Electronic",
  "Chill out",
  "Bachata",
  "Arabic",
  "Alternative",
  "African",
  "R&B",
  "Romantic",
  "Hip-hop",
  "Latin",
  "Funk",
];
