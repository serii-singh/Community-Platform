import React, { useState } from "react";
import NavBar from "../layout/navbar";
import Sidebar from "../layout/sidebar";

export default function ChatRoom() {
  // Sample users with roles (This can be dynamic in a real application)
  const users = [
    { id: 1, name: "John Doe", role: "admin" },
    { id: 2, name: "Jane Smith", role: "tutor" },
    { id: 3, name: "Sarah Lee", role: "student" },
  ];

  // Initial messages with threaded replies
  const initialMessages = [
    {
      id: 1,
      userId: 1,
      text: "Welcome to the chat room!",
      replies: [
        { id: 1, userId: 2, text: "Thank you, happy to be here!" },
        { id: 2, userId: 3, text: "Looking forward to learning!" },
      ],
      likes: 5,
      followed: false,
    },
    {
      id: 2,
      userId: 2,
      text: "Does anyone know how to debug in React?",
      replies: [],
      likes: 3,
      followed: false,
    },
  ];

  // State to hold messages and manage user interactions
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [newReply, setNewReply] = useState("");

  // Function to handle liking a message
  const handleLike = (messageId) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === messageId
        ? { ...msg, likes: msg.likes + 1 }
        : msg
    );
    setMessages(updatedMessages);
  };

  // Function to handle following a thread
  const handleFollow = (messageId) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === messageId
        ? { ...msg, followed: !msg.followed }
        : msg
    );
    setMessages(updatedMessages);
  };

  // Function to handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: Date.now(),
        userId: 1, // assuming current user is Admin (hardcoded)
        text: newMessage,
        replies: [],
        likes: 0,
        followed: false,
      };
      setMessages([newMsg, ...messages]);
      setNewMessage(""); // Clear the message input
    }
  };

  // Function to handle replying to a message
  const handleReply = (messageId) => {
    if (newReply.trim()) {
      const updatedMessages = messages.map((msg) =>
        msg.id === messageId
          ? {
              ...msg,
              replies: [
                ...msg.replies,
                { id: Date.now(), userId: 1, text: newReply },
              ],
            }
          : msg
      );
      setMessages(updatedMessages);
      setNewReply(""); // Clear the reply input
    }
  };

  // Function to get user details (role badge)
  const getUserRoleBadge = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? (
      <span
        className={`ml-2 text-sm font-semibold rounded-full py-1 px-3 ${
          user.role === "admin" ? "bg-red-500 text-white" : "bg-blue-500 text-white"
        }`}
      >
        {user.role}
      </span>
    ) : null;
  };

  return (
    <>
      <NavBar />
      <Sidebar content={
        <>

      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Tutor Chat Room</h1>

        {/* New Message Input */}
        <div className="mb-4">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Write a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Send
          </button>
        </div>

        {/* Display Messages */}
        {messages.map((message) => (
          <div key={message.id} className="border p-4 mb-4 rounded-lg bg-gray-50">
            {/* Message Header with User Role Badge */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <p className="font-semibold text-lg">{users.find((u) => u.id === message.userId)?.name}</p>
                {getUserRoleBadge(message.userId)}
              </div>

              {/* Like and Follow Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleLike(message.id)}
                  className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                  👍 {message.likes}
                </button>
                <button
                  onClick={() => handleFollow(message.id)}
                  className={`p-2 rounded-lg ${message.followed ? "bg-yellow-500" : "bg-gray-300"} text-white`}
                >
                  {message.followed ? "Following" : "Follow"}
                </button>
              </div>
            </div>

            <p>{message.text}</p>

            {/* Replies Section */}
            {message.replies.length > 0 && (
              <div className="mt-3 ml-6">
                {message.replies.map((reply) => (
                  <div key={reply.id} className="border-l-2 pl-4 py-2 mt-2 bg-gray-100 rounded-lg">
                    <p className="font-semibold">{users.find((u) => u.id === reply.userId)?.name}</p>
                    <p>{reply.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Reply Input */}
            <div className="mt-3">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Write a reply..."
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
              />
              <button
                onClick={() => handleReply(message.id)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Reply
              </button>
            </div>
          </div>
        ))}
      </div> </>}/>
    </>
  );
}
