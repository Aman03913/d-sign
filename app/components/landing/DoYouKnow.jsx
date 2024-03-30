import React from "react";

export default function DoYouKnow() {
  return (
    <section className='py-12 px-6 lg:px-28'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl lg:text-4xl font-bold text-center mb-6 text-gray-800'>
          Do You Know?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='rounded-full flex justify-center items-center flex-col text-center shadow-2xl border-2 shadow-amber-900 h-[300px] w-[300px] animation-card'>
            <div className='p-4 rounded-full text-center'>
              <h3 className='text-md font-semibold text-center mb-2'>
                Worldwide spending on Blockchain solutions till 2019 was
              </h3>
              <p className='text-2xl font-bold text-center mb-2'>
                $2.7 Billion USD
              </p>
            </div>
          </div>
          <div className='rounded-full flex justify-center items-center flex-col text-center shadow-2xl border-2 shadow-green-900 h-[300px] w-[300px] animation-card'>
            <div className='p-4 rounded-full text-center'>
              <h3 className='text-md font-semibold text-center mb-2'>
                Share of companies in the consumer products and manufacturing
                industries currently using Blockchain is
              </h3>
              <p className='text-2xl font-bold text-center mb-2'>29%</p>
            </div>
          </div>
          <div className='rounded-full flex justify-center items-center flex-col shadow-2xl  border-2 shadow-emerald-900 h-[300px] w-[300px] p-4 animation-card'>
            <div className='p-4 rounded-full text-center'>
              <h3 className='text-2xl font-bold text-center mb-2'>71%</h3>
              <span className='text-md font-medium text-center mb-2'>
                of business leaders who are actively using Blockchain believe it
                plays a key role in advancing the technology, suggesting
                widespread support for industry standards.
              </span>
            </div>
          </div>
          <div className='rounded-full flex justify-center items-center flex-col shadow-2xl border-2 shadow-violet-900 h-[300px] w-[300px] p-4 animation-card'>
            <div className='p-4 rounded-full text-center'>
              <h3 className='text-md font-semibold text-center mb-2'>
                e-Signature transactions have ballooned from <br />{" "}
                <span className='text-2xl font-bold text-center mb-2'>
                  {" "}
                  $89 M to $754M{" "}
                </span>{" "}
                <br /> in just five years.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
