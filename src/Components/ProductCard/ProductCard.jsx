import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ products = [] }) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => {
              console.log(product, "product");
              const { id, title, price, description, category, image } =
                product;
              return (
                <>
                  <Link
                    to={`/SingleProduct/${id}`}
                    className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer"
                    bis_skin_checked="1"
                  >
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt={title}
                        className="object-contain object-center w-full h-full block"
                        src={image}
                      />
                    </a>
                    <div className="mt-4" bis_skin_checked="1">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                        {category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {title}
                      </h2>
                      <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                        <p className="font-bold text-xl">{price}$</p>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
