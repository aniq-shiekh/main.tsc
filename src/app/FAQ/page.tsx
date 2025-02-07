"use client";

function FAQ() {
  return (
    <>
      <div className="w-full bg-gray-100 py-8">
        <div className="bg-black-100 py-8 px-4 md:px-8">
          <h1 className="text-black text-4xl font-bold text-center">FAQ</h1>
          <p className="mt-4 text-black text-center text-sm">
            Home . Pages . <span className="text-purple-600">FAQ</span>
          </p>
        </div>

        <div className="w-full max-w-[1200px] bg-white mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-4 md:px-8">
          <div className="text-left">
            <h2 className="text-black text-2xl font-bold mb-6">
              General Information
            </h2>
            <div className="mb-8">
              <h3 className="text-black text-lg font-semibold mb-2">
                Eu dictumst cum at sed euismod condimentum?
              </h3>
              <p className="text-gray-600">
              Transformez votre espace avec des meubles élégants et 
              confortables – parce que chaque maison mérite le meilleur !
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-black text-lg font-semibold mb-2">
                Magna bibendum est fermentum eros?
              </h3>
              <p className="text-gray-600">
              Transformez votre espace avec des meubles élégants et 
              confortables – parce que chaque maison mérite le meilleur !
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-black text-lg font-semibold mb-2">
                Odio muskana hak eris conseekin sceleton?
              </h3>
              <p className="text-gray-600">
              Transformez votre espace avec des meubles élégants et 
              confortables – parce que chaque maison mérite le meilleur !
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-black text-lg font-semibold mb-2">
                Elit id blandit sabara boi velit gua mara?
              </h3>
              <p className="text-gray-600">
              Transformez votre espace avec des meubles élégants et 
              confortables – parce que chaque maison mérite le meilleur !
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-black text-2xl font-bold mb-6">
              Ask a Question
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full border rounded-md px-4 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Subject*"
                className="w-full border rounded-md px-4 py-2 text-sm"
              />
              <textarea
                placeholder="Type Your Message*"
                className="w-full border rounded-md px-4 py-2 text-sm h-32 resize-none"
              ></textarea>
              <button className="bg-purple-400 text-white px-6 py-2 rounded-sm hover:bg-purple-700 transition">
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
