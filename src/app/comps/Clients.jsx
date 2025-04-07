



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { translations } from '../constents/index';
import Image from 'next/image';

const Clients = ({ theme, language }) => {
  const t = translations[language];
  
  // We need to duplicate items to create a seamless loop
  const [firstRowItems, setFirstRowItems] = useState([]);
  const [secondRowItems, setSecondRowItems] = useState([]);
  
  useEffect(() => {
    // Split items into two rows
    const Length = Math.ceil(t.clients.items.length );
    const row1 = t.clients.items.slice(0, Length);
    
    // Duplicate items for seamless looping
    setFirstRowItems([...row1, ...row1, ...row1]);
  }, [t.clients.items]);

  return (
    <section
      id="clients"
      className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} overflow-hidden`}
    >
      <div className="container mx-auto px-4">
        <div className={`${language === 'ar' ? 'text-right' : 'text-left'} mb-16`}>
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{t.clients.title}</h2>
          <div className={`w-20 h-1 ${theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'} ${language === "ar" ? 'ml-auto' : ''}`}></div>
        </div>

        {/* First row - right to left */}
        <div className="mb-12 relative">
          <motion.div
            className="flex space-x-8 md:space-x-16 items-center"
            animate={{
              x: [0, '-33.333%']
            }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 30,
                ease: 'linear',
                repeatType: 'loop'
              }
            }}
            style={{ 
              willChange: 'transform',
              width: '300%' // 3x width for the repeated items
            }}
          >
            {firstRowItems.map((item, index) => (
              <div
                key={`row1-${index}`}
                className={`
                  flex-shrink-0 flex flex-col items-center gap-3 
                  ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} 
                  p-6 rounded-xl shadow-md
                  ${item.highlighted 
                    ? theme === 'dark' 
                      ? 'ring-2 ring-indigo-400 shadow-lg' 
                      : 'ring-2 ring-indigo-600 shadow-lg' 
                    : ''
                  } 
                  transition-all duration-300 hover:scale-105 hover:shadow-lg
                  w-64
                `}
              >
                <div className="relative h-36 w-36 flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-indigo-900/20' : 'bg-indigo-100/50'} blur-md`}></div>
                  <div className="relative z-10">
                    <Image 
                      src={item.image} 
                      alt={item.title || 'Client Image'} 
                      width={130} 
                      height={130} 
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className={`text-xl font-semibold text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
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