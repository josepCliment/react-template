import { Nav } from "react-bootstrap";
import NavigationLink from "../../atoms/Links/NavigationLink";
import { RouteObject } from "react-router-dom";
import { Route } from "../../../../constants/NavigationItems";

const TopNavItem = ({ element, index }: { element: Route; index: number }) => {
  return (
    <Nav.Item key={index}>
      <NavigationLink label={element.label} path={element.path} />
    </Nav.Item>
  );
};

export default TopNavItem;
