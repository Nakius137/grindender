"use client";

import { useRouter } from "next/navigation";
import { UsersCredantials } from "../types";
import { useState } from "react";

export default function SignUp() {
  const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as unknown as UsersCredantials;

    await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setIsRegistered(true);
    setTimeout(() => {
      router.push("/main");
    }, 1500);
  };

  return (
    <>
      {isRegistered ? <div>User has been registered successfully</div> : null}
      <form
        action="/api/signup"
        method="POST"
        className="flex flex-col self-start justify-end p-10 text-center h-max"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className="text-black"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          minLength={5}
          type="password"
          id="password"
          name="password"
          className="text-black"
          required
        />
        <input
          type="submit"
          value="Sign in"
          className="border-solid border-2 rounded-md  pt-1 pb-1 pl-2 pr-2 m-2.5 hover:bg-white hover:text-slate-900 transition hover:duration-500"
        />
      </form>
    </>
  );
}
