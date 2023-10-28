"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Buttons() {
  const router = useRouter();
  return (
    <>
      <button
        className="border-solid border-2 rounded-md pt-1 pb-1 pl-2 pr-2 m-2.5 hover:bg-white hover:text-slate-900 transition hover:duration-500"
        onClick={() => router.push("/register")}
      >
        Sign Up
      </button>
      <button
        className="border-solid border-2 rounded-md pt-1 pb-1 pl-2 pr-2 m-2.5 hover:bg-white hover:text-slate-900 transition hover:duration-500"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
