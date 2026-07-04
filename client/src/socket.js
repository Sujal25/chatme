// socket.js
import { io } from "socket.io-client";

// Connect socket to your LIVE Render backend
export const socket = io(process.env.REACT_APP_API_URL);