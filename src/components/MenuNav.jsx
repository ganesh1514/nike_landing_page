import { navLinks } from "../constants";

const MenuNav = ({ isVisible }) => {
  return (
    <ul
      className={`
        flex flex-col gap-[10px] justify-between items-left 
        absolute z-[20] w-full 
        bg-red-50 padding-x py-8 lg:hidden 
        top-0 left-0
        transform transition-all duration-300 ease-in-out
        ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }
      `}
    >
      {navLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black transition-colors duration-300 active:text-slate-900"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuNav;
