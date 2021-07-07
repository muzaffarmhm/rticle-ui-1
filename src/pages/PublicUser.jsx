import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function User(props) {
  return (
    <div>
      <navbar>
        <div id="__next">
          <main className="profile-page">
            <section className="relative block" style={{ height: 500 }}>
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")',
                }}
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-50 bg-black"
                />
              </div>
              <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style={{ height: 70 }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x={0}
                  y={0}
                >
                  <polygon
                    className="text-blueGray-200 fill-current"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            <section className="relative py-16 bg-blueGray-200">
              <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div className="relative">
                          <img
                            alt="..."
                            src
                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                            style={{ maxWidth: 150 }}
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div className="px-3 mt-20 sm:mt-10" />
                      </div>
                      <div className="w-full lg:w-4/12 px-4 pt-4 lg:order-1">
                        <div className="flex justify-center lg:pt-4 pt-8">
                          <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                              22
                            </span>
                            <span className="text-sm text-blueGray-400">
                              Posts
                            </span>
                          </div>
                          <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                              10
                            </span>
                            <span className="text-sm text-blueGray-400">
                              UpVotes
                            </span>
                          </div>
                          <div className="lg:mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                              89
                            </span>
                            <span className="text-sm text-blueGray-400">
                              abc
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                        {"{"}props.name{"}"}
                      </h3>
                      <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                        {props.name}
                      </div>
                      <div className="mb-2 text-blueGray-600 mt-10">
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                        {props.work}
                      </div>
                      <div className="mb-2 text-blueGray-600">
                        <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                        {props.study}
                      </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                          <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                            {props.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        <footer></footer>
      </navbar>
    </div>
  );
}
