"use client"

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const AccordionApp = () => {

  const hiddenTexts = [
    { label: ' added w-full to the main div wrapping the accordion and inside the AccordionItem component. This ensures that the accordion stretches across the full.', value: 'Text of Accordion 1' },
    { label: 'Button 2', value: 'Text of Accordion 2' },
    { label: 'Button 3', value: 'Text of Accordion 3' },
    { label: 'Button 4', value: 'Text of Accordion 4' }
  ];

  return (
    <div className="w-full">
      <Accordion hiddenTexts={hiddenTexts} />
    </div>
  );
};

const Accordion = ({ hiddenTexts }) => {
  return (
    <div className="w-full mr-12 space-y-4">
      {hiddenTexts.map((hiddenText) => (
        <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />
      ))}
    </div>
  );
};

const AccordionItem = ({ hiddenText }) => {
  const [visibility, setVisibility] = useState(false);

  const handleToggleVisibility = () => {
    setVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="border-b border-gray-300 mt-10">
      <button
        className="w-full flex items-center justify-between p-4 text-lg font-medium hover:bg-gray-100 focus:outline-none"
        onClick={handleToggleVisibility}
      >
        <span>{hiddenText.label}</span>
        <span
          className={`text-xl ${visibility ? 'transform rotate-180' : ''}`}
        >
          {visibility ? '-' : '+'}
        </span>
      </button>
      <p
        className={`transition-all duration-300 overflow-hidden ${visibility ? 'max-h-screen py-4' : 'max-h-0 py-0'}`}
      >
        {hiddenText.value}
      </p>
    </div>
  );
};

export default AccordionApp;
