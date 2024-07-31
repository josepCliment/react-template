import { Nav } from "react-bootstrap";
import { Route } from "../../../../constants/NavigationItems";
import NavigationLink from "../../atoms/Links/NavigationLink";

const TopNavItem = ({ element, index }: { element: Route; index: number }) => {
  return (
    <Nav.Item key={index}>
      <NavigationLink label={element.label} path={element.path} />
    </Nav.Item>
  );
};

export default TopNavItem;
