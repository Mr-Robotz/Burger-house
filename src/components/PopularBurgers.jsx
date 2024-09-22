import Image from "next/image";

const PopularBurgers = () => {
  return (
    <section>
      <div className="container flex flex-col gap-10 md:flex-row font-bebasNeue text-white">
        <div className="relative w-full md:w-1/2">
          <div className="absolute left-5 top-5">
            <p className="text-xl">Try it today</p>
            <h3 className="popular_title">Most popular burger</h3>
          </div>
          <div>
            <Image
              src="/images/popular-1.png" width={596} height={420}
              sizes="100"
              alt="burger-image"
            />
          </div>
        </div>
        <div className="flex flex-col gap-7 w-full md:w-1/2">
          <div className="relative h-1/2">
            <div className="absolute left-5 top-5">
              <p>Try it today</p>
              <h3 className="popular_title">
                More fun <br /> More Taste
              </h3>
            </div>
            <div>
              <Image src="/images/popular-2.png" width={596} height={192} sizes="100" alt="burger-image" />
            </div>
          </div>
          <div className="relative h-1/2">
            <div className="absolute left-5 top-5">
              <p>Try it today</p>
              <h3 className="popular_title">Fresh $ Chili</h3>
            </div>
            <div>
              <Image src="/images/popular-3.png" width={596} height={192} sizes="100" alt="burger-image" />
            </div>
          </div>
        </div>
      </div>
      <div className="conatainer text-center mt-16 flex items-center justify-center">
        <button  className="bg-[#fcc135] text-xl rounded-none text-amber-950 uppercase font-bebasNeue hover:shadow-lg px-5 py-2 tracking-wide transition duration-300">Always taste burger</button>
      </div>
    </section>
  );
};
export default PopularBurgers;
