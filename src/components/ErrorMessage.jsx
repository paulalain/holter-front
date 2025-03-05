import React from 'react';

const ErrorMessage = ({ error }) => {
  if (!error) return null; // Don't render anything if no error

  return (
    <div className="max-w-sm mx-auto p-4 mt-4 bg-red-100 text-red-700 border border-red-300 rounded-lg shadow-md">
      <div className="flex items-center">
        <svg
          className="w-5 h-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM10 5a1 1 0 00-1 1v4a1 1 0 002 0V6a1 1 0 00-1-1zM10 11a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-sm font-medium">{error}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
