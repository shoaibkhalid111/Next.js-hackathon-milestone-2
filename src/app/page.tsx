import React from "react";
import Image from "next/image";
import { Heebo } from "next/font/google";
import Card from "./components/recent-post-card";

const heebo = Heebo({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={`${heebo.className} bg-[#b1efa3] py-20`}>
        <div className="container mx-auto px-6">

          <div className="flex items-center justify-between gap-6">

            {/* Text Container */}
            <div className="flex flex-col gap-6 w-1/2">
              <h1 className="font-bold text-4xl text-[#333]">
                Hi, I am John, Creative Technologist
              </h1>
              <p className="text-[#555] text-lg font-normal">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="bg-[#3e8b2d] text-white px-6 py-2 text-lg font-medium cursor-pointer">
                Download resume
              </button>
            </div>

            {/* Image */}
            <div>
              <Image src="/image.png" width={200} height={200} alt="person" />
            </div>

          </div>

        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="bg-[#3e8b2d] py-20">
        <div className="container mx-auto px-6">

          <div className="flex flex-col gap-6">

            <div className="flex justify-between items-center">
              <h3 className="text-white text-2xl font-bold">Recent Post</h3>
              <button className="text-[#e1fbd7] text-lg font-medium">View All</button>
            </div>

            <div className="flex gap-6">
              <Card />
              <Card />
            </div>

          </div>

        </div>
      </section>

      {/* Featured Works Section */}
      <section className="bg-[#b1efa3] py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <h3 className="text-xl font-medium">Featured Works</h3>
            </div>

            <div className="flex flex-wrap gap-10 justify-center">
              {/* Card 1 */}
              <div className="w-72 bg-[#e1fbd7] p-6 flex flex-col gap-6">
                <Image src="/Rectangle-30.png" width={245} height={180} alt="work-1" />
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-xl">Designing Dashboards</h2>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#3e8b2d] text-white px-4 py-1 rounded-full">
                      <p className="text-sm">2020</p>
                    </div>
                    <p className="text-sm">Dashboard</p>
                  </div>
                  <p className="text-sm font-light">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-72 bg-[#e1fbd7] p-6 flex flex-col gap-6">
                <Image src="/Rectangle-32.png" width={245} height={180} alt="work-2" />
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-xl">Designing Dashboards</h2>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#3e8b2d] text-white px-4 py-1 rounded-full">
                      <p className="text-sm">2020</p>
                    </div>
                    <p className="text-sm">Dashboard</p>
                  </div>
                  <p className="text-sm font-light">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-72 bg-[#e1fbd7] p-6 flex flex-col gap-6">
                <Image src="/Rectangle-34.png" width={245} height={180} alt="work-3" />
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-xl">Designing Dashboards</h2>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#3e8b2d] text-white px-4 py-1 rounded-full">
                      <p className="text-sm">2020</p>
                    </div>
                    <p className="text-sm">Dashboard</p>
                  </div>
                  <p className="text-sm font-light">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
