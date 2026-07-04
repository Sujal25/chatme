# ChatMe

A simple real-time chat application built using the MERN Stack. Users can register, log in securely, and exchange messages in real time.

## Features

- User Registration
- User Login
- JWT Authentication
- Real-Time Messaging using Socket.IO
- Password Encryption with Bcrypt
- MongoDB Database

## Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Socket.IO
- JWT
- Bcrypt.js

### Database
- MongoDB
- Mongoose

## Project Structure

```
chatme
├── client
├── server
├── .gitignore
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Sujal25/chatme.git
cd chatme
```

### Install Backend

```bash
cd server
npm install
```

### Install Frontend

```bash
cd ../client
npm install
```

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5005
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Run the Application

Start the backend:

```bash
cd server
npm start
```

Start the frontend:

```bash
cd client
npm start
```

The application will be available at:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5005`

## Future Improvements

- Group Chat
- Image Sharing
- Online/Offline Status
- Typing Indicator

## Author

**Sujal Maurya**

GitHub: https://github.com/Sujal25