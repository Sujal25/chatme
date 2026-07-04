import React, { useState, useEffect } from "react";
import "../App.css";
import { auth } from "../firebase";
import { socket } from "../socket";
import Navbar from "../components/Navbar";

const API = process.env.REACT_APP_API_URL;

function Chat() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // ===== Get logged-in user =====
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        socket.emit("register_user", user.email);
      }
    });

    return () => unsubscribe();
  }, []);

  // ===== After currentUser is set, fetch users =====
  useEffect(() => {
    if (currentUser) {
      fetchUsers(currentUser.email);
    }
  }, [currentUser]);

  // ===== Listen for realtime messages =====
  useEffect(() => {
    const handleReceive = (data) => {
      if (
        selectedUser &&
        (data.senderEmail === selectedUser.email ||
          data.receiverEmail === selectedUser.email)
      ) {
        setMessages((prev) => [...prev, data]);
      }
    };

    socket.on("receive_message", handleReceive);
    return () => socket.off("receive_message", handleReceive);
  }, [selectedUser]);

  const fetchUsers = async (email) => {
    const res = await fetch(`${API}/users`);
    const data = await res.json();
    setUsers(data.filter((u) => u.email !== email));
  };

  const fetchMessages = async (otherUser) => {
    if (!currentUser) return;

    const res = await fetch(
      `${API}/messages?senderEmail=${currentUser.email}&receiverEmail=${otherUser.email}`
    );
    const data = await res.json();
    setMessages(data);
  };

  const sendMessage = () => {
    if (!message || !selectedUser || !currentUser) return;

    socket.emit("send_message", {
      senderEmail: currentUser.email,
      receiverEmail: selectedUser.email,
      text: message,
    });

    setMessage("");
  };

  return (
    <>
      <Navbar />

      <div className="app" style={{ marginTop: "80px" }}>
        <div className="sidebar">
          <div className="brand">💬 ChatMe</div>

          {users.map((u) => (
            <div
              key={u._id}
              className="user"
              onClick={() => {
                setSelectedUser(u);
                fetchMessages(u);
              }}
            >
              <img src={u.photo} alt="" width="48" height="48" />
              <span>{u.name}</span>
            </div>
          ))}
        </div>

        <div className="chat">
          {selectedUser ? (
            <>
              <div className="chat-header">
                Chat with {selectedUser.name}
              </div>

              <div className="messages">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`message ${
                      m.senderEmail === currentUser?.email
                        ? "sent"
                        : "received"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>

              <div className="input-area">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                />
                <button onClick={sendMessage}>Send</button>
              </div>
            </>
          ) : (
            <div className="chat-header">
              Select a user to start chatting
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Chat;