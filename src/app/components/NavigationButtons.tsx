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
      <Button onClick={async () => router.push("/signup")} text="Sign Up" />
      <Button
        onClick={() =>
          signIn("email", { callbackUrl: "http://localhost:3000/main" })
        }
        text="Sign in"
      />
    </>
  );
};

export default NavigationButtons;
