"use client";

import { useState } from "react";
import { UsersCredantials } from "../types";

export default function Register() {
  const [credentials, setCredentials] = useState<UsersCredantials>({
    email: "",
    password: "",
  });

  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        className="text-black"
        onChange={(e) =>
          setCredentials({
            email: e.target.value,
            password: credentials.password,
          })
        }
        required
      />
      <label htmlFor="password">Password</label>
      <input
        minLength={5}
        type="password"
        id="password"
        name="password"
        className="text-black"
        onChange={(e) =>
          setCredentials({
            email: credentials.email,
            password: e.target.value,
          })
        }
        required
      />
      <button
        className="border-solid border-2 rounded-md  pt-1 pb-1 pl-2 pr-2 m-2.5 hover:bg-white hover:text-slate-900 transition hover:duration-500"
        onClick={() => {
          // router.push("/login");
        }}
      >
        Send
      </button>
    </>
  );
}
