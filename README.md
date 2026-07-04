# ChatMe

A simple real-time chat application built using the MERN Stack. Users can register, log in securely, and exchange messages in real time.

## 🚀 Live Demo

**Frontend:** https://suziechatme.netlify.app/

> **Note:** The frontend is deployed on Netlify. Full chat functionality requires the backend server and MongoDB connection.

---

## Features

- User Registration
- User Login
- JWT Authentication
- Real-Time Messaging using Socket.IO
- Password Encryption using Bcrypt
- MongoDB Database
- Responsive User Interface

---

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

---

## Project Structure

```text
chatme
├── client
├── server
├── README.md
└── .gitignore
```

---

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

---

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5005
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Run the Project

### Start the Backend

```bash
cd server
npm start
```

### Start the Frontend

```bash
cd client
npm start
```

Open your browser:

- Frontend: http://localhost:3000
- Backend: http://localhost:5005

---

## Future Improvements

- Group Chat
- Image Sharing
- Online/Offline Status
- Typing Indicator
- Read Receipts

---

## Author

**Sujal Maurya**

GitHub: https://github.com/Sujal25

---

⭐ If you like this project, consider giving it a star on GitHub.