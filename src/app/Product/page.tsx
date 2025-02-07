import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Productinfo {
  id: number;
  name: string;
  discountPrice: string; // Corrected typo
  originalPrice: string; // Corrected typo
  image: string;
}

const chairsArray = [
  {
    id: 1,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p1.png",
  },
  {
    id: 2,
    name: "Elbaot Chair",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p2.png",
  },
  {
    id: 3,
    name: "Notoe Fex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p3.png",
  },
  {
    id: 4,
    name: "Cartel Pixel",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p4.png",
  },
  {
    id: 5,
    name: "Iron Wood chair",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p5.png",
  },
  {
    id: 6,
    name: "Crystal Clear Chair",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p6.png",
  },
  {
    id: 7,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p7.png",
  },
  {
    id: 8,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p8.png",
  },
  {
    id: 9,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p9.png",
  },
  {
    id: 10,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p10.png",
  },
  {
    id: 11,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p11.png",
  },
  {
    id: 12,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p12.png",
  },
  {
    id: 13,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p13.png",
  },
  {
    id: 14,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p14.png",
  },
  {
    id: 15,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p15.png",
  },
  {
    id: 16,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p16.png",
  },
];

const Page = () => {
  return (
    <div>
      <div className="sm:h-[250px] h-[150px] items-center w-full bg-white flex sm:justify-start justify-center">
        <div className="sm:ml-36 text-center sm:text-left">
          <h1 className="text-black sm:text-4xl text-2xl font-bold">
            Shop Grid Default
          </h1>
          <p className="text-sm text-black sm:text-base">
            Home . Pages .{" "}
            <span className="text-purple-600">Shop Grid Default</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center bg-blue-400 py-[100px]">
        <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between bg-blue-400 items-center sm:items-start">
          <div className="text-white text-sm text-center  sm:text-left mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-white">
              Ecommerce Accessories & Fashion item{" "}
            </h1>
            About 9620 results (0.62 seconds)
          </div>
          <div className="text-white flex flex-col bg-blue-400 sm:flex-row gap-4 sm:gap-10 text-sm">
            <div className="flex items-center">
              Per Page:{" "}
              <input
                type="text"
                 id="perPage"
                className="w-[60px] border border-gray-300 ml-2"
              />
            </div>
            <div className="flex items-center">
              Sort By:{" "}
              <input
                type="text"
                placeholder="Best Match"
                className="w-[90px] border border-gray-300 ml-2"
              />
            </div>  
            <div className="flex items-center">
              View:{" "}
              <input
                type="text"
                className="w-[150px] border border-gray-300 ml-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-blue-400 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  bg-blue-400 lg:grid-cols-4 gap-8 w-full max-w-5xl">
          {chairsArray.map((product: Productinfo) => (
            <div
              key={product.id} // Use product.id as key instead of index
              className="text-white h-[320px] w-full box-border hover:border hover:border-blue-950 text-center items-center space-y-1"
            >
              <Link href={`/productdetails/${product.id}`}>
                <div className="flex justify-center items-center h-[250px]">
                  <Image
                    src={product.image}
                    alt="Chair"
                    width={300}
                    height={300}
                  />
                </div>
                <p className="text-lg font-bold">{product.name}</p>
                <p>
                  {product.discountPrice}{" "}
                  <span className="line-through text-green-600">
                    {product.originalPrice}
                  </span>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

  

