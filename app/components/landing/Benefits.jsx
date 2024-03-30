"use client";
import Contract from "../../assets/icons/Contract";
import Integrity from "../../assets/icons/Integrity";
import Security from "../../assets/icons/Security";
import Tracking from "../../assets/icons/Tracking";
import React, { useState } from "react";

const Benefits = () => {
  return (
    <div className='px-28 py-5 flex justify-center items-center text-center flex-col bg-gray-200'>
      <h1 className='text-3xl font-bold mb-4'>
        Benefits for legal departments
      </h1>
      <div className='bg-gradient-to-r from-amber-700 to-pink-800 h-1 w-60  ' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {content.map((item) => (
          <div
            key={item.id}
            className='p-1.5 mx-auto shadow-xl shadow-inherit my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'
          >
            <div className='bg-white p-5 rounded-lg '>
              <div className='flex justify-center items-center bg-gray-200 rounded-full w-16 h-16 mb-4'>
                {item.icon}
              </div>
              <h2 className='text-xl font-semibold mb-2'>{item.title}</h2>
              <p className='text-gray-700'>
                {item.paragraph.length > 50
                  ? `${item.paragraph.slice(0, 100)}...`
                  : item.paragraph}
                {item.paragraph.length > 50 && (
                  <ReadMoreButton text={item.paragraph} />
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;

const ReadMoreButton = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <button
      onClick={handleClick}
      className='text-blue-500 hover:underline focus:outline-none ml-2'
    >
      {expanded ? "Read Less" : "Read More"}
    </button>
  );
};
const content = [
  {
    id: 1,
    icon: <Integrity />,
    title: "Integrity",
    paragraph:
      "Documents stored on Blockchain which is built on dependability, transparency, honesty and trust. Once the document is uploaded and signed the system ensures to save a copy of each, documents with and without the sign. It offers high level of security where no tampering can be done with the documents.",
  },
  {
    id: 2,
    icon: <Contract />,
    title: "Smart contracts",
    paragraph:
      "With Blockchain businesses can make smart contracts that can be signed from anywhere across the globe. There is no delay in the execution and updating of the contracts. Signatures can be arranged in order and only once its signed in order the others will be able to sign.",
  },
  {
    id: 3,
    icon: <Tracking />,
    title: "Tracking and tracing",
    paragraph:
      "Blockchain makes it easy to trace and track the documents sent for signatures. You can easily track who has signed it and whose signature is pending to complete the documentation process.",
  },
  {
    id: 4,
    icon: <Security />,
    title: "Security against fraud",
    paragraph:
      "Blockchain is known for the high-level security it provides to all its users and the solutions that are built on it. It will not allow any kind of tampering to be done and keeps a record of every activity done with a single document. Every single step is recorded with Blockchain.",
  },
];
