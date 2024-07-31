import { Link } from "react-router-dom";
import { Route } from "../../../../../constants/NavigationItems";

type SideBarNavProps = {
  item: Route;
};

const SideBarNavItem = ({ item }: SideBarNavProps) => {
  return (
    <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0 w-100">
      <Link
        className="nav-link text-white fs-5"
        to={item.path}
        aria-current="page"
      >
        <div className="d-flex justify-content-center align-items-center">
          {item.icon && <i className={item.icon}></i>}
          <span className="ms-2 d-none d-sm-inline">{item.label}</span>
        </div>
      </Link>
    </li>
  );
};

export default SideBarNavItem;
