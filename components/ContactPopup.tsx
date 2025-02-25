// components/ContactPopup.tsx
"use client";
import { useState } from 'react';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={togglePopup} className="button">
        Open Popup
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-4xl w-full">
            <button onClick={togglePopup} className="absolute top-2 right-2">
              <i className="fas fa-times"></i>
            </button>
            {/* Popup content */}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPopup;