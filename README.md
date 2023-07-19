# simple-node-db
A simple webpage build with Node.js to display and modify a SQLite database.

## Getting started
If you want to develop locally you can just clone this repository and get started. But I have included two ways of running this in a Docker container if you prefer this (like me).

### Docker-Compose (recommended)
Clone this repository to your computer.
```
git clone https://github.com/brunobeeee/simple-node-db/
```

Navigate inside and run the Docker-Compose.
```
cd simple-node-db
docker-compose up -d
```

This should setup your Docker-Container and automatically run `npm run dev` to run the Website on `localhost:1234`. If you don't want this replace the last line of the Dockerfile with `CMD sleep infinity` before building the Docker-Image.
If you have the Docker Plugin installed in your VSCode click on "Remote-Explorer" on the left sidebar and click on the little arrow next to your container.

### Docker Dev Environment (GUI)
The `compose-dev.yaml` is written to create a Docker Dev Environment using the desktop client. For this go to `Dev Environments -> Create` and provide the URL to this repository. Now Docker sets up the container which you can then open in VSCode.

#### Starting the App
The Docker DevEnv does't setup everything for you. To be honest it does, but everythin gets wiped when opening the container in VSCode which is really unfortunate. So you have to run these two commands.
Load all `npm` packages.
```
npm i
```

Run the app in development.
```
npm run dev
```

This starts a `nodemon` server to show the webpage on `localhost:1234`. It simultaneously compiles the Bootstrap code and your local changes in `assets/scss/custom.scss` to the `public/css` and watches it. Meaning if you do changes to either the "Web Logic" or the SCSS it instantly gets compiled and shown in your browser.

## Structure

- Webpage templates are in `views/`.
- Backend Logic and Routing is in `server.js`.