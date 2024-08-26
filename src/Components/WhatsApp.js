// src/WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  const handleClick = () => {
    // Replace with your WhatsApp number or link
    window.open('https://wa.me/6392637347', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png"
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </button>
  );
};

export default WhatsAppButton;
