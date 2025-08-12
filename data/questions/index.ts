import { IQuestionData, IWorkoutFrequency } from "@/interfaces/questions";

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
