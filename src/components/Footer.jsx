import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(/images/footer-img.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[525px] text-white"
    >
      <div className="container relative h-full">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 w-full text-center md:text-left">
            <Image
              src="/images/footer-logo.png"
              alt="logo"
              sizes="100"
              width={409}
              height={90}
              className="lg:mt-20 mt-5 md:mt-10 w-48 mx-auto md:w-60 md:mx-0"
            />
            <p className="lg:mt-10 mt-5 text-sm md:text-md xl:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati amet illo fugit? Soluta, consequatur eligendi blanditiis
              aspernatur voluptatibus impedit ducimus quisquam dolores atque, ad
              vitae? Illum, quae. Omnis modi est necessitatibus magni nulla
              deserunt animi voluptas rem iusto nemo iste dolorem rerum totam
              quis, saepe voluptatibus amet eligendi vero quasi.
            </p>
            <span className="uppercase font-bebasNeue md:mt-56 xl:mt-44 mt-5 block tracking-wider">
              Company name 2024. All right reserved.
            </span>
          </div>

          <div className=" w-full md:w-1/2 flex items-center justify-center mt-20">
            <div className=" flex md:flex-col gap-5">
              <div className="flex uppercase font-bebasNeue text-lg tracking-wide">
                <span className="mr-2 md:mr-5 text-2xl">
                  <FaLocationDot />
                </span>
                <p>Main Road. Building Name, Country</p>
              </div>
              <div className="flex uppercase font-bebasNeue text-lg tracking-wide">
                <span className="mr-2 md:mr-5 text-2xl">
                  <MdEmail />
                </span>
                <p>Info@Companyname.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute md:bottom-0 md:-right-20 md:left-auto flex gap-5 text-black bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className=" w-9 h-9 flex items-center justify-center bg-white p-2 rounded-full">
            <FaInstagram />
          </span>
          <span className=" w-9 h-9 flex items-center justify-center bg-white p-2 rounded-full">
            <FaFacebookF />
          </span>
          <span className=" w-9 h-9 flex items-center justify-center bg-white p-2 rounded-full">
            <FaTwitter />
          </span>
          <span className=" w-9 h-9 flex items-center justify-center bg-white p-2 rounded-full">
            <FaWhatsapp />
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
