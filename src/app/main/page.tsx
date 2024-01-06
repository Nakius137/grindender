"use client";

import { signOut } from "next-auth/react";
import Button from "../components/Button";
import GoalCardList from "../components/GoalCardList";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();
  return (
    <main className="w-screen text-center h-screen">
      <Button
        style="flex p-5 mr-auto font-mono text-3xl border-solid border-2 rounded-r-md hover:bg-white hover:text-slate-900 transition hover:duration-500"
        text="Your progress"
        onClick={async () => router.push("/progress")}
      />
      <GoalCardList />
      <Button
        text="Log out"
        onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
      />
    </main>
  );
};

export default Main;
