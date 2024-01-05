"use client";
import { useState } from "react";
import { HabitCardProps } from "../types";
import { useRouter } from "next/navigation";

const HabitCard = ({ category }: HabitCardProps) => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const handleNavigateToTaskCreation = () => {
    const paramsObj = { category };
    const searchParams = new URLSearchParams(paramsObj);

    router.push(`/create?${searchParams}`);
  };
  return (
    <div
      onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
      onClick={() => handleNavigateToTaskCreation()}
      className="border rounded-xl font-mono text-5xl hover:cursor-pointer"
    >
      <p className="grid h-full place-content-center">
        {isActive ? "+" : category}
      </p>
    </div>
  );
};

export default HabitCard;
