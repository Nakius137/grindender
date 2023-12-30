"use client";

import { signOut } from "next-auth/react";
import Button from "../components/Button";

const Main = () => {
  return (
    <>
      <Button
        style="border-solid border-2 rounded-md pt-1 pb-1 pl-2 pr-2 m-2.5 hover:bg-white hover:text-slate-900 transition hover:duration-500"
        text="Log out"
        onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
      />
    </>
  );
};

export default Main;
