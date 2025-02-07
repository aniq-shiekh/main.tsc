"use client";

import Image from "next/image";

function Contact() {
  return (
    <>
      <div className="w-full bg-gray-50">
        <div className="bg-gray-100 py-16">
          <div className="max-w-[1200px] mx-auto px-4">
            <h1 className="text-4xl font-bold text-black mb-2">
              Contact Us
            </h1>
            <p className="text-sm text-black">
              Home <span className="text-black">.</span> Pages{" "}
              <span className="text-black">.</span>{" "}
              <span className="text-blue-400">Contact Us</span>
            </p>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 py-12 flex flex-wrap gap-12">
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-2xl font-bold text-black mb-4">
              Information About Us
            </h2>
            <p className="text-gray-600 mb-6">
            Transformez votre espace avec des meubles élégants et 
            confortables – parce que chaque maison mérite le meilleur !
            </p>
            <div className="flex gap-2 mb-8">
              <span className="w-3 h-3 rounded-full bg-[#5625DF]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FF27B7]"></span>
              <span className="w-3 h-3 rounded-full bg-[#37DAF3]"></span>
            </div>

            {/* Get in Touch */}
            <h2 className="text-2xl font-bold text-black mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
            Transformez votre espace avec des meubles élégants et
             confortables – parce que chaque maison mérite le meilleur !
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
              />
              <input
                type="email"
                placeholder="Your E-mail*"
                className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
              />
              <input
                type="text"
                placeholder="Subject*"
                className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
              />
              <textarea
                placeholder="Type your message*"
                rows={4}
                className="w-full border border-gray-300 rounded-md p-3 outline-none text-sm"
              ></textarea>
              <button className="bg-purple-400 text-white py-3 px-8 rounded-md hover:bg-[#F94C9B] transition-colors">
                Send Mail
              </button>
            </form>
          </div>

          <div className="flex-1 min-w-[300px]">
            <h2 className="text-2xl font-bold text-black mb-8">
              Contact Way
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-[#5726DF]"></span>
                <div className="text-gray-600">
                  <p>Tel: 855-87-00-99</p>
                  <p>E-Mail: Finzo_shop@store.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-[#FB2E86]"></span>
                <div className="text-gray-600">
                  <p>Support Forum</p>
                  <p>For over 24hr</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-[#FFB265]"></span>
                <div className="text-gray-600">
                  <p>25 Kingsway Avenue, Manchester, Greater Manchester M1 5AN, UK</p>
                  <p>Greater Manchester M1 5AN, UKK</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-[#1BE982]"></span>
                <div className="text-gray-600">
                  <p>Free standard shipping</p>
                  <p>on all orders</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Image
                src="/f2.png"
                alt="Connect"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
