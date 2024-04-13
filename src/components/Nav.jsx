import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

import NavLink from "./NavLink";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="nike logo" width={130} height={29} />
        </a>

        <ul className="flex flex-1 justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </ul>

        <div>
          <img
            src={hamburger}
            alt="hamburgeer"
            width={25}
            height={25}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
