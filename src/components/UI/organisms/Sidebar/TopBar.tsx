import { Nav } from "react-bootstrap";
import { NavigationItems } from "../../../../constants/NavigationItems";
import NavigationLink from "../../atoms/Links/NavigationLink";
import TopNavItem from "../../molecules/NavBars/TopNavItem";

/**
 * Displays the TopBar. To modify this sidebar you have to go to constants/NavigationItems
 *
 * @returns JSXElement
 */
const TopBar = () => {
  return (
    <Nav className="d-flex justify-content-around align-items-center">
      {NavigationItems.map((element, index) => (
        <TopNavItem element={element} index={index} />
      ))}
    </Nav>
  );
};

export default TopBar;
