# simple-node-db
A simple webpage build with Node.js to display and modify a SQLite database.

## Getting started

### Docker Dev Environment
The `compose-dev.yaml` is written to create a Docker Dev Environment using the desktop client. For this go to `Dev Environments -> Create` and provide the URL to this repository. Now Docker sets up the container which you can then open in VSCode.

### Starting the App
Load all `npm` packages.
```
npm i
```

Create a database.
```
touch database.db
```

Run the app in development.
```
npm run dev
```

This starts a `nodemon` server to show the webpage on `localhost:1234`. It simultaneously compiles the Bootstrap code and your local changes in `assets/scss/custom.scss` to the `public/css` and watches it. Meaning if you do changes to either the "Web Logic" or the SCSS it instantly gets compiled and shown in your browser.

### Structure

- Webpage templates are in `views/`.
- Backend Logic and Routing is in `server.js`.