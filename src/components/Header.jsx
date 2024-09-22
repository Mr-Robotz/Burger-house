import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
const Header = () => {
  return (
    <header className="pt-6 pb-10">
      <div className="container">
        <Navbar />
        <HeroSection />
      </div>
    </header>
  );
};
export default Header;
