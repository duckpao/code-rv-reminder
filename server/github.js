import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
  },
});

export async function getOpenPullRequests() {
  const { GITHUB_OWNER, GITHUB_REPO } = process.env;

  const res = await githubAPI.get(
    `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/pulls`,
    { params: { state: "open" } }
  );

  return res.data;
}
