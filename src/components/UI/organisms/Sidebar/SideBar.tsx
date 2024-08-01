import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { NavigationItems } from "../../../../constants/NavigationItems";
import { Link } from "react-router-dom";
import { Button, Col } from "react-bootstrap";
import { useState } from "react";

/**
 * Displays the SideBar. To modify this sidebar you have to go to constants/NavigationItems
 * @returns JSXElement
 */

const SideBar = () => {
  const [collapsedState, setCollapsedState] = useState<boolean>(false);
  const [toggledState, setToggledState] = useState<boolean>(false);

  const handleCollapseSideBar = () => {
    setCollapsedState((collapse) => !collapse);
  };

  const handleToggledState = () => {
    setToggledState(false);
  };

  return (
    <div className="bg-dark min-vh-100 d-flex flex-column p-3 gap-3">
      <Button>
        <i className="bi bi-list" onClick={handleCollapseSideBar} />
      </Button>
      <Sidebar
        collapsed={collapsedState}
      >
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#212529",
                color: "#212529",
              },
            },
          }}
        >
          {NavigationItems.map((route, idx) =>
            route.type === "submenu" ? (
              <SubMenu label={route.label} icon={<i className={route.icon} />}>
                {route.submenu?.map((item, idx) => (
                  <MenuItem
                    component={<Link to={item.path} />}
                    icon={<i className={item.icon} />}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem
                component={<Link to={route.path} />}
                icon={<i className={route.icon} />}
              >
                {route.label}
              </MenuItem>
            )
          )}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
