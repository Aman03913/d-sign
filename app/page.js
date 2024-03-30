import HeroSection from "./components/landing/Herosection";
import BlockchainTechnology from "./components/landing/BlockchainTechnology";
import DoYouKnow from "./components/landing/DoYouKnow";
import Challenges from "./components/landing/Challenges";
import backgroundImage from "./assets/banner.webp";
import Image from "next/image";
import Benefits from "./components/landing/Benefits";
import ContactForm from "./components/form/ContactForm";
export default function Home() {
  return (
    <main className=''>
      <HeroSection />
      <BlockchainTechnology />
      <DoYouKnow />
      <Challenges />
      <div className='relative h-96 bg-cover bg-center'>
        <Image
          src={backgroundImage}
          alt='Background'
          fill={true}
          className='object-cover w-full h-full'
          quality={100}
        />
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='text-white text-center px-4'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
              Blockpen
            </h2>
            <p className='text-lg md:text-xl lg:text-2xl'>
              A Blockchain-based solution allowing users to digitally sign
              confidential documents with the Blockchain technology. This
              technology is known for high security and safeguards each document
              signed, letting them be unique and unforced.
            </p>
          </div>
        </div>
      </div>
      <Benefits />
      <section
        className='px-20  py-10'
        id='contact'
      >
        <ContactForm />
      </section>
    </main>
  );
}
