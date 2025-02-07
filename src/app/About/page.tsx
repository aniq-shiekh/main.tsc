import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="px-6 lg:px-20 py-10 font-sans bg-blue-400 text-[#91c72d]">
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <Image
            src="/f3.png"
            alt="Ecommerce Meeting"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-4xl text-white font-bold mb-6">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mb-6">
          Transformez votre espace avec des meubles élégants et 
          confortables – parce que chaque maison mérite le meilleur !
          </p>
          <Link href="/contact">
            <button className="px-6 py-2 bg-purple-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600">
              Contact Us
            </button>
          </Link>
        </div>

      </section>

      <section className="my-16 text-center">
        <h2 className="text-3xl text-white font-bold mb-8">Our Features</h2>
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "/f4.png", title: "Free Delivery" },
            { icon: "/f5.png", title: "100% Cash Back" },
            { icon: "/f6.png", title: "Quality Product" },
            { icon: "/f7.png", title: "24/7 Support" },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={150}
                height={150}
                className="mb-4 mx-auto"
              />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">
              Transformez votre espace avec des meubles élégants et confortables
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-16 text-center">
        <h2 className="text-3xl text-white font-bold mb-8">Our Client Say!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Selina Gomez", image: "/f8.png" },
            { name: "John Doe", image: "/f9.png" },
            { name: "Emma Watson", image: "/f10.png" },
          ].map((client, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={client.image}
                alt={client.name}
                width={500}
                height={500}
                className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
              />
              <p className="text-white font-semibold">{client.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-600">
        Transformez votre espace avec des meubles élégants et confortables
         – parce que chaque maison mérite le meilleur !
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
