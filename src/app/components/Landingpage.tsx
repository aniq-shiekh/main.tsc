import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaVanShuttle } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";
import { PiMedalDuotone } from "react-icons/pi";
import { FaPhone } from "react-icons/fa";

interface Product {
  name: string;
  code: string;
  price: string;
  image: string;
}

const chairsofArray = [
  {
    name: "Cantilever chair",
    code: "Code Y2043942",
    price: "$42.00",
    image: "/c1.png",
  },
  {
    name: "Cantilever chair",
    code: "Code Y2043942",
    price: "$42.00",
    image: "/c2.png",
  },
  {
    name: "Cantilever chair",
    code: "Code Y2043942",
    price: "$42.00",
    image: "/c3.png",
  },
  {
    name: "Cantilever chair",
    code: "Code Y2043942",
    price: "$42.00",
    image: "/c4.png",
  },
];

const blogs = [
  {
    text: "Saber Ali",
    date: "21 August 2021",
    title: "Top Essential Trends in 2024",
    description:
      "Transformez votre espace avec des meubles élégants et confortables – parce que chaque maison mérite le meilleur !",
    image: "/b1.png",
    read: "Read more",
  },
  {
    text: "Saber Ali",
    date: "21 August 2021",
    title: "Top Essential Trends in 2024",
    description:
      "Transformez votre espace avec des meubles élégants et confortables – parce que chaque maison mérite le meilleur !",
    image: "/b2.png",
    read: "Read more",
  },
  {
    text: "Saber Ali",
    date: "21 August 2021",
    title: "Top Essential Trends in 2024",
    description:
      "Transformez votre espace avec des meubles élégants et confortables – parce que chaque maison mérite le meilleur !",
    image: "/b3.png",
    read: "Read more",
  },
];
const Landingpage = () => {
  return (
    <div className="bg-white relative">
      <div className="bg-blue-400 w-full sm:flex sm:justify-center sm:items-center h-auto text-black sm:py-16 py-10 px-4">
        <div className="flex justify-center sm:absolute sm:top-0 sm:-left-8">
          <Image src={"/lamp.png"} alt="Lamp" height={300} width={300} />
        </div>

        <div className="sm:mr-10 max-w-lg mx-auto mt-10 gap-4 text-center sm:text-left">
          <p className="text-white text-[14px]">
          Discover the finest furniture to make your home truly exceptional!
          </p>
          <h1 className="text-[43px] font-bold">
            Best Furniture Collection Of The Year 2024
          </h1>
          <p className="text-white text-[14px]">
          Transformez votre espace avec des meubles élégants et confortables – parce
          -que chaque maison mérite le meilleur !
          </p>
          <button className="w-[145px] rounded-sm mt-3 h-[42px] bg-purple-400 text-slate-100 font-sans">
            <Link href={'/Product'}>Shop Now</Link> 
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <Image src={"/chair.png"} alt="chair" height={540} width={540} />
        </div>
      </div>

      <h1 className="font-bold text-[40px] text-center mt-20 mb-2 text-black">
        Suggested Products
      </h1>
      <Link href={'/Product'}>
      <div className="flex flex-wrap items-center gap-4 justify-center">
        {chairsofArray.map((product: Product, index: number) => (
          <div
            key={index}
            className="h-[320px] w-[230px] shadow-lg text-center space-y-1"
          >
            <div className="bg-[#F2F0FF] h-[220px] w-full pt-2 flex justify-center items-center">
              <Image src={product.image} alt="chair" height={150} width={200} />
            </div>
            <p className="text-purple-400 text-[20px] font-bold">
              {product.name}
            </p>
            <p className="text-black text-[16px] font-bold">
              {product.code}
            </p>
            <p className="text-[16px] font-bold text-green-700">{product.price}</p>
          </div>
        ))}
      </div>
      </Link>

      <h1 className="font-bold text-black text-[40px] text-center mt-20 mb-2">
        Latest Products
      </h1>
      <div className="flex justify-center">
        <ul className="text-black flex sm:gap-8 gap-4 font-bold">
          <li>New Arrival</li>
          <li>Best Seller</li>
          <li>Featured</li>
          <li>Special Offer</li>
        </ul>
      </div>

      <Link href={'/Product'}>
      <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
        <div className="w-[360px] h-[306px] font-bold">
          <div className="w-full h-[270px] bg-[#F2F0FF] flex justify-center items-center">
            <Image src={"/c5.png"} alt="Chairs" height={280} width={250} />
          </div>
          <div className="flex justify-between px-3 text-black">
            <p>Handy Craft</p>
            <p>
              $42.00 <span className="line-through text-green-600">$65.00</span>
            </p>
          </div>
        </div>

        <div className="w-[360px] h-[306px] font-bold">
          <div className="w-full h-[270px] bg-[#F2F0FF] flex justify-center items-center">
            <Image src={"/c6.png"} alt="Chairs" height={280} width={250} />
          </div>
          <div className="flex justify-between px-3 text-black">
            <p>Handy Craft</p>
            <p>
              $42.00 <span className="line-through text-green-600">$65.00</span>
            </p>
          </div>
        </div>

        <div className="w-[360px] h-[306px] font-bold">
          <div className="w-full h-[270px] bg-[#F2F0FF] flex justify-center items-center">
            <Image src={"/c2.png"} alt="Chairs" height={280} width={250} />
          </div>
          <div className="flex justify-between px-3 text-black">
            <p>Handy Craft</p>
            <p>
              $42.00 <span className="line-through text-green-600">$65.00</span>
            </p>
          </div>
        </div>
      </div>
      </Link>


      <Link href={'/Product'}>
      <div className="flex flex-wrap justify-center items-center mt-20 gap-3">
        <div className="w-[360px] h-[306px] font-bold">
          <div className="w-full h-[270px] bg-[#F2F0FF] flex justify-center items-center">
            <Image src={"/c7.png"} alt="Chairs" height={280} width={250} />
          </div>
          <div className="flex justify-between px-3 text-black">
            <p>Handy Croft</p>
            <p>
              $42.00 <span className="line-through text-green-600">$65.00</span>
            </p>
          </div>
        </div>

        <div className="w-[360px] h-[306px] font-bold">
          <div className="w-full h-[270px] bg-[#F2F0FF] flex justify-center items-center">
            <Image src={"/c2.png"} alt="Chairs" height={280} width={250} />
          </div>
          <div className="flex justify-between px-3 text-black">
            <p>Handy Craft</p>
            <p>
              $42.00 <span className="line-through text-green-600">$65.00</span>
            </p>
          </div>
        </div>

        <div className="w-[360px] h-[306px] font-bold">
          <div className="w-full h-[270px] bg-[#F2F0FF] flex justify-center items-center">
            <Image src={"/c6.png"} alt="Chairs" height={280} width={250} />
          </div>
          <div className="flex justify-between px-3 text-black">
            <p>Handy Craft</p>
            <p>
              $42.00 <span className="line-through text-green-600">$65.00</span>
            </p>
          </div>
        </div>
      </div>
    </Link>

      <h1 className="font-bold text-black text-[40px] text-center mt-20 mb-2">
        What Shopex Offer!
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-5">
        <div className="text-center content-center w-[270px] h-[320px] shadow-xl gap-5 text-purple-400">
          <div className="flex justify-center my-6">
            <FaVanShuttle size={30} />
          </div>
          <h2 className="font-bold text-black text-base">24/7 Support</h2>
          <p className="text-gray-500 px-4 mt-3">
          Transformez votre espace avec des meubles élégants et confortables
          – parce que chaque maison mérite le meilleur !
          </p>
        </div>

        <div className="text-center content-center w-[270px] h-[320px] shadow-xl gap-5 text-purple-400">
          <div className="flex justify-center my-6">
            <HiCurrencyDollar size={30} />
          </div>
          <h2 className="font-bold text-black text-base">24/7 Support</h2>
          <p className="text-gray-500 px-4 mt-3">
          Transformez votre espace avec des meubles élégants et confortables
           – parce que chaque maison mérite le meilleur !
          </p>
        </div>

        <div className="text-center content-center w-[270px] h-[320px] shadow-xl gap-5 text-purple-400">
          <div className="flex justify-center my-6">
            <PiMedalDuotone size={30} />
          </div>
          <h2 className="font-bold text-black text-base">24/7 Support</h2>
          <p className="text-gray-500 px-4 mt-3">
          Transformez votre espace avec des meubles élégants et confortables
          – parce que chaque maison mérite le meilleur !
          </p>
        </div>

        <div className="text-center content-center w-[270px] h-[320px] shadow-xl gap-5 text-purple-400">
          <div className="flex justify-center my-6">
            <FaPhone size={30} />
          </div>
          <h2 className="font-bold text-black text-base">24/7 Support</h2>
          <p className="text-gray-500 px-4 mt-3">
          Transformez votre espace avec des meubles élégants et confortables
           – parce que chaque maison mérite le meilleur !
          </p>
        </div>
      </div>

      <div className="w-full h-auto bg-[#F1F0FF] mt-20 flex flex-wrap justify-center items-center py-10">
        <div className="flex justify-center sm:ml-36">
          <Image src={"/sofa.png"} alt="sofa" height={480} width={480} />
        </div>

        <div className="w-full max-w-lg mx-auto text-center sm:text-left">
          <h1 className="font-bold text-black text-[35px]">
            Unique Features of latest & Trending Products
          </h1>
          <p className="text-gray-500 py-3">
          Transformez votre espace avec des meubles élégants et confortables 
          – parce que chaque maison mérite le meilleur !
          </p>
          <div className="flex gap-4 justify-center sm:justify-start">
            <button className="bg-purple-400 h-[43px] w-[140px] text-slate-100">
              <Link href={'/Cart'}>Add To Cart</Link>
            </button>
            <p className="font-bold text-green-700">
              B&B Italian Sofa <br /> $32.00
            </p>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-black text-[40px] text-center mt-20 mb-2">
        Trending Products
      </h1>

      <Link href={'/Product'}>
      <div className="flex flex-wrap items-center gap-4 justify-center">
        {chairsofArray.map((product: Product, index: number) => (
          <div
            key={index}
            className="h-[340px] w-[280px] shadow-lg text-center content-center space-y-1 bg-white"
          >
            <div className="bg-purple-400 h-[240px] px-4 w-[92%] ml-3 pt-2 flex justify-center items-center">
              <Image src={product.image} alt="chair" height={150} width={200} />
            </div>
            <p className="text-black text-[20px] font-bold py-3">
              {product.name}
            </p>
            <p className="text-[16px] text-green-700 font-bold">
              {product.price}{" "}
              <span className="line-through text-green-700 ml-3">$40.00</span>
            </p>
          </div>
        ))}
      </div>
      </Link>

      <div className="flex flex-wrap gap-4 justify-center mt-10">
        <div className="w-[380px] h-[300px] bg-purple-400 shadow-md">
          <h1 className="text-black text-[25px] py-3 ml-6 font-bold">
            23% off in all products
          </h1>
          <p className="text-slate-500 text-base underline ml-6">Shop Now</p>
          <div className="flex justify-end mt-3 mr-3">
            <Image src={"/chair.png"} alt="chair" height={200} width={200} />
          </div>
        </div>

        <div className="w-[380px] h-[300px] bg-purple-400 shadow-md">
          <h1 className="text-black text-[25px] py-3 ml-6 font-bold">
            23% off in all products
          </h1>
          <p className="text-slate-500 text-base underline ml-6">Shop Now</p>
          <div className="flex justify-end mt-3 mr-3">
            <Image src={"/c4.png"} alt="chair" height={200} width={200} />
          </div>
        </div>

        <div className="w-[380px] h-[300px] flex flex-col justify-between">
          <div className="flex items-center font-bold gap-3">
            <Image
              src={"/c1.png"}
              alt="chair"
              height={100}
              width={90}
              className="bg-purple-400"
            />
            <h3 >
              Executive Seat Chair <br />{" "}
              <span className="text-green-700 line-through">$32.00</span>
            </h3>
          </div>
          <div className="flex font-bold items-center gap-3">
            <Image
              src={"/c2.png"}
              alt="chair"
              height={100}
              width={90}
              className="bg-purple-400"
            />
            <h3>
              Executive Seat Chair <br />{" "}
              <span className="text-green-700 line-through">$32.00</span>
            </h3>
          </div>
          <div className="flex font-bold items-center gap-3">
            <Image
              src={"/c3.png"}
              alt="chair"
              height={100}
              width={90}
              className="bg-purple-400"
            />
            <h3>
              Executive Seat Chair <br />{" "}
              <span className="text-green-700 line-through">$32.00</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h1 className="text-3xl text-black font-bold text-center">
          Discount Item
        </h1>
        <div className="flex justify-center py-6">
          <ul className="flex gap-5 text-black font-bold">
            <li className="underline">Wood Chair</li>
            <li>Plastic Chair</li>
            <li>Sofa Collection</li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-center items-center py-8">
          <div className="w-full max-w-lg mx-auto text-center sm:text-left space-y-7">
            <h1 className="text-3xl text-black font-bold">
              20% Discount Of All Products
            </h1>
            <p className="text-blue-400 font-bold">Eams Sofa Compact</p>
            <p className="text-blue-400">
            Transformez votre espace avec des meubles élégants et confortables </p>
            <div className="text-blue-700 flex gap-14">
              <div className="space-y-3">
                <p>Material Expose Like Metals</p>
                <p>Clear Line And Geomatric Figures</p>
              </div>
              <div className="space-y-3">
                <p>Simple Natural Colors</p>
                <p>Material Expose Like Metals</p>
              </div>
            </div>
            <button className="w-[145px] rounded-sm mt-3 h-[42px] bg-purple-400 text-slate-100 font-sans">
              <Link href={'/Product'}>Shop Now</Link>
            </button>
          </div>

          <div className="flex justify-center sm:pr-24">
            <Image src={"/chair.png"} alt="chair" height={400} width={400} />
          </div>
        </div>
      </div>

      <h1 className="text-3xl text-black font-bold text-center my-5">
        Top Categories
      </h1>
      <div className="flex flex-wrap justify-center gap-6 my-10">
        <div className="text-green-700 h-[280px] w-[280px] text-center">
          <div className="h-[280px] w-[280px] shadow-md rounded-full bg-purple-400 flex justify-center items-center">
            <Image src={"/c1.png"} alt="chair" height={200} width={200} />
          </div>
          <p>
            Mini Chair <br /> $56.00
          </p>
        </div>

        <div className="text-green-700 h-[280px] w-[280px] text-center">
          <div className="h-[280px] w-[280px] shadow-md rounded-full bg-purple-400 flex justify-center items-center">
            <Image src={"/c2.png"} alt="chair" height={200} width={200} />
          </div>
          <p>
            Mini Chair <br /> $56.00
          </p>
        </div>

        <div className="text-green-700 h-[280px] w-[280px] text-center">
          <div className="h-[280px] w-[280px] shadow-md rounded-full bg-purple-400 flex justify-center items-center">
            <Image src={"/c3.png"} alt="chair" height={200} width={200} />
          </div>
          <p>
            Mini Chair <br /> $56.00
          </p>
        </div>

        <div className="text-green-700 h-[280px] w-[280px] text-center">
          <div className="h-[280px] w-[280px] shadow-md rounded-full bg-purple-400 flex justify-center items-center">
            <Image src={"/c4.png"} alt="chair" height={200} width={200} />
          </div>
          <p>
            Mini Chair <br /> $56.00
          </p>
        </div>
      </div>

      <div className="w-full h-[500px] bg-[url('/bg.png')] my-40 bg-no-repeat bg-cover flex justify-center items-center">
        <div className="w-full max-w-lg text-center">
          <h1 className="text-black text-4xl font-bold">
            Get Latest Update By Subscribe Our New Slater
          </h1>
          <button className="w-[145px] rounded-sm mt-6 h-[42px] bg-purple-400 text-slate-100 font-sans">
            <Link href={'/Product'}>Shop Now</Link>
          </button>
        </div>
      </div>

      {/************blog ****************/}

      <section className=" py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-8">
            Latest Blog
          </h2>
          {/* Responsive grid layout */}
          <Link href={'/Blog'}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="relative border rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300"
                style={{ height: "480px" }} // Optional height for consistent card size
              >
                <div className="h-70 flex items-center justify-center overflow-hidden rounded-lg">
                  <Image src={blog.image} alt={blog.title} height={450} width={450}/>
                </div>
                <div className="mt-2 ml-6 flex text-black font-bold">
                  {blog.text} <div className="ml-11">{blog.date}</div>
                </div>
                <div className="mt-4 ml-6">
                  <h3 className="text-lg font-semibold text-black">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {blog.description}
                  </p>
                  <p className="text-black underline mt-4 font-bold">
                    {blog.read}
                  </p>
                </div>

                <div className="absolute inset-0 bg-purple-500 text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                  <button className="py-2 px-4 bg-white text-purple-500 font-bold rounded-md shadow-md">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landingpage;
