"use client";
import { useState } from "react";
import { GoalCardProps } from "../types";
import { useRouter } from "next/navigation";

const GoalCard = ({ category }: GoalCardProps) => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const handleNavigateToGoalCreation = () => {
    const paramsObj = { category };
    const searchParams = new URLSearchParams(paramsObj);

    router.push(`/create?${searchParams}`);
  };
  return (
    <div
      onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
      onClick={() => handleNavigateToGoalCreation()}
      className="border rounded-xl font-mono text-5xl hover:cursor-pointer hover:bg-white hover:text-slate-900 transition hover:duration-500"
    >
      <p className="grid h-full place-content-center">
        {isActive ? "+" : category}
      </p>
    </div>
  );
};

export default GoalCard;
