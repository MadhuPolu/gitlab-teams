# gitlab-teams

[![Build Status](https://travis-ci.com/chamerling/gitlab-teams.svg?branch=master)](https://travis-ci.com/chamerling/gitlab-teams)

View your defined Gitlab teams Merge Requests live-updated without effort i.e. the missing thing from Gitlab.

This project is only a frontend app based on Vue and RxJS. This is still a WIP: No error handling, no tests, etc, but it works pretty well for now.

At startup, you will be asked to fill a form with your `Personal Access Token` and a `GitLab URL`:

![settings](./doc/settings.png "Settings")

- `Personal Access Token` is the one you can get from your Gitlab instance under `/profile/personal_access_tokens`. Create a new one with at least `api` and `read_user` scopes.
- `Gitlab URL` is... your Gitlab instance URL. It is used to build the API endpoints to call.

These two settings are stored in your browser local storage and **are never sent to someone else than your Gitlab instance**.

Once set, you will be able to create and navigate in your teams like a boss 💪. Merge requests will update automatically, pipelines also, and soon you will have notifications and many more.

![team-create](./doc/team-create.png "Team Creation")

![teams-view](./doc/teams-view.png "Teams View")

![issues-view](./doc/issues-view.png "Issues View")

![todo-view](./doc/todo-view.png "Todo View")

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Deploy

App is deployed on https://chamerling.github.io/gitlab-teams with the help of gh-pages and with some little help from git worktree.
To deploy a new version:

1. `rm -fr dist/*`
2. `npm run build`
3. `cd dist`
4. `git add .`
5. `git commit -am 'VXYZ'`
6. `git push origin gh-pages`

## License

MIT
