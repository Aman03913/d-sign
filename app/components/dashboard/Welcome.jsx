"use client";
import React, { useState } from "react";
import { Button, Avatar } from "@nextui-org/react";
import { FileDrop } from "react-file-drop";
import SignatureCanvas from "react-signature-canvas";
import { useAuth } from "@arcana/auth-react";

const Welcome = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [signatureRef, setSignatureRef] = useState(null);

  const handleFileDrop = (files) => {
    // Process dropped files
    // Add files to the uploadedFiles state
    if (Array.isArray(files)) {
      const newFiles = files.map((file) => ({
        id: Math.random(),
        name: file.name,
        size: file.size,
      }));
      // Add new files to the uploadedFiles state
      setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleSaveSignature = () => {
    const signatureData = signatureRef.toDataURL();
    // Save signature data to use for signing files

    // Clear the signature canvas
    signatureRef.clear();
  };
  const { loading, isLoggedIn, connect, user } = useAuth();
  const handleSignFile = (file) => {
    console.log(`File "${file.name}" has been signed successfully.`);
  };
  console.log(user);
  return (
    <div className='min-h-screen  flex flex-col'>
      {/* Avatar component at top left */}
      <div className='p-4 flex-col flex'>
        hello,
        <span>{user?.email}</span>
        <span>{user?.publicKey.slice(0, 32)}</span>
        <Avatar
          src='/avatar.jpg' // Add the path to your avatar image
          size='medium'
        />
      </div>

      {/* Main content */}
      <div className='flex-grow p-4'>
        <h1 className='text-3xl font-bold mb-4'>Dashboard</h1>

        {/* File upload section */}
        <FileDrop
          onDrop={handleFileDrop}
          className='border border-dotted rounded-lg '
        >
          <div className='p-4 bg-white  shadow-md h-[500px]  cursor-pointer'>
            Drag and drop files here
          </div>
        </FileDrop>

        {/* List of uploaded files */}
        {uploadedFiles.map((file) => (
          <div
            key={file.id}
            className='flex items-center justify-between p-4 bg-white rounded-lg shadow-md mt-4'
          >
            <div>
              <p>{file.name}</p>
              <p>{file.size}</p>
            </div>
            <Button onClick={() => handleSignFile(file)}>Sign File</Button>
          </div>
        ))}

        {/* Signature canvas */}
        <div className='mt-4'>
          <SignatureCanvas ref={(ref) => setSignatureRef(ref)} />
          <Button
            onClick={handleSaveSignature}
            className='mt-2'
          >
            Save Signature
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
