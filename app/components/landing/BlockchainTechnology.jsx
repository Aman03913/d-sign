import { Button } from "@nextui-org/react";

export default function BlockchainTechnology() {
  return (
    <section className="bg-gray-100 py-12 px-6 lg:px-28">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6 text-gray-800">
        About Blockchain Technology
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Blockchain technology has transformed the landscape of digital signatures by ensuring the legality, unforgeability, and immutability of documents. Utilizing decentralized and distributed ledger technology, blockchain offers unparalleled security, making it virtually impossible to tamper with or alter signed documents without detection.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        The adoption of blockchain technology across various industries is a testament to its reliability and effectiveness in safeguarding sensitive data and transactions. Its transparent and decentralized nature instills trust and confidence in digital signatures, paving the way for a more secure and efficient document signing process.
      </p>
      <div className="flex justify-center">
        <Button variant="bordered" color="secondary">Learn More</Button>
      </div>
    </div>
  </section>
  );
}
