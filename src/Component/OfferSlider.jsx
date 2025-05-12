import React, { useEffect, useState } from 'react';

const OfferSlider = () => {
  const slides = [
    {
      image: "https://i.postimg.cc/PJxdZYzM/mark-mc-neill-qahbn44-Lczo-unsplash.jpg",
      title: "50% off on Museum tickets",
      description:
        "As a Culer Premium, you will receive an exclusive 50% discount on tickets for the FC Barcelona Museum",
    },
    {
      image: "https://i.postimg.cc/zvb5P7dM/beneficis-ecommerce-blur-EN.webp",
      title: "5% off on online store",
      description:
        "As a Culer Premium, you will receive an exclusive 5% discount from the FC Barcelona online store",
    },
    {
      image: "https://i.postimg.cc/NF3YhXS0/beneficis-football-tickets-blur-EN.webp",
      title: "10% off on football tickets",
      description:
        "As a Culer Premium, you can enjoy an exclusive 10% discount on FC Barcelona football match tickets",
    },
    {
      image: "https://i.postimg.cc/zvb5P7dM/beneficis-ecommerce-blur-EN.webp",
      title: "Early access to match tickets",
      description:
        "As a Culer Premium, you will get early access to purchase your tickets for FC Barcelona matches before they are available to the general public",
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const isEven = currentIndex % 2 === 0;

  return (
    <div className="w-full max-w-7xl mx-auto my-10 bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row items-center md:h-[600px] transition-all duration-1000">
      {isEven ? (
        <>
          {/* Image Left */}
          <div className="md:w-1/2 w-full h-[300px] md:h-full">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Right */}
          <div className="md:w-1/2 w-full p-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              {slides[currentIndex].title}
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              {slides[currentIndex].description}
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Text Left */}
          <div className="md:w-1/2 w-full p-6 text-center md:text-left order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              {slides[currentIndex].title}
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              {slides[currentIndex].description}
            </p>
          </div>
          {/* Image Right */}
          <div className="md:w-1/2 w-full h-[300px] md:h-full order-1 md:order-2">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default OfferSlider;