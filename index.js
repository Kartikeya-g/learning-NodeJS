require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "Kartikeya-g",
  "id": 81621960,
  "node_id": "MDQ6VXNlcjgxNjIxOTYw",
  "avatar_url": "https://avatars.githubusercontent.com/u/81621960?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Kartikeya-g",
  "html_url": "https://github.com/Kartikeya-g",
  "followers_url": "https://api.github.com/users/Kartikeya-g/followers",
  "following_url": "https://api.github.com/users/Kartikeya-g/following{/other_user}",
  "gists_url": "https://api.github.com/users/Kartikeya-g/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Kartikeya-g/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Kartikeya-g/subscriptions",
  "organizations_url": "https://api.github.com/users/Kartikeya-g/orgs",
  "repos_url": "https://api.github.com/users/Kartikeya-g/repos",
  "events_url": "https://api.github.com/users/Kartikeya-g/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Kartikeya-g/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-03-30T10:16:39Z",
  "updated_at": "2023-10-15T13:23:22Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('Login or signup')
})

app.get('/twitter', (req, res) => {
  res.send('Kartikcallingkartik')
})

app.get('/githubData', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})