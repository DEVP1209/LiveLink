import React, { useContext } from 'react';
import { SocketContext } from '../contexts/Context';


const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call,userAudio} = useContext(SocketContext);
  

  return (
    <div className="video-main-container">
    {stream && (
      <div className="video-container">
        <span className="name">{name || "Name"}</span>
        <video className="video" playsInline muted ref={myVideo} autoPlay />
      </div>
    )}
    {callAccepted && !callEnded && (
      <div className="video-container">
        <span className="name">{call.name || "Name"}</span>
        <video className="video" playsInline muted ref={userVideo} autoPlay />
        <audio ref={userAudio} autoPlay />
      </div>
    )}
  </div>
  );
};

export default VideoPlayer;