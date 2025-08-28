"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

interface IProps {
  value: number;
  color: string;
  strokeWidth: number;
  text?: string;
  textColor?: string;
  fontWeight?: number;
}

export default function CircularRing({
  value,
  color,
  strokeWidth,
  text,
  textColor = "white",
}: IProps) {
  return (
    <CircularProgressbar
      value={value}
      strokeWidth={strokeWidth}
      {...(text && { text })}
      styles={buildStyles({
        pathColor: color,
        trailColor: "#eee",
        strokeLinecap: "round",
        textColor: textColor,
      })}
    />
  );
}
