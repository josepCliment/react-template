import { Col } from "react-bootstrap";
import { NavigationItems } from "../../../../constants/NavigationItems";
import SideBarBrand from "../../molecules/NavBars/SideBar/SideBarBrand";
import SideBarNavItem from "../../molecules/NavBars/SideBar/SideBarNavItem";

/**
 * Displays the SideBar. To modify this sidebar you have to go to constants/NavigationItems 
 * @returns JSXElement
 */

const SideBar = () => {

  return (
    <Col
      className="bg-dark min-vh-100 d-flex justify-content-between flex-column p-3"
      xs="auto"
      md={3}
      lg={2}
    >
      <div>
        <SideBarBrand />
        <ul className="nav nav-pills flex-column align-items-start mt-3 mt-sm-0">
          {NavigationItems.map((route, idx) => (
            <SideBarNavItem item={route} key={idx} />
          ))}
        </ul>
      </div>
      {/* <SideBarFooter /> */}
    </Col>
  );
};

export default SideBar;
