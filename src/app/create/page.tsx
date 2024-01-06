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
        <div className="text-black border w-1/3 flex mr-auto ml-auto align-middle">
          <form method="POST">
            <div className="text-white">Goal category: {taskTimestamp}</div>
            <div>
              <label htmlFor="title">
                <span className="text-white">Title: </span>
                <input type="text" id="title" name="title" />
              </label>
            </div>
            <div>
              <label htmlFor="description">
                <span className="text-white">Description: </span>
                <textarea id="description" name="description" />
              </label>
            </div>
            <div>
              <label htmlFor="priority">
                <span className="text-white">Priority: </span>
                <select name="priority" id="priority">
                  <option value="low">low</option>
                  <option value="medium">medium</option>
                  <option value="high">high</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="deadline">
                <span className="text-white">Deadline: </span>
                <input type="date" id="deadline" name="deadline" />
              </label>
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
