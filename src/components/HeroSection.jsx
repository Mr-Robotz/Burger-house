import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center md:items-start text-center gap-5 md:flex-row md:justify-between md:text-start">
        <div className="flex flex-col gap-3 py-5 md:w-1/2 md:mt-10 lg:mt-20">
          <p className="font-bebasNeue border-2 border-dashed border-amber-950 md:w-80 lg:w-3/4 md:px-5 lg:text-xl">
            It is a good time for the great taste of burger
          </p>
          <h1
            style={{ textShadow: "5px 5px #FCE0AA" }}
            className="font-alfaSlabOne uppercase text-7xl  md:text-7xl lg:text-8xl"
          >
            Burger
          </h1>
          <h2
            style={{ textShadow: "5px 5px #FCE0AA" }}
            className="font-alfaSlabOne uppercase text-5xl md:text-5xl lg:text-6xl"
          >
            Week
          </h2>
        </div>
        <div className="w-full md:w-1/2 ">
          <Image
            src="/images/burger-img.png"
            width={100}
            height={100}
            sizes="100"
            alt="showcase image"
            className="w-96 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
