# Slack Clone React Frontend

- [Youtube Playlist](https://www.youtube.com/playlist?list=PLN3n1USn4xlkdRlq3VZ1sT6SGW0-yajjL)

### [Video #6 Part #4 Basic Setup: Setting Up React with GraphQL](https://www.youtube.com/watch?v=jDvOauhkEOM&list=PLN3n1USn4xlkdRlq3VZ1sT6SGW0-yajjL&index=7&t=0s)

- install [create-react-app](https://github.com/facebook/create-react-app) by `npm i -g create-react-app` or use it directly via `npx`
- if installed through npm, create a react app => `create-react-app slack-clone-client` in project directory
- OR use npx directly => `npx create-react-app slack-clone-client`
- This will create a project folder `slack-clone-client`, cd into it and run intial server => `npm start` => [http://localhost:3000](http://localhost:3000)
- [creates issues by installing eslint latest version whicch goes against create-react-app version] `npx eslint --init` => style, esm, react, no, browser, guide, airbnb, JavaScript
  - `npx install-peerdeps --dev eslint-config-airbnb`
- remove App.css, App.test.js, index.css, logo.svg, setupTests.js
- self: add .prettierrc file with configurations
- create `routes` folder and add `index.js` in it
- npm i
  - [DEPRECATED] `react-apollo` - do not install now
  - [`@apollo/client`](https://www.apollographql.com/docs/react/get-started/)
  - `graphql` - for parsing all graphql logic
  - `react-router-dom` - for basic routing
- New starter for apollo/client [https://www.apollographql.com/docs/react/get-started/](https://www.apollographql.com/docs/react/get-started/)
- Part of apollo graphql query is deprecated and new way is : [https://www.apollographql.com/docs/react/data/queries/](https://www.apollographql.com/docs/react/data/queries/)
