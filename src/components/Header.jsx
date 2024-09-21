import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
const Header = () => {
  return (
    <header>
      <div className="container">
        <Navbar />
        <HeroSection />
      </div>
    </header>
  );
};
export default Header;
