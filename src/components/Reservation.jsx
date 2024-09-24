import Image from "next/image";

const Reservation = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/images/reservation-bg-img.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[652px]"
    >
      <div className="container pt-10">
        <div className="text-center">
          <h3 className="sub-title">Reservation</h3>
          <h2 className="font-alfaSlabOne text-3xl uppercase md-2 md:mb-3 md:text-4xl">Book your table</h2>
        </div>
        <div className="w-2/3 mx-auto">
          <form action="" className="mt-5 md:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="md:mb-5">
                <input
                  type="text"
                  placeholder="NAME"
                  className="text-sm input-style w-full"
                />
              </div>
              <div className="md:mb-5">
                <input
                  type="text"
                  placeholder="EMAIL"
                  className="text-sm input-style w-full"
                />
              </div>
              <div className="md:mb-5">
                <input
                  type="email"
                  placeholder="DATE"
                  className="text-sm input-style w-full"
                />
              </div>
              <div className="md:mb-5">
                <input
                  type="text"
                  placeholder="TIME"
                  className="text-sm input-style w-full"
                />
              </div>
              <div className="md:mb-5">
                <input
                  type="text"
                  placeholder="PEOPLE"
                  className="text-sm input-style w-full"
                />
              </div>
              <div className="">
                <button className="rounded-md p-3 uppercase font-alfaSlabOne text-md tracking-widest bg-[#df1b1c] text-white hover:shadow-lg transition duration-500 w-full">
                  Find a table
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Reservation;
