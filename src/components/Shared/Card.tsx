import React from 'react';


interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string; // Allow passing custom classes
  }
  
  const Card: React.FC<CardProps> = ({ title, children, className }) => {
    return (
      <div className={`p-6 rounded-lg shadow-lg ${className}`}>
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        {children}
      </div>
    );
  };
  
  export default Card;
