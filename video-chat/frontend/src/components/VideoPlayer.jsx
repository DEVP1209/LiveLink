import React, { useContext } from 'react';
import { SocketContext } from '../Context';


const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  

  return (
    // <Grid container className={classes.gridContainer}>
    //   {stream && (
    //     <Paper className={classes.paper}>
    //       <Grid item xs={12} md={6}>
    //         <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
    //         <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
    //       </Grid>
    //     </Paper>
    //   )}
    //   {callAccepted && !callEnded && (
    //     <Paper className={classes.paper}>
    //       <Grid item xs={12} md={6}>
    //         <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
    //         <video playsInline ref={userVideo} autoPlay className={classes.video} />
    //       </Grid>
    //     </Paper>
    //   )}
    // </Grid>
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
      </div>
    )}
  </div>
  );
};

export default VideoPlayer;