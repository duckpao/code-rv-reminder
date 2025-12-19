export function notify(pr) {
  console.log("🔔 PR needs review");
  console.log(`Title : ${pr.title}`);
  console.log(`Author: ${pr.user.login}`);
  console.log(`URL   : ${pr.html_url}`);
  console.log("---------------------------");
}
