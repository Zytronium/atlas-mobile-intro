import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

type Activity = {
  id: number;
  steps: number;
  date: number;
}

export default function useActivities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const db = useSQLiteContext();

  function getActivities() {
    return db.getAllSync<Activity>("SELECT * FROM activities");
  }

  useEffect(() => {
    const data = getActivities();
    setActivities(data);
  }, [])

  return { getActivities, activities };
}
