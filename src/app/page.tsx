export default function Home() {
  return (
    <main className=" w-screen text-center absolute top-1/3 ">
      <h1 className="italic text-xl w-1/2 m-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        quaerat similique voluptates omnis, voluptate animi.
      </h1>
      <button className="border-solid border-2 rounded-md pt-1 pb-1 pl-2 pr-2 m-2.5 hover:bg-white hover:text-slate-900 transition hover:duration-500">
        Sign Up
      </button>
      <button className="border-solid border-2 rounded-md pt-1 pb-1 pl-2 pr-2 m-2.5 hover:bg-white hover:text-slate-900 transition hover:duration-500">
        Sign in
      </button>
    </main>
  );
}
