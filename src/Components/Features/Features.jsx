import React from "react";
import { Link } from "react-router-dom";

function Features({ cards = [1, 2, 3] }) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto" bis_skin_checked="1">
          <div
            className="flex flex-col text-center w-full mb-20"
            bis_skin_checked="1"
          >
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Categories
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Product Categories
            </h1>
          </div>
          <div className="flex flex-wrap -m-4" bis_skin_checked="1">
            {cards?.map((card) => {
              return (
                <Link
                  to={`/categories/${card}`}
                  className="p-4 md:w-1/3 cursor-pointer"
                >
                  <div
                    className="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
                    bis_skin_checked="1"
                  >
                    <div
                      className="flex items-center mb-3"
                      bis_skin_checked="1"
                    >
                      <div
                        className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"
                        bis_skin_checked="1"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium uppercase">
                        {card || "Example Card"}
                      </h2>
                    </div>
                    <div className="flex-grow" bis_skin_checked="1">
                      <p className="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
