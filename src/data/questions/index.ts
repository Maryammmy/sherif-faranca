import { IQuestionData, IWorkoutFrequency } from "@/src/interfaces/questions";

export const genders: string[] = ["male", "female"];
export const areas: string[] = [
  "Arm",
  "Shoulder",
  "Chest",
  "Abs",
  "Leg",
  "Full Body",
];
export const goals: IQuestionData[] = [
  { src: "lose-weight", label: "lose weight" },
  { src: "build-muscle", label: "build muscle" },
  { src: "keep-fit", label: "keep fit" },
];
export const workoutFrequencies: IWorkoutFrequency[] = [
  {
    src: "calender-1",
    label: "label1",
    value: 1,
  },
  {
    src: "calender-2",
    label: "label2",
    value: 2,
  },
  {
    src: "calender-3",
    label: "label3",
    value: 3,
  },
  {
    src: "calender-4",
    label: "label4",
    value: 4,
  },
];
