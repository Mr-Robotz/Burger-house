import Header from "@/components/Header";
import PopularBurgers from "@/components/PopularBurgers";
import BurgerChoice from "@/components/BurgerChoice";
import Discover from "@/components/Discover";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <PopularBurgers />
      <BurgerChoice />
      <Discover />
      <Reservation />
      <Footer />
    </div>
  );
}
