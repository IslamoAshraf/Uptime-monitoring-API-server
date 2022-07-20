import { CronJob } from "cron";

import { createReportActions } from "../utilities/createReportActions.js";

const job = new CronJob("*/5 * * * * *", async function () {
  const start = performance.now();

  const time = new Date();
  console.log("AT", time);
  await createReportActions();

  const duration = performance.now() - start;
  console.log(duration);
});

export { job };
