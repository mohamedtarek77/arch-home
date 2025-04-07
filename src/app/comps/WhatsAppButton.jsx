import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton({ phoneNumber, message }) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button
        // className="fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full shadow-lg"
        className="fixed bottom-4 left-6  bg-green-500  px-4 py-4  text-white font-medium rounded-full shadow-lg hover:bg-green-600 transition"
        onClick={() => console.log("Button clicked!")}
      >
        <FaWhatsapp size={40} />
      </button>
    </a>
  );
}

export default WhatsAppButton;
