# swapi-vue-graphql-wrapper

## Background
This repository contains a VueJS UI and a `graphql` wrapepr for SwAPI(https://swapi.co). The UI will interact with the wrapper using `graphql` queries while the wrapper will be responsible for fetching the data from REST API and respond back as a `graphql` server.

The UI source code is inside `src` directory while the graphql wrapper is in `server` directory.

### How to run locally
To run this project locally on your computer, you will need `NodeJS` installed on your computer. First navigate to the root directory and run the following command to install all dependencies
```
npm install
```

Once all the dependencies are installed successfully, then you can run the following command to start both the UI and backend server concurrently.
```
npm run dev
```

Above mentioned command actually runs two separate `npm` scripts concurrently. One script is responsible for hosting the UI while the other will start the backend server which is actually a `graphql` wrapper for Swapi and frontend will interact with this backend using `graphql` queries.

Both the UI and backend server have hot reloading enabled by default, so if you will make any change in the source code, it will be available right away. You don't need to restart the scripts manually.

**Note:** Check `package.json` file's `scripts` section for more information.