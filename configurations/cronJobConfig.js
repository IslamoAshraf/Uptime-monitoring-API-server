import nodeCron from "node-cron";
import { createReport } from "../shared/createReport.js";

const cronJob = nodeCron.schedule(
    "0 */10 * * * *",
//   "*/50 * * * * *",
  // "*/1000 * * * * *",
  function job() {
    console.log(new Date().toLocaleString());
    createReport();
  },
  { scheduled: false }
);

export { cronJob };
