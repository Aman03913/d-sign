"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Hero from "../../assets/Hero.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className='relative w-full min-h-[89vh] flex justify-center items-center mx-auto px-6 lg:px-28'>
      <div className='z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center h-full relative'>
        <div>
          <h1 className='text-4xl transition-colors duration-200 ease-in-out lg:text-5xl py-5 text-start font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
            Document signing platform with the security of Blockchain technology
          </h1>
          <p className='text-center mt-1 text-xl text-gray-800'>
            &#34;Sign documents with the security of Blockchain technology&#34;
            <br />
            <span className='text-4xl font-semibold  bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 bg-clip-text text-transparent'>
              {" "}
              FAST,
            </span>
            <span className='text-4xl font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-green-500'>
              SECURE,{" "}
            </span>{" "}
            &amp; &nbsp;
            <span className='text-4xl font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-green-500'>
              EASY TO USE
            </span>
          </p>
          <div className='flex justify-center mt-4'>
            <Button
            as={Link}
            href="/#contact"
              className='flex justify-center'
              variant='solid'
              color='secondary'
            >
              Request A Demo
            </Button>
          </div>
        </div>
        <div className='flex justify-center  '>
          <Image
            src={Hero}
            alt='Hero'
            width={500} // adjust width according to your design
            height={400} // adjust height according to your design
            className='shadow-medium p-8  rounded-3xl'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
