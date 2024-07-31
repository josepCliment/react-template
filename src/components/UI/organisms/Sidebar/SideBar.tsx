import { Accordion, Card, Nav, NavItem, Offcanvas } from "react-bootstrap";
import { NavigationItems } from "../../../../constants/NavigationItems";
import SideBarNavItem from "../../molecules/NavBars/SideBarNavItem";

const SideBar = () => {
  return (
    <div
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
      className="overflow-hidden d-flex flex-column justify-content-between shadow-none sidebar"
    >
      <div className="d-flex flex-column overflow-hidden">
        <div
          className="overflow-auto w-100 p-2 py-3"
          style={{
            height: `calc((100vh - ${
              document
                .getElementById("extra_sidebar_buttons")
                ?.getBoundingClientRect()?.height
            }px) - ${78}px`,
          }}
        >
          <Accordion alwaysOpen>
            {NavigationItems.map((section, idx) => {
              const isLast = NavigationItems.length - 1 === idx;
              return (
                <Card.Body className="p-1">
                  <SideBarNavItem item={section} />
                </Card.Body>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
