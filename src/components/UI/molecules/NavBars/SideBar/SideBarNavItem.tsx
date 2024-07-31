import { Route } from "../../../../../constants/NavigationItems";

type SideBarNavProps = {
  item: Route;
};

const SideBarNavItem = ({ item }: SideBarNavProps) => {
  return (
    <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
      <a
        className="nav-link text-white fs-5"
        href={item.path}
        aria-current="page"
      >
        {item.icon && <i className={item.icon}></i>}
        <span className="ms-2 d-none d-sm-inline">{item.label}</span>
      </a>
    </li>
  );
};

export default SideBarNavItem;
