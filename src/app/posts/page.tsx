import React from 'react';
import Card from '../components/recent-post-card';

const Posts = () => {
  return (
    <>
      <section className="py-12 bg-[#b1efa3]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Recent Posts</h3>
            <button className="text-[#3e8b2d]  font-semibold hover:underline">View All</button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Card />
            </div>

            {/* Post Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Card />
            </div>

            {/* Post Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Card />
            </div>
          </div>
        </div>
      </section>

      {/* Second section for posts */}
      <section className="py-12 bg-[#b1efa3]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post Card 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Card />
            </div>

            {/* Post Card 5 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Card />
            </div>

            {/* Post Card 6 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Card />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
