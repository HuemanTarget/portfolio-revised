import React, { useState } from 'react';
import sample from '../../Assets/WebsiteBG.mp4';

const VideoBackground = () => {
  // const [video, setVideo] = useState(
  //   'https://www.youtube.com/watch?v=C4CmYrEpkQ8'
  // );

  return (
    <video className='videoTag' autoPlay loop muted>
      <source src={sample} type='video/mp4' />
    </video>
  );
};

export default VideoBackground;
