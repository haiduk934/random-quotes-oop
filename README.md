# Random Quotes OOP with API

Welcom to the Random Quotes app!
This project consist of a client-side Vanila JavaScript app and server-side Express Node.js app.

## Running the App in Develepment Mode

### Run server

1. Novigate to the root directory of the project.
2. Open new terminal window.
3. Change directory to the server subfolder
   `cd server`
4. Install server dependencies by running the following comand:
   `npm install --prefix server`
5. Run server in the development mode with hot reload feature:
   `npm run dev`
6. Server will be runing `http://localhost:3000`

### Run client

1. Open new terminal window in the root of the project.
2. Run client in the development mode with hot reload:
   `npx live-server client`
3. Client will be runing `http://localhost:8080`

## Running the App in Production Mode

### Run server

1. Novigate to the root directory of the project.
2. Open new terminal window.
3. Change directory to the server subfolder
   `cd server`
4. Install server dependencies by running the following comand:
   `npm install --prefix server`
5. Run server in the production mode:
   `npm start`
6. Configure hostig server where you run application to forward all requests to the http://localhost:3000
7. Get assigned by the hosting provider URL for you backend API server. For example `http://random-quotes-api.com`

### Run client

1. There is no need to build the client as it already contains HTML, CCS and JS files.
2. In the `client\src\config.js` replace `http://localhost:3000` with URL assigned to the server API in the step 7. in the previous section. For example `http://random-quotes-api.com`
3. Host all client files from `client` subfolder on the public web server
4. Get assigned by the hosting provider URL for you client frontend application.
   For example `http://random-quotes-frontend.com`
5. Open `http://random-quotes-frontend.com` on the web browser
