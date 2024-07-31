import { NavigationItems } from "../../../../constants/NavigationItems";
import SideBarBrand from "../../molecules/NavBars/SideBar/SideBarBrand";
import SideBarFooter from "../../molecules/NavBars/SideBar/SideBarFooter";
import SideBarNavItem from "../../molecules/NavBars/SideBar/SideBarNavItem";

const SideBar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-dark col-auto col-md-3 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <SideBarBrand />
            <ul className="nav nav-pills flex-column align-items-start mt-3 mt-sm-0">
              {NavigationItems.map((route, idx) => (
                <SideBarNavItem item={route} key={idx} />
              ))}
            </ul>
          </div>
          <SideBarFooter />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
