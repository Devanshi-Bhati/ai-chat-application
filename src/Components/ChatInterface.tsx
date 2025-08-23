import React from "react";
import Sidebar from "./sidebar";
import ChatWindow from "./chatwindow";

const ChatInterface: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default ChatInterface;
