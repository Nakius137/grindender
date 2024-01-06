import GoalCard from "./GoalCard";
import { v4 as uuidv4 } from "uuid";

const GoalCardList = () => {
  const timestamp = ["Day", "Week", "Month"] as const;
  return (
    <div className="grid grid-cols-3 w-4/5 m-auto h-3/5 gap-3 mt-20">
      {timestamp.map((timestampCategory) => {
        return <GoalCard key={uuidv4()} category={timestampCategory} />;
      })}
    </div>
  );
};

export default GoalCardList;
