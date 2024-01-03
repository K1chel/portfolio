import { navItems } from "../../constants";
import ContactButton from "../contact-button";
import MobileNav from "./mobile-menu";
import NavLink from "./nav-link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full border-b border-zinc-700 z-[999] backdrop-blur-md">
      <header className="py-4 max-w-screen-xl mx-auto md:px-5 px-3">
        <div className="flex items-center justify-between">
          <div className="md:flex items-center gap-x-5 text-neutral-500 hidden">
            {navItems.map((item) => (
              <NavLink key={item.key} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <ContactButton />
          <div className="block md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
