const NavLink = ({ item }) => {
  return (
    <li>
      <a
        href={item.href}
        className="font-montserrat leading-normal text-lg text-slate-gray"
      >
        {item.label}
      </a>
    </li>
  );
};

export default NavLink;
