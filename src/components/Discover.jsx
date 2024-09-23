import React from "react";
import Image from "next/image";

const Discover = () => {
  return (
    <section className="">
      <div className="container">
        <div className="">
          <div className="flex flex-col md:flex-row md:items-start items-center justify-between p-5 shadow-2xl">
            <div className="w-full md:w-1/2 mb-5 text-center md:text-left">
              <h3 className="uppercase font-bebasNeue tracking-widest text-2xl md:text-xl">
                Discover
              </h3>
              <h2 className="font-alfaSlabOne text-2xl lg:text-4xl uppercase md-2 md:mb-3 md:text-2xl ">
                Upcoming Events
              </h2>
              <p className="text-sm md:text-md lg:text-lg mt-2 lg:mt-5 md:mt-2 text-gray-500 lg:pr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>
            <div className="w-full md:w-1/2 ">
              <Image
                src="/images/discover-img.jpg"
                width={659}
                height={440}
                sizes="100"
                alt="burger-image"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
