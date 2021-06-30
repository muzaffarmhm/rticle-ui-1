import React from "react";
import Navbar from "../components/Navbar";
import AboutUsTemplate from "../components/AboutUsTemplate";

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-800">
            Our Team
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

        <AboutUsTemplate
          titlename="HariHaran | Founder"
          name="Hari"
          post="Developer"
          story="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit quisquam possimus ut rem temporibus esse velit blanditiis, deserunt, cum, eum fuga laborum obcaecati."
          image="https://dummyimage.com/600x500/d9ccd9/ffffff"
          facebook=""
          twitter=""
          linkedin=""
          github=""
        />
        <AboutUsTemplate
          titlename="Muzaffar Pasha | Founder"
          name="Pasha"
          post="Developer"
          story="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti reprehenderit quisquam possimus ut rem temporibus esse velit blanditiis, deserunt, cum, eum fuga laborum obcaecati."
          image="https://dummyimage.com/600x500/d9ccd9/ffffff"
          facebook=""
          twitter=""
          linkedin=""
          github=""
        />
      </section>
    </div>
  );
}
