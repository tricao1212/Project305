import React from 'react';

const Popup = ({ show, onClose, title, content }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
