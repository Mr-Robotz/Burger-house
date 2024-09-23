import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <header className="pt-6 pb-10" style={{
      backgroundImage: `url(/images/header-bg-image.jpg)`,
      backgroundSize: "cover",
    }}>
      <div className="container">
        <Navbar />
        <HeroSection />
      </div>
    </header>
  );
};
export default Header;
