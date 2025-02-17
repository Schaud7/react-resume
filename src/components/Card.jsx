import React from "react";

const Card = ({ header, title, subtitle, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-4/5 mx-auto mb-6">
      {header && (
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 rounded-t-lg">
          <h2 className="text-lg font-semibold text-gray-800">{header}</h2>
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {subtitle && <h4 className="text-md text-gray-600 mb-4">{subtitle}</h4>}
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Card;
