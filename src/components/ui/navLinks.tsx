import Link from "next/link";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/",
    label: "Menu",
  },
  {
    href: "/",
    label: "Our Story",
  },
  {
    href: "/",
    label: "Contact Us",
  },
];

const navLinks = () => {
  return (
    <div className="hidden sm:block">
      <div className="hidden md:flex items-center justify-between space-x-6 lg:space-x-10 text-gray-900 font-bebasNeue tracking-widest">
        {routes.map((route, i) => (
          <Link key={i} href={route.href} className="text-lg">
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default navLinks;
