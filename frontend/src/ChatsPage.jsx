import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";

export const ChatsPage = ({ user }) => {
  const projectId = import.meta.env.VITE_PROJECT_ID;
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId={projectId}
        username={user.username}
        secret={user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
};
export default ChatsPage;
