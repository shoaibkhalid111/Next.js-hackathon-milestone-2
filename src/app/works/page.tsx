import React from 'react';
import Image from 'next/image';

const works = () => {
  return (
    <>
      <section className="py-12 bg-[#b1efa3]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Featured Works</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Work Card 1 */}
            <div className="bg-[#e1fbd7] shadow-lg rounded-lg overflow-hidden">
              <Image src="/Rectangle-30.png" width={245} height={180} alt="work-1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">Designing Dashboards</h2>
                <div className="flex items-center mt-2 text-gray-600">
                  <span className="bg-green-100 text-green-800 px-2 py-1 text-sm rounded-full">2020</span>
                  <span className="ml-4">Dashboard</span>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
              </div>
            </div>

            {/* Work Card 2 */}
            <div className="bg-[#e1fbd7] shadow-lg rounded-lg overflow-hidden">
              <Image src="/Rectangle-32.png" width={245} height={180} alt="work-2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">Designing Dashboards</h2>
                <div className="flex items-center mt-2 text-gray-600">
                  <span className="bg-green-100 text-green-800 px-2 py-1 text-sm rounded-full">2020</span>
                  <span className="ml-4">Dashboard</span>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
              </div>
            </div>

            {/* Work Card 3 */}
            <div className="bg-[#e1fbd7] shadow-lg rounded-lg overflow-hidden">
              <Image src="/Rectangle-34.png" width={245} height={180} alt="work-3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">Designing Dashboards</h2>
                <div className="flex items-center mt-2 text-gray-600">
                  <span className="bg-green-100 text-green-800 px-2 py-1 text-sm rounded-full">2020</span>
                  <span className="ml-4">Dashboard</span>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
              </div>
            </div>
          </div>
        </div>

        </section>

        </>
  )
}
        
export default works        
