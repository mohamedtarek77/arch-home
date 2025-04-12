import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { translations } from "../constents/index";

function WhatsAppButton({ phoneNumbers, theme, language }) {
    const t = translations[language];
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const numbers = Array.isArray(phoneNumbers) ? phoneNumbers : [phoneNumbers];
  const encodedMessage = encodeURIComponent(t.whatsappBtn.message);
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Main WhatsApp button */}
      <button
        className="fixed bottom-4 left-6 bg-green-500 px-4 py-4 text-white font-medium rounded-full shadow-lg hover:bg-green-600 transition"
        onClick={toggleModal}
      >
        <FaWhatsapp size={40} />
      </button>
      
      {/* Modal */}
      {isModalOpen && (
        <div className= {`fixed inset-0 ${theme === "dark" ? "bg-gray-700" : "bg-gray-300	"}  bg-opacity-30 flex items-center justify-center z-50`}>
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full m-4">
            <div className="flex justify-between items-center mb-4">

  

              <h3 className="text-xl font-medium text-gray-900"> {t.whatsappBtn.title}  </h3>
              <button 
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={24} />
              </button>
            </div>
            
            <div className="space-y-3">
              {numbers.map((number, index) => (
                <a 
                  key={index}
                  href={`https://wa.me/${number}?text=${encodedMessage}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full bg-green-100 hover:bg-green-200 text-green-800 font-medium py-3 px-4 rounded flex items-center">
                    <FaWhatsapp className="mr-3" size={24} />
                    {/* {names[index] || `Contact ${index + 1}`} */}
                    {number}

                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WhatsAppButton;




// 2

// import React, { useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";

// function WhatsAppButton({ phoneNumbers, message }) {
//   // Check if phoneNumbers is an array, if not convert to array
//   const numbers = Array.isArray(phoneNumbers) ? phoneNumbers : [phoneNumbers];
//   const [showOptions, setShowOptions] = useState(false);
  
//   const encodedMessage = encodeURIComponent(message);
  
//   const handleMainButtonClick = () => {
//     // If we have multiple numbers, show options
//     if (numbers.length > 1) {
//       setShowOptions(!showOptions);
//     } else {
//       // If only one number, open WhatsApp directly
//       window.open(`https://wa.me/${numbers[0]}?text=${encodedMessage}`, "_blank");
//     }
//     console.log("Main button clicked!");
//   };
  
//   return (
//     <div className="fixed bottom-4 left-6">
//       {/* Main WhatsApp button */}
//       <button
//         className="bg-green-500 px-4 py-4 text-white font-medium rounded-full shadow-lg hover:bg-green-600 transition"
//         onClick={handleMainButtonClick}
//       >
//         <FaWhatsapp size={40} />
//       </button>
      
//       {/* Options panel that shows up when main button is clicked */}
//       {showOptions && (
//         <div className="absolute bottom-20 left-0 bg-white rounded-lg shadow-lg p-4 w-64">
//           <h3 className="text-gray-700 font-medium mb-2">Select contact:</h3>
//           {numbers.map((number, index) => (
//             <a 
//               key={index}
//               href={`https://wa.me/${number}?text=${encodedMessage}`}
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="block py-2 px-3 my-1 bg-green-100 hover:bg-green-200 text-green-800 rounded transition"
//             >
//               Contact {index + 1}: {formatPhoneNumber(number)}
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// // Helper function to format phone number for display
// function formatPhoneNumber(phoneNumber) {
//   // Simple formatting - you can enhance this based on your needs
//   if (phoneNumber.length > 8) {
//     return `+${phoneNumber.substring(0, 2)} ${phoneNumber.substring(2)}`;
//   }
//   return phoneNumber;
// }

// export default WhatsAppButton;



// 1 

// import React from "react";
// import { FaWhatsapp } from "react-icons/fa";

// function WhatsAppButton({ phoneNumber, message }) {
//   const encodedMessage = encodeURIComponent(message);
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//   return (
//     <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
//       <button
//         // className="fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full shadow-lg"
//         className="fixed bottom-4 left-6  bg-green-500  px-4 py-4  text-white font-medium rounded-full shadow-lg hover:bg-green-600 transition"
//         onClick={() => console.log("Button clicked!")}
//       >
//         <FaWhatsapp size={40} />
//       </button>
//     </a>
//   );
// }

// export default WhatsAppButton;
