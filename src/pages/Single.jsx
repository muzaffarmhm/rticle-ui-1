import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PostTemplateSkin from "../components/PostTemplateSkin";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
export default function single({
  title,
  coverPic,
  authorName,
  date,
  content,
  category,
  author,
}) {
  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });
  return (
    <div>
      <Navbar />
      <div class="mx-auto flex flex-wrap pt-6 px-20 bg-gray-200">
        <section class=" flex flex-col items-center px-3">
          <article class="flex flex-col shadow my-4">
            <div className="pa-10">
              <a href="#" class="hover:opacity-75">
                <img src={coverPic} />
              </a>
            </div>
            <div class="bg-white flex flex-col justify-start p-6">
              <a
                href="#"
                class="text-blue-700 text-sm font-bold uppercase pb-4"
              >
                {category}
              </a>
              <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">
                {title}
              </a>
              <p href="#" class="text-sm pb-8">
                By{" "}
                <a href="#" class="font-semibold hover:text-gray-800">
                  {author}
                </a>
                , Published on April 25th, 2020
              </p>
              <ThemeProvider theme={myTheme}>
                <MUIRichTextEditor
                  label="Type something here..."
                  defaultValue={content}
                  readOnly={true}
                  toolBar={false}
                  inlineToolbar={true}
                />
              </ThemeProvider>
            </div>
          </article>
        </section>
      </div>

      <div className="mx-auto flex flex-wrap p-6 px-20 bg-gray-200">
        <section className="text-gray-600 body-font bg-white w-full">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-indigo-500" />
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-3/5 text-gray-900 font-medium title-font text-2xl">
                  Recommended Blogs
                </h1>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <PostTemplateSkin
                category="Food"
                title="Foods you missed to eat!"
                text="I don't know about you, but I can't wait until I can enjoy a juicy burger and fries while dining with friends inside an actual restaurant again. And it looks like I'm not alone."
                views="1.3k"
                commentsCount="41"
              />
              <PostTemplateSkin
                category="Technology"
                title="Upcoming latest technologies"
                text="Technology today is evolving at such a rapid pace, enabling faster change and progress, causing an acceleration of the rate of change, until eventually, it will become exponential. "
                views="2.3k"
                commentsCount="110"
              />
              <PostTemplateSkin
                category="Travel"
                title="Top 5 places to visit this summer!"
                text="Summer has arrived, so you need to make immediate plans for a perfect summer holiday in India. India spoils visitors with exciting choices for a summer vacation ."
                views="1.3k"
                commentsCount="36"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
