"use client"
import React, { useState } from "react";
import Document from "../../assets/icons/Document";
import History from "../../assets/icons/History";
import Signature from "../../assets/icons/Signature";
import Stamp from "../../assets/icons/Stamp";

export default function Challenges() {
  return (
    <div className="px-28 py-5 flex justify-center items-center text-center flex-col bg-gray-200">
      <h1 className="text-3xl font-bold mb-4">Challenges faced when documents are signed</h1>
      <div className="bg-gradient-to-r from-amber-700 to-pink-800 h-1 w-60  " />
      <p className="text-lg my-8">
        There are many frauds that take place when businesses make use of physical documents for agreements and other things.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.map((item) => (
          <div key={item.id} className="p-1.5 mx-auto shadow-xl shadow-inherit my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            <div className="bg-white p-5 rounded-lg ">
                <div className="flex justify-center items-center bg-gray-200 rounded-full w-16 h-16 mb-4">
              {item.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700">
              {item.paragraph.length > 50 ? `${item.paragraph.slice(0, 100)}...` : item.paragraph}
              {item.paragraph.length > 50 && <ReadMoreButton text={item.paragraph} />}
            </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

const ReadMoreButton = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <button
      onClick={handleClick}
      className="text-blue-500 hover:underline focus:outline-none ml-2"
    >
      {expanded ? "Read Less" : "Read More"}
    </button>
  );
};

const content = [
  {
    id: 1,
    icon: <Document />,
    title: "Docs. lacks integrity",
    paragraph:
      "Papers can be easily replaced and signatures can be forged when businesses use paper documents. Not sure if they are the actual ones and can be replaced with fake signatures anytime.",
  },
  {
    id: 2,
    icon: <Signature />,
    title: "False signature",
    paragraph:
      "Forging physical signatures can be done easily and one will not be able to verify the same. It makes it difficult to judge if the signature of the authorized person or someone else.",
  },
  {
    id: 3,
    icon: <Stamp />,
    title: "Docs. dependency",
    paragraph:
      "Because the documents dependency lies on the centralized authority there is delay and possibility that someone else makes the same and passes them over with increase in time and security concerns.",
  },
  {
    id: 4,
    icon: <History />,
    title: "No track of docs.",
    paragraph: "There is no track of the audit or the ownership of the documents. You will never from where exactly the documents have come, you must believe the person who delivers it to you.",
  },
];
