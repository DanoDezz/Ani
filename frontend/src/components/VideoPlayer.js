import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="video-player">
      <video
        src={videoUrl}
        controls
        className="w-full h-auto rounded shadow"
      ></video>
    </div>
  );
};

export default VideoPlayer;
