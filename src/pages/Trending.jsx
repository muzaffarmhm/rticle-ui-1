import React from "react";
import Navbar from "../components/Navbar";
import BlogTemplate from "../components/BlogTemplate";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer"

export default function Trending() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col text-center w-full my-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-800">
            Check out the trending blogs here!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            debitis molestias ipsa quis, omnis porro adipisci libero a in!
            Impedit vel odio suscipit debitis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Alias cumque aliquam repudiandae,
            laborum molestiae et ipsa provident placeat nulla quisquam tempore,
            id, porro architecto!
          </p>
        </div>
      <div className="container mx-auto flex flex-wrap py-6 ">
        <section className="w-full flex flex-col items-center px-3">
          <BlogTemplate
            category="trend technology"
            title="Top 10 Technology Blogs You Must Subscribe to in 2021"
            author="Author Name"
            date="1st July 2021"
            meta="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis praesentium reprehenderit dolores illo, maxime earum amet tenetur voluptates esse provident, temporibus magnam omnis."
          />
          <BlogTemplate
            category="trend Travel"
            title="Top 10 Travel Blogs of India"
            author="Author Name"
            date="12th July 2021"
            meta="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis praesentium reprehenderit dolores illo, maxime earum amet tenetur voluptates esse provident, temporibus magnam omnis."
          />
          
          <BlogTemplate
            category="trend pancake"
            title="5 Methods to make pancake"
            author="Author Name"
            date="12th July 2021"
            meta="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis praesentium reprehenderit dolores illo, maxime earum amet tenetur voluptates esse provident, temporibus magnam omnis."
          />
          

          <Pagination />
        </section>
      </div>
        <Footer/>
    </div>
  );
}
