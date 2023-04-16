import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const SessionCounter = () => {
    const [count, setCount] = useState(0);
    const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("count", (newCount) => {
      setCount(newCount);
    });

    return () => {
      socket.off("count");
    };
  }, [socket]);

    return (
        <div>
            <span>Active sessions: {count}</span>
        </div>
    );
};

export default SessionCounter;
