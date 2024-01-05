"use client";

import { signOut } from "next-auth/react";
import Button from "../components/Button";
import HabitCardList from "../components/HabitCardList";

const Main = () => {
  return (
    <main className="w-screen text-center h-screen  pt-20">
      <HabitCardList />
      <Button
        style="border-solid border-2 rounded-md pt-1 pb-1 pl-2 pr-2 m-2.5 mt-10 hover:bg-white hover:text-slate-900 transition hover:duration-500"
        text="Log out"
        onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
      />
    </main>
  );
};

export default Main;
