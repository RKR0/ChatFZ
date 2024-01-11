# ChatFZ

ChatFZ is a Full Stack Realtime Chatting Web Application that utilizes Socket.io for real-time communication and securely stores user details in encrypted format in a MongoDB Database.

## Tech Stack

- **Client:** React JS
- **Server:** Node JS, Express JS
- **Database:** MongoDB


## Run Locally

### Clone the project

```bash
git clone https://github.com/RKR0/ChatFZ.git
```

### Go to the project directory

```bash
cd chatFZ
```

### Install dependencies

```bash
npm install
```

```bash
cd frontend/
npm install
```

### Configure Environment Variables:
- Rename the .env.dummy file to .env:
```bash
mv .env.dummy .env
```
```dotenv
PORT=5000
MONGODB_URI=your_mongo_db_uri
...
```


### Start the server/Backend
```bash
cd backend
node app.js

```
Start the Client/Frontend

```bash
  //open a new terminal
cd frontend
npm start
```

  
## Features
- Real-time chat functionality using Socket.io
- Secure storage of user details with encryption in MongoDB
- Responsive user interface built with React JS
- Server-side logic and API endpoints with Node JS and Express JS
