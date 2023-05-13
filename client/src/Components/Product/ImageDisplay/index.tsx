import React, { FC } from 'react';

const imgStyles = {
  maxHeight: '100%',
  maxWidth: '100%',
};

interface ImageDisplayProps {
  image: string;
}

const ImageDisplay: FC<ImageDisplayProps> = ({ image }) => {
  return (
    <div
      style={{
        height: '180px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 0.2rem',
      }}
    >
      <img src={image} alt="first" style={imgStyles} />
    </div>
  );
};

export default ImageDisplay;
