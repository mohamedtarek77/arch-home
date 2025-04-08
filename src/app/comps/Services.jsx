
import React, { useState, useEffect } from "react";
import { translations } from "../constents/index";
import Image from "next/image";

const Services = ({ theme, language }) => {
  const t = translations[language];
  const [visibleItems, setVisibleItems] = useState([]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedItemImages, setSelectedItemImages] = useState([]);
  const [selectedItemTitle, setSelectedItemTitle] = useState("");

  // Gradually show items with 1 second interval
  useEffect(() => {
    const totalItems = t.services.services_items.length;
    const timers = [];

    for (let i = 0; i < totalItems; i++) {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => [...prev, i]);
      }, 600 * i);

      timers.push(timer);
    }

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [t.services.services_items.length]);

  // Handle image click to open gallery
  const handleImageClick = (item) => {
    setSelectedItemImages(item.images);
    setSelectedItemTitle(item.title);
    setCurrentImageIndex(0);
    setGalleryOpen(true);
  };

  // Close the gallery
  const closeGallery = () => {
    setGalleryOpen(false);
  };

  // Navigate to the next image
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === selectedItemImages.length - 1 ? 0 : prev + 1
    );
  };

  // Navigate to the previous image
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedItemImages.length - 1 : prev - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!galleryOpen) return;

      if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) =>
          prev === selectedItemImages.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) =>
          prev === 0 ? selectedItemImages.length - 1 : prev - 1
        );
      } else if (e.key === "Escape") {
        closeGallery();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryOpen, selectedItemImages.length]);

  return (
    <div>
      <section
        id="services"
        className={`py-10 md:py-16 lg:py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={`${
              language === "ar" ? "text-right" : "text-left"
            } mb-8 md:mb-12 lg:mb-16`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{t.services.title}</h2>
            <p
              className={`text-lg md:text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } max-w-2xl`}
            >
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {t.services.services_items.map((item, index) => (
              <div
                key={index}
                className={`
                  flex flex-col items-center gap-3
                  ${theme === "dark" ? "bg-gray-700" : "bg-white"} 
                  p-4 md:p-6 lg:p-8 rounded-xl shadow-sm 
                  ${
                    item.highlighted
                      ? theme === "dark"
                        ? "ring-2 ring-indigo-400 shadow-md"
                        : "ring-2 ring-indigo-600 shadow-md"
                      : ""
                  } 
                  transition-opacity duration-500
                  ${visibleItems.includes(index) ? "opacity-100" : "opacity-0"}
                `}
              >
                {item.images && item.images.length > 0 && (
                  <div
                    className="cursor-pointer hover:scale-105 transition-transform duration-300 w-full"
                    onClick={() => handleImageClick(item)}
                  >
                    <div className="flex items-center justify-center h-full p-2 md:p-4 lg:p-6">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="max-h-full max-w-full w-full h-48 sm:h-56 md:h-64 lg:h-72 object-contain rounded shadow-lg"
                      />
                    </div>
                    {/* {item.images.length > 1 && (
                      <div className="mt-1 text-center text-xs md:text-sm text-gray-500">
                        {item.images.length} images available - tap to view
                      </div>
                    )} */}
                  </div>
                )}
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-center">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal with Navigation - Responsive for mobile */}
      {galleryOpen && selectedItemImages.length > 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 md:p-4"
          onClick={closeGallery}
        >
          <div
            className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-xl max-w-6xl w-full relative h-4/5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gallery title */}
            <div className="absolute top-2 md:top-4 left-2 md:left-4 text-white font-semibold text-base md:text-xl z-10 truncate max-w-xs sm:max-w-sm md:max-w-md">
              {selectedItemTitle}
            </div>

            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-2 md:top-4 right-2 md:right-4 text-gray-800 hover:text-gray-400 text-2xl md:text-3xl font-bold z-10 p-1"
              aria-label="Close gallery"
            >
              ×
            </button>

            {/* Left navigation arrow - optimized for touch */}
            {selectedItemImages.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white text-3xl md:text-5xl font-bold z-10 p-2 md:p-4 h-16 md:h-24 flex items-center justify-center bg-black bg-opacity-20 rounded-r"
                aria-label="Previous image"
              >
                ‹
              </button>
            )}

            {/* Right navigation arrow - optimized for touch */}
            {selectedItemImages.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white text-3xl md:text-5xl font-bold z-10 p-2 md:p-4 h-16 md:h-24 flex items-center justify-center bg-black bg-opacity-20 rounded-l"
                aria-label="Next image"
              >
                ›
              </button>
            )}

            {/* Image container - adjusted for mobile viewing */}
            <div className="flex items-center justify-center h-full p-4 md:p-8">
              <img
                src={selectedItemImages[currentImageIndex]}
                alt={`${selectedItemTitle} image ${currentImageIndex + 1}`}
                className="max-h-full max-w-full object-contain rounded shadow-lg"
              />
            </div>

            {/* Image counter with improved visibility */}
            {selectedItemImages.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-30 py-1 text-sm md:text-base font-medium">
                {currentImageIndex + 1} / {selectedItemImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;





// import React, { useState, useEffect } from "react";
// import { translations } from "../constents/index";
// import Image from "next/image";

// const Services = ({ theme, language }) => {
//   const t = translations[language];
//   const [visibleItems, setVisibleItems] = useState([]);
//   const [galleryOpen, setGalleryOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [selectedItemImages, setSelectedItemImages] = useState([]);
//   const [selectedItemTitle, setSelectedItemTitle] = useState("");

//   // Gradually show items with 1 second interval
//   useEffect(() => {
//     const totalItems = t.services.services_items.length;

//     // Clear previous intervals when component remounts
//     const timers = [];

//     for (let i = 0; i < totalItems; i++) {
//       const timer = setTimeout(() => {
//         setVisibleItems((prev) => [...prev, i]);
//       }, 1000 * i);

//       timers.push(timer);
//     }

//     // Cleanup timers on unmount
//     return () => {
//       timers.forEach((timer) => clearTimeout(timer));
//     };
//   }, [t.services.services_items.length]);

//   // Handle image click to open gallery
//   const handleImageClick = (item) => {
//     setSelectedItemImages(item.images);
//     setSelectedItemTitle(item.title);
//     setCurrentImageIndex(0);
//     setGalleryOpen(true);
//   };

//   // Close the gallery
//   const closeGallery = () => {
//     setGalleryOpen(false);
//   };

//   // Navigate to the next image
//   const nextImage = (e) => {
//     e.stopPropagation();
//     setCurrentImageIndex((prev) =>
//       prev === selectedItemImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   // Navigate to the previous image
//   const prevImage = (e) => {
//     e.stopPropagation();
//     setCurrentImageIndex((prev) =>
//       prev === 0 ? selectedItemImages.length - 1 : prev - 1
//     );
//   };

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!galleryOpen) return;

//       if (e.key === "ArrowRight") {
//         setCurrentImageIndex((prev) =>
//           prev === selectedItemImages.length - 1 ? 0 : prev + 1
//         );
//       } else if (e.key === "ArrowLeft") {
//         setCurrentImageIndex((prev) =>
//           prev === 0 ? selectedItemImages.length - 1 : prev - 1
//         );
//       } else if (e.key === "Escape") {
//         closeGallery();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [galleryOpen, selectedItemImages.length]);

//   return (
//     <div>
//       <section
//         id="services"
//         className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
//       >
//         <div className="container mx-auto px-4">
//           <div
//             className={`${
//               language === "ar" ? "text-right" : "text-left"
//             } mb-16`}
//           >
//             <h2 className="text-3xl font-bold mb-4">{t.services.title}</h2>
//             <p
//               className={`text-xl ${
//                 theme === "dark" ? "text-gray-300" : "text-gray-600"
//               } max-w-2xl`}
//             >
//               {t.services.subtitle}
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {t.services.services_items.map((item, index) => (
//               <div
//                 key={index}
//                 className={`
//                   flex flex-col items-center gap-3
//                   ${theme === "dark" ? "bg-gray-700" : "bg-white"} 
//                   p-8 rounded-xl shadow-sm 
//                   ${
//                     item.highlighted
//                       ? theme === "dark"
//                         ? "ring-2 ring-indigo-400 shadow-md"
//                         : "ring-2 ring-indigo-600 shadow-md"
//                       : ""
//                   } 
//                   transition-opacity duration-500
//                   ${visibleItems.includes(index) ? "opacity-100" : "opacity-0"}
//                 `}
//               >
//                 {item.images && item.images.length > 0 && (
//                   <div
//                     className="cursor-pointer hover:scale-105 transition-transform duration-300"
//                     onClick={() => handleImageClick(item)}
//                   >
//                     {/* <Image 
//                       src={item.images[0]} 
//                       alt={item.title} 
//                       width={200} 
//                       height={200} 
//                       className="rounded-lg"
//                     /> */}

//                     <div className="flex items-center justify-center h-full p-8">
//                       <img
//                         src={item.images[0]}
//                         alt={item.title}
//                         className="max-h-full max-w-full w-[300px] h-[300px] object-contain rounded shadow-lg"
//                       />
//                     </div>
//                     {/* {item.images.length > 1 && (
//                       <div className="mt-2 text-center text-sm text-gray-500">
//                         Click to view all {item.images.length} images
//                       </div>
//                     )} */}
//                   </div>
//                 )}
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Gallery Modal with Navigation */}
//       {galleryOpen && selectedItemImages.length > 0 && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
//           onClick={closeGallery}
//         >
//           <div
//             className="bg-white bg-opacity-30 rounded-lg overflow-hidden shadow-xl max-w-6xl w-full relative h-4/5"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Gallery title */}
//             <div className="absolute top-4 left-4 text-white font-semibold text-xl z-10">
//               {selectedItemTitle}
//             </div>

//             {/* Close button */}
//             <button
//               onClick={closeGallery}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl font-bold z-10"
//             >
//               ×
//             </button>

//             {/* Left navigation arrow - only shown if there's more than one image */}
//             {selectedItemImages.length > 1 && (
//               <button
//                 onClick={prevImage}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 text-5xl font-bold z-10"
//               >
//                 ‹
//               </button>
//             )}

//             {/* Right navigation arrow - only shown if there's more than one image */}
//             {selectedItemImages.length > 1 && (
//               <button
//                 onClick={nextImage}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 text-5xl font-bold z-10"
//               >
//                 ›
//               </button>
//             )}

//             {/* Image container */}
//             <div className="flex items-center justify-center h-full p-8">
//               <img
//                 src={selectedItemImages[currentImageIndex]}
//                 alt={`${selectedItemTitle} image ${currentImageIndex + 1}`}
//                 className="max-h-full max-w-full object-contain rounded shadow-lg"
//               />
//             </div>

//             {/* Image counter - only shown if there's more than one image */}
//             {selectedItemImages.length > 1 && (
//               <div className="absolute bottom-4 left-0 right-0 text-center text-gray-600 font-medium">
//                 {currentImageIndex + 1} / {selectedItemImages.length}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Services;
