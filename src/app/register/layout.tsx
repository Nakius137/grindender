import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="absolute top-1/3 left-1/3 w-1/4  m-auto border-solid border-2 rounded-md">
        <form
          action={"../api/signup"}
          method="POST"
          className="flex flex-col self-start justify-end p-10 text-center h-max"
        >
          {children}
        </form>
      </main>
    </>
  );
}
