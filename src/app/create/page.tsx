"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "../components/Button";

const Create = () => {
  const queryParams = useSearchParams();
  const router = useRouter();

  const taskTimestamp = queryParams.get("category");
  return (
    <>
      <div className="h-screen">
        <Button text="Back" onClick={async () => router.back()} />
        <div className="text-black text-center border w-1/3 flex mr-auto ml-auto align-middle">
          <form method="POST" className="w-screen">
            <div className="text-white text-2xl">
              Goal category: {taskTimestamp}
            </div>
            <div>
              <label htmlFor="title">
                <span className="text-white">Title: </span>
                <input
                  className="rounded mt-2.5 mb-2.5 "
                  type="text"
                  id="title"
                  name="title"
                />
              </label>
            </div>
            <div>
              <label htmlFor="description">
                <span className="text-white">Description: </span>
                <textarea
                  className="mt-2.5 mb-2.5 rounded w-1/2 align-middle"
                  id="description"
                  name="description"
                />
              </label>
            </div>
            <div>
              <label htmlFor="priority">
                <span className="text-white">Priority: </span>
                <select
                  className="rounded mt-2.5 mb-2.5"
                  name="priority"
                  id="priority"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="deadline">
                <span className="text-white">For next: </span>
                <input
                  className="rounded w-12 text-center"
                  min={1}
                  type="number"
                  id="deadline"
                  name="deadline"
                />
              </label>
              <span className="text-white"> {taskTimestamp}'s</span>
            </div>
            <Button
              style="text-white border-solid border-2 rounded-md pt-1 pb-1 pl-2 pr-2 m-2.5 mt-10 hover:bg-white hover:text-slate-900 transition hover:duration-500"
              text="Add"
              onClick={async () => console.log("test")}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
