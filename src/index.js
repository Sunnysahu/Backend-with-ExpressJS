require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

const githubData = {
  login: "Sunnysahu",
  id: 56220228,
  node_id: "MDQ6VXNlcjU2MjIwMjI4",
  avatar_url: "https://avatars.githubusercontent.com/u/56220228?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Sunnysahu",
  html_url: "https://github.com/Sunnysahu",
  followers_url: "https://api.github.com/users/Sunnysahu/followers",
  following_url:
    "https://api.github.com/users/Sunnysahu/following{/other_user}",
  gists_url: "https://api.github.com/users/Sunnysahu/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Sunnysahu/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Sunnysahu/subscriptions",
  organizations_url: "https://api.github.com/users/Sunnysahu/orgs",
  repos_url: "https://api.github.com/users/Sunnysahu/repos",
  events_url: "https://api.github.com/users/Sunnysahu/events{/privacy}",
  received_events_url: "https://api.github.com/users/Sunnysahu/received_events",
  type: "User",
  site_admin: false,
  name: "Sunny Sahu",
  company: null,
  blog: "",
  location: "Jharkhand, India",
  email: null,
  hireable: null,
  bio: "Beginner",
  twitter_username: null,
  public_repos: 14,
  public_gists: 0,
  followers: 1,
  following: 0,
  created_at: "2019-10-06T10:11:01Z",
  updated_at: "2024-04-19T19:34:29Z",
};
app.get("/", (req, res) => {
  res.send("Hello World Sunny!!!");
});
//This is comment
app.get("/twitter", (req, res) => {
  res.send("<h1>Hello Twitter</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login </h1>");
});

app.get("/github", cors(), (req, res) => {
  res.json(githubData);
});

app.use(cors());
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
