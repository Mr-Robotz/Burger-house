import { LuAlignJustify } from "react-icons/lu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import DeliveryInfo from "./deliveryInfo";

const actionButton = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <LuAlignJustify size={30} />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-10 text-lg items-start text-black mt-10 w-full">
              <DeliveryInfo />
              <div className="font-bebasNeue flex flex-col space-y-10 tracking-wider">
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Menu</Link>
                <Link href={"/"}>Our Story</Link>
                <Link href={"/"}>Contact Us</Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
export default actionButton;
