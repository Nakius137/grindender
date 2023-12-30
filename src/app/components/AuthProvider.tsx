"use client";

import { SessionProvider } from "next-auth/react";
import { AuthProviderProps } from "../types";

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
