import cron from "node-cron";
import { getOpenPullRequests } from "./github.js";
import { notify } from "./notifier.js";

cron.schedule("* * * * *", async () => {
  console.log("⏰ Checking pull requests...");

  try {
    const prs = await getOpenPullRequests();

    if (prs.length === 0) {
      console.log("✅ No open PRs");
      return;
    }

    prs.forEach(notify);
  } catch (err) {
    console.error("❌ Failed to fetch PRs");
    console.error(err.response?.data || err.message);
  }
});
