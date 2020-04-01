import { CronJob } from "cron";

let n = 1;

const job = new CronJob("* * * * * *", () => {
  console.log(
    `This message will print every second.\nThis has printed ${n} times.\n`
  );
  n++;
});

job.start();
