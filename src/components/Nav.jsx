import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useEffect, useState } from "react";
import MenuNav from "./MenuNav";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Close the menu if screen width is large (lg breakpoint is typically 1024px)
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setIsMenuVisible(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Check once on mount
    handleResize();

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    // setIsMenuOpen((prev) => !prev);
    if (isMenuOpen) {
      // Start exit animation
      setIsMenuVisible(false);
      // Remove from DOM after animation completes
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 300); // match your animation duration
    } else {
      // Add to DOM first
      setIsMenuOpen(true);
      // Start entrance animation after a tiny delay
      setTimeout(() => {
        setIsMenuVisible(true);
      }, 10);
    }
  };
  return (
    <header className="padding-x py-8 absolute z-[1000] w-full">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={9} />
        </a>
        <div
          className="hidden max-lg:block cursor-pointer z-[21]"
          onClick={toggleMenu}
        >
          <img src={hamburger} alt="menu_logo" width={25} height={25} />
        </div>
        {isMenuOpen ? (
          <MenuNav isVisible={isMenuVisible} />
        ) : (
          <ul className=" flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray active:text-slate-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
