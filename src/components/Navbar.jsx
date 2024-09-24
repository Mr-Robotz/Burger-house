import Logo from "./ui/logo"
import DeliveryInfo from "./ui/deliveryInfo"
import NavLinks from "./ui/navLinks"
import ActionButton from "./ui/actionButton"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-20">
        <Logo />
        
        <div className="hidden md:block space-y-2">
            <DeliveryInfo />
            <NavLinks />
        </div>
        <div className="md:hidden">
            <ActionButton />
        </div>
    </nav>
  )
}
export default Navbar