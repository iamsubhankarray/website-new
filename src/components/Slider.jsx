import React, { useState, useEffect } from "react";

const ImageSlideshow = ({products}) => {
  
  const images = products.map((item)=>item.image)

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set an interval to change the image every 3 seconds (3000ms)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        width: "screen",
        height: "768",
        textAlign: "center",
        // overflow:"clip",
        background:"pink",
        
      }}
    >
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{  maxHeight: 512 }}
      />
      
    </div>
  );
};

export default ImageSlideshow;
