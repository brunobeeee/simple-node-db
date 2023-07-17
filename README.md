# simple-node-db
A simple webpage build with Node.js to display and modify a SQLite database.

## Getting started
- Webpage templates are in `views/`.
- Backend Logic and Routing is in `server.js`.

To run the testsever do:
```
npm run dev
```

This starts a `nodemon` server to show the webpage on `localhost:1234`. It simultaneously compiles the Bootstrap code and your local changes in `assets/scss/custom.scss` to the `public/css` and watches it. Meaning if you do changes to either the "Web Logic" or the SCSS it instantly gets compiled and shown in your browser.