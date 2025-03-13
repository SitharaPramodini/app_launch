import React, { useState } from 'react';

const Web = () => {
  const [videoPlayed, setVideoPlayed] = useState(false);

  const handleVideoEnd = () => {
    setVideoPlayed(true);
  };

  return (
    <div className="container mx-auto">
      {!videoPlayed ? (
        <video
          width="100%"
          className='h-full mx-auto'
          autoPlay
          muted
          onEnded={handleVideoEnd}
        >
          <source src="title-last1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className='last'>
          <p className='text-5xl'>Aventura Cash App</p>

          <button class="shiny-cta">
            <span>Click here to continue</span>
          </button>
        </div>
       
      )}
    </div>
  );
};

export default Web;
