
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { translations } from '../constents/index';
import Image from 'next/image';

const Clients = ({ theme, language }) => {
  const t = translations[language];
  const isRTL = language === 'ar';

  // We need to duplicate items to create a seamless loop
  const [clientItems, setClientItems] = useState([]);
  
  useEffect(() => {
    // Duplicate items for seamless looping - ensure we have enough items regardless of language
    setClientItems([...t.clients.items, ...t.clients.items, ...t.clients.items]);
  }, [t.clients.items, language]); // Add language as dependency to re-run when language changes

  // Adjust carousel speed based on screen size
  const getCarouselDuration = () => {
    if (typeof window !== 'undefined') {
      // Slower on mobile for better readability
      if (window.innerWidth < 640) return 20;
      // Medium speed on tablets
      if (window.innerWidth < 1024) return 15;
      // Faster on desktop
      return 10;
    }
    return 10; // Default
  };

  // Define animation properties based on language direction
  const animationProps = isRTL
    ? {
        animate: { x: ['33.333%', '0%'] }, // left to Right for Arabic (same as LTR)
        transition: {
          x: {
            repeat: Infinity,
            duration: getCarouselDuration(),
            ease: 'linear',
            repeatType: 'loop'
          }
        }
      }
    : {
        animate: { x: ['0%', '-33.333%'] }, // Right to left for LTR languages
        transition: {
          x: {
            repeat: Infinity,
            duration: getCarouselDuration(),
            ease: 'linear',
            repeatType: 'loop'
          }
        }
      };

  return (
    <section
      id="clients"
      className={`py-12 sm:py-16 md:py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} overflow-hidden`}
    >
      <div className="container mx-auto px-4">
        <div className={`${language === 'ar' ? 'text-right' : 'text-left'} mb-8 sm:mb-12 md:mb-16`}>
          <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            {t.clients.title}
          </h2>
          <div className={`w-32 sm:w-40 h-1 ${theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'} ${language === "ar" ? 'ml-auto' : ''}`}></div>
        </div>

        {/* Responsive carousel */}
        <div className="mb-8 sm:mb-12 overflow-hidden relative">
          <motion.div
            className="flex items-center"
            animate={animationProps.animate}
            transition={animationProps.transition}
            style={{ 
              willChange: 'transform',
              width: '300%' // 3x width for the repeated items
            }}
          >
            {clientItems.map((item, index) => (
              <div
                key={`client-${index}`}
                className={`
                  flex-shrink-0 flex flex-col items-center gap-2 sm:gap-3 
                  ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} 
                  p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md
                  ${item.highlighted 
                    ? theme === 'dark' 
                      ? 'ring-2 ring-indigo-400 shadow-lg' 
                      : 'ring-2 ring-indigo-600 shadow-lg' 
                    : ''
                  } 
                  transition-all duration-300 hover:scale-105 hover:shadow-lg
                  w-32 sm:w-48 md:w-64
                  mx-2 sm:mx-4 md:mx-8
                `}
              >
                <div className="relative h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-indigo-900/20' : 'bg-indigo-100/50'} blur-md`}></div>
                  <div className="relative z-10">
                    <Image 
                      src={item.image} 
                      alt={item.title || 'Client Image'} 
                      width={130} 
                      height={130} 
                      className="object-contain w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32"
                    />
                  </div>
                </div>
                <h3 className={`text-sm sm:text-base md:text-xl font-semibold text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {item.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { translations } from '../constents/index';
// import Image from 'next/image';

// const Clients = ({ theme, language }) => {
//   const t = translations[language];
//   const isRTL = language === 'ar';

//   // We need to duplicate items to create a seamless loop
//   const [firstRowItems, setFirstRowItems] = useState([]);
  
//   useEffect(() => {
//     // Duplicate items for seamless looping
//     setFirstRowItems([...t.clients.items, ...t.clients.items, ...t.clients.items]);
//   }, [t.clients.items]);

//   // Adjust carousel speed based on screen size
//   const getCarouselDuration = () => {
//     if (typeof window !== 'undefined') {
//       // Slower on mobile for better readability
//       if (window.innerWidth < 640) return 40;
//       // Medium speed on tablets
//       if (window.innerWidth < 1024) return 35;
//       // Faster on desktop
//       return 30;
//     }
//     return 30; // Default
//   };

//   // Define animation properties based on language direction
//   const animationProps = isRTL
//     ? {
//         animate: { x: ['-33.333%', '0%'] }, // Left to right for Arabic
//         transition: {
//           x: {
//             repeat: Infinity,
//             duration: getCarouselDuration(),
//             ease: 'linear',
//             repeatType: 'loop'
//           }
//         }
//       }
//     : {
//         animate: { x: ['0%', '-33.333%'] }, // Right to left for LTR languages
//         transition: {
//           x: {
//             repeat: Infinity,
//             duration: getCarouselDuration(),
//             ease: 'linear',
//             repeatType: 'loop'
//           }
//         }
//       };
//   return (
//     <section
//       id="clients"
//       className={`py-12 sm:py-16 md:py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} overflow-hidden`}
//     >
//       <div className="container mx-auto px-4">
//         <div className={`${language === 'ar' ? 'text-right' : 'text-left'} mb-8 sm:mb-12 md:mb-16`}>
//           <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
//             {t.clients.title}
//           </h2>
//           <div className={`w-32 sm:w-40 h-1 ${theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'} ${language === "ar" ? 'ml-auto' : ''}`}></div>
//         </div>

//         {/* Responsive carousel */}
//         <div className="mb-8 sm:mb-12 relative">
//           <motion.div
//             className="flex items-center"
//             animate={animationProps.animate}
//             transition={animationProps.transition}

//             style={{ 
//               willChange: 'transform',
//               width: '300%' // 3x width for the repeated items
//             }}
//           >
//             {firstRowItems.map((item, index) => (
//               <div
//                 key={`row1-${index}`}
//                 className={`
//                   flex-shrink-0 flex flex-col items-center gap-2 sm:gap-3 
//                   ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} 
//                   p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md
//                   ${item.highlighted 
//                     ? theme === 'dark' 
//                       ? 'ring-2 ring-indigo-400 shadow-lg' 
//                       : 'ring-2 ring-indigo-600 shadow-lg' 
//                     : ''
//                   } 
//                   transition-all duration-300 hover:scale-105 hover:shadow-lg
//                   w-32 sm:w-48 md:w-64
//                   mx-2 sm:mx-4 md:mx-8
//                 `}
//               >
//                 <div className="relative h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 flex items-center justify-center">
//                   <div className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-indigo-900/20' : 'bg-indigo-100/50'} blur-md`}></div>
//                   <div className="relative z-10">
//                     <Image 
//                       src={item.image} 
//                       alt={item.title || 'Client Image'} 
//                       width={130} 
//                       height={130} 
//                       className="object-contain w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32"
//                     />
//                   </div>
//                 </div>
//                 <h3 className={`text-sm sm:text-base md:text-xl font-semibold text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
//                   {item.title}
//                 </h3>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Pause on hover/focus (accessibility feature) */}
//         {/* <div className="flex justify-center items-center mt-8">
//           <button 
//             className={`
//               text-sm rounded-full px-4 py-2 transition-colors
//               ${theme === 'dark' 
//                 ? 'text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400' 
//                 : 'text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600'
//               }
//             `}
//             onClick={() => {
//               // This could be expanded to actually pause the animation
//               // Would require state management and modified motion setup
//               console.log("Pause/resume button clicked");
//             }}
//             aria-label="Pause or resume client carousel"
//           >
//             {t.clients.pauseButton || 'Pause'}
//           </button>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Clients;





// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { translations } from '../constents/index';
// import Image from 'next/image';

// const Clients = ({ theme, language }) => {
//   const t = translations[language];
  
//   // We need to duplicate items to create a seamless loop
//   const [firstRowItems, setFirstRowItems] = useState([]);
//   const [secondRowItems, setSecondRowItems] = useState([]);
  
//   useEffect(() => {
//     // Split items into two rows
//     const Length = Math.ceil(t.clients.items.length );
//     const row1 = t.clients.items.slice(0, Length);
    
//     // Duplicate items for seamless looping
//     setFirstRowItems([...row1, ...row1, ...row1]);
//   }, [t.clients.items]);

//   return (
//     <section
//       id="clients"
//       className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} overflow-hidden`}
//     >
//       <div className="container mx-auto px-4">
//         <div className={`${language === 'ar' ? 'text-right' : 'text-left'} mb-16`}>
//           <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{t.clients.title}</h2>
//           <div className={`w-20 h-1 ${theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'} ${language === "ar" ? 'ml-auto' : ''}`}></div>
//         </div>

//         {/* First row - right to left */}
//         <div className="mb-12 relative">
//           <motion.div
//             className="flex space-x-8 md:space-x-16 items-center"
//             animate={{
//               x: [0, '-33.333%']
//             }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 duration: 30,
//                 ease: 'linear',
//                 repeatType: 'loop'
//               }
//             }}
//             style={{ 
//               willChange: 'transform',
//               width: '300%' // 3x width for the repeated items
//             }}
//           >
//             {firstRowItems.map((item, index) => (
//               <div
//                 key={`row1-${index}`}
//                 className={`
//                   flex-shrink-0 flex flex-col items-center gap-3 
//                   ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} 
//                   p-6 rounded-xl shadow-md
//                   ${item.highlighted 
//                     ? theme === 'dark' 
//                       ? 'ring-2 ring-indigo-400 shadow-lg' 
//                       : 'ring-2 ring-indigo-600 shadow-lg' 
//                     : ''
//                   } 
//                   transition-all duration-300 hover:scale-105 hover:shadow-lg
//                   w-64
//                 `}
//               >
//                 <div className="relative h-36 w-36 flex items-center justify-center">
//                   <div className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-indigo-900/20' : 'bg-indigo-100/50'} blur-md`}></div>
//                   <div className="relative z-10">
//                     <Image 
//                       src={item.image} 
//                       alt={item.title || 'Client Image'} 
//                       width={130} 
//                       height={130} 
//                       className="object-contain"
//                     />
//                   </div>
//                 </div>
//                 <h3 className={`text-xl font-semibold text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
//                   {item.title}
//                 </h3>
//               </div>
//             ))}
//           </motion.div>
//         </div>

   
//       </div>
//     </section>
//   );
// };

// export default Clients;





// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { translations } from '../constents/index';
// import Image from 'next/image';

// const Clients = ({ theme, language }) => {
//   const t = translations[language];
  
//   // We need to duplicate items to create a seamless loop
//   const [firstRowItems, setFirstRowItems] = useState([]);
//   const [secondRowItems, setSecondRowItems] = useState([]);
  
//   useEffect(() => {
//     // Split items into two rows
//     const halfLength = Math.ceil(t.clients.items.length / 2);
//     const row1 = t.clients.items.slice(0, halfLength);
//     const row2 = t.clients.items.slice(halfLength);
    
//     // Duplicate items for seamless looping
//     setFirstRowItems([...row1, ...row1, ...row1]);
//     setSecondRowItems([...row2, ...row2, ...row2]);
//   }, [t.clients.items]);

//   return (
//     <section
//       id="clients"
//       className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} overflow-hidden`}
//     >
//       <div className="container mx-auto px-4">
//         <div className={`${language === 'ar' ? 'text-right' : 'text-left'} mb-16`}>
//           <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{t.clients.title}</h2>
//           <div className={`w-20 h-1 ${theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'} ${language === "ar" ? 'ml-auto' : ''}`}></div>
//         </div>

//         {/* First row - right to left */}
//         <div className="mb-12 relative">
//           <motion.div
//             className="flex space-x-8 md:space-x-16 items-center"
//             animate={{
//               x: [0, '-33.333%']
//             }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 duration: 20,
//                 ease: 'linear',
//                 repeatType: 'loop'
//               }
//             }}
//             style={{ 
//               willChange: 'transform',
//               width: '300%' // 3x width for the repeated items
//             }}
//           >
//             {firstRowItems.map((item, index) => (
//               <div
//                 key={`row1-${index}`}
//                 className={`
//                   flex-shrink-0 flex flex-col items-center gap-3 
//                   ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} 
//                   p-6 rounded-xl shadow-md
//                   ${item.highlighted 
//                     ? theme === 'dark' 
//                       ? 'ring-2 ring-indigo-400 shadow-lg' 
//                       : 'ring-2 ring-indigo-600 shadow-lg' 
//                     : ''
//                   } 
//                   transition-all duration-300 hover:scale-105 hover:shadow-lg
//                   w-64
//                 `}
//               >
//                 <div className="relative h-36 w-36 flex items-center justify-center">
//                   <div className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-indigo-900/20' : 'bg-indigo-100/50'} blur-md`}></div>
//                   <div className="relative z-10">
//                     <Image 
//                       src={item.image} 
//                       alt={item.title || 'Client Image'} 
//                       width={130} 
//                       height={130} 
//                       className="object-contain"
//                     />
//                   </div>
//                 </div>
//                 <h3 className={`text-xl font-semibold text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
//                   {item.title}
//                 </h3>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Second row - left to right */}
//         <div className="relative">
//           <motion.div
//             className="flex space-x-8 md:space-x-16 items-center"
//             animate={{
//               x: ['-33.333%', 0]
//             }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 duration: 20,
//                 ease: 'linear',
//                 repeatType: 'loop'
//               }
//             }}
//             style={{ 
//               willChange: 'transform',
//               width: '300%' // 3x width for the repeated items
//             }}
//           >
//             {secondRowItems.map((item, index) => (
//               <div
//                 key={`row2-${index}`}
//                 className={`
//                   flex-shrink-0 flex flex-col items-center gap-3 
//                   ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} 
//                   p-6 rounded-xl shadow-md
//                   ${item.highlighted 
//                     ? theme === 'dark' 
//                       ? 'ring-2 ring-indigo-400 shadow-lg' 
//                       : 'ring-2 ring-indigo-600 shadow-lg' 
//                     : ''
//                   } 
//                   transition-all duration-300 hover:scale-105 hover:shadow-lg
//                   w-64
//                 `}
//               >
//                 <div className="relative h-36 w-36 flex items-center justify-center">
//                   <div className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-indigo-900/20' : 'bg-indigo-100/50'} blur-md`}></div>
//                   <div className="relative z-10">
//                     <Image 
//                       src={item.image} 
//                       alt={item.title || 'Client Image'} 
//                       width={130} 
//                       height={130} 
//                       className="object-contain"
//                     />
//                   </div>
//                 </div>
//                 <h3 className={`text-xl font-semibold text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
//                   {item.title}
//                 </h3>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;




// import React from 'react';
// import { motion } from 'framer-motion';
// import { translations } from '../constents/index';
// import Image from 'next/image';

// const Clients = ({ theme, language }) => {
//   const t = translations[language];

//   return (
//     <section
//       id="clients"
//       className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
//     >
//       <div className="container mx-auto px-4">
//         <div className={`${language === 'ar' ? 'text-right' : 'text-left'} mb-16`}>
//           <h2 className="text-3xl font-bold mb-4">{t.clients.title}</h2>
//         </div>

//         {/* Animated Rows */}
//         <div className="space-y-8 overflow-hidden">
//           {[0, 1].map((rowIndex) => (
//             <motion.div
//               key={rowIndex}
//               className="flex space-x-8 md:space-x-16 items-center"
//               initial={{ x: rowIndex % 2 === 0 ? '100%' : '-100%' }}
//               animate={{ x: 0 }}
//               // transition={{ duration: 2, ease: 'easeInOut' }}
//               // transition={{ repeat: Infinity, repeatType: 'loop', duration: 10, ease: 'linear' }}
//               transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
//               style={{ willChange: 'transform' }}
//             >
//               {t.clients.items
//                 .slice(rowIndex * Math.ceil(t.clients.items.length / 2), (rowIndex + 1) * Math.ceil(t.clients.items.length / 2))
//                 .map((item, index) => (
//                   <div
//                     key={index}
//                     className={`flex flex-col items-center gap-3 ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} p-8 rounded-xl shadow-sm transition-transform hover:scale-105 duration-300`}
//                   >
//                     <Image src={item.image} alt="client image" width={200} height={200} className="rounded-full" />
//                     <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                   </div>
//                 ))}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;






// import React from 'react'
// import {translations} from '../constents/index'	
// import Image from 'next/image'
// const Clients = ({theme,language}) => {
// const t = translations[language]
    
//   return (
//     <div>
//        <section id="services" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
//           <div className="container mx-auto px-4">
//             <div className={`${ language === "ar" ?`text-right `:'text-left'} mb-16`} >
//               <h2 className="text-3xl font-bold mb-4">{t.clients.title}</h2>
          
//             </div>
            
//             <div className="grid md:grid-cols-3 gap-8">
//               {t.clients.items.map((item, index) => (
//                 <div 
//                   key={index} 
//                   className={` flex flex-col items-center gap-3
//                     ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} 
//                     p-8 rounded-xl shadow-sm 
//                     ${item.highlighted ? theme === 'dark' 
//                       ? 'ring-2 ring-indigo-400 shadow-md' 
//                       : 'ring-2 ring-indigo-600 shadow-md' 
//                       : ''} 
//                   `}
//                 >
//                   {/* <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{plan.description}</p>
//                   <p className="text-4xl font-bold mb-6">{plan.price}<span className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>/month</span></p>
//                    */}
//            <Image src={item.image} alt='image' width={200} height={200} />
//            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//     </div>
//   )
 



// }

// export default Clients

//  // return (
//   //   <div>
//   //         <section id="clients" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
//   //         <div className="container mx-auto px-4">
//   //           <div className="text-center mb-16">
//   //             <h2 className="text-3xl font-bold mb-4">{t.clients.title}</h2>
//   //             <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
//   //               {t.testimonials.subtitle}
//   //             </p>
//   //           </div>
            
//   //           <div className="grid md:grid-cols-2 gap-8">
//   //             {t.testimonials.items.map((testimonial, index) => (
//   //               <div key={index} className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} p-8 rounded-xl`}>
//   //                 <p className={`text-lg mb-6 italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>"{testimonial.quote}"</p>
//   //                 <div>
//   //                   <p className="font-semibold">{testimonial.author}</p>
//   //                   <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.position}</p>
//   //                 </div>
//   //               </div>
//   //             ))}
//   //           </div>
//   //         </div>
//   //       </section>
//   //   </div>
//   // )