"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "./Button";

const NavigationButtons = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/main");
  }

  return (
    <>
      <Button
        style="border-solid border-2 rounded-md pt-1 pb-1 pl-2 pr-2 m-2.5 hover:bg-white hover:text-slate-900 transition hover:duration-500"
        onClick={async () => router.push("/signup")}
        text="Sign Up"
      />
      <Button
        style="border-solid border-2 rounded-md pt-1 pb-1 pl-2 pr-2 m-2.5 hover:bg-white hover:text-slate-900 transition hover:duration-500"
        onClick={() =>
          signIn("email", { callbackUrl: "http://localhost:3000/main" })
        }
        text="Sign in"
      />
    </>
  );
};

export default NavigationButtons;
