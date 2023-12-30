import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="absolute top-1/3 left-1/3 w-1/4  m-auto border-solid border-2 rounded-md">
        {children}
      </main>
    </>
  );
}
