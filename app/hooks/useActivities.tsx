import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

export type Activity = {
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

  function insertActivity(steps: number, date: Date) {
    db.execSync(`INSERT INTO activities (steps, date) VALUES (${steps}, ${date.getTime()})`);
    reload();
  }

  function deleteActivity(id: number) {
    db.execSync(`DELETE FROM activities WHERE id = ${id};`);
    reload();
  }

  function deleteAllActivities() {
    db.execSync(`DELETE FROM activities;`);
    reload();
  }

  function reload() {
    const data = getActivities();
    setActivities(data);
  }

  useEffect(() => {
    reload();
  }, []);

  return { getActivities, activities, insertActivity, deleteActivity, deleteAllActivities };
}
