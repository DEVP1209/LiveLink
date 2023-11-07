import React, { useContext } from "react";
import { SocketContext } from "../contexts/Context";

function Notifications() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <div className="notification-container">
      {call.isReceivingCall && !callAccepted && (
        <>
          <span className="notif-text">{call.name} IS CALLING</span>
          <button className="answer-btn" onClick={answerCall}>
            Answer
          </button>
        </>
      )}
    </div>
  );
}

export default Notifications;
