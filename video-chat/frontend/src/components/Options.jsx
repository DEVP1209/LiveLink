import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
    Assignment,
    Phone,
    PhoneDisabled,
  } from "@mui/icons-material";

import { SocketContext } from '../Context';



const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className="option-container">
      <div className="form-container">
        <form noValidate autoComplete="off" className="form">
          <div>
            <label className="form-label">Account Info</label>
          </div>
          <input
            className="form-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CopyToClipboard text={me}>
            <button type="button" className="form-btn">
              <Assignment />
              COPY YOUR ID
            </button>
          </CopyToClipboard>
        </form>
        <form noValidate autoComplete="off" className="form">
          <div>
            <label className="form-label">Make A Call</label>
          </div>
          <input
            className="form-input"
            placeholder="ID to Call"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            // required
          />
          {callAccepted && !callEnded ? (
            <button type="button" className="form-btn-hangup" onClick={leaveCall}>
              <PhoneDisabled />
              Hang Up
            </button>
          ) : (
            <button type="button" className="form-btn-call" onClick={()=>callUser(idToCall)}>
              <Phone />
              CALL
            </button>
          )}
        </form>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Options;