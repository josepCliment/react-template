import { Button, NavLink } from "react-bootstrap";
import { Route } from "../../../../constants/NavigationItems";
import { MouseEventHandler } from "react";

type SideBarNavProps = {
  item: Route;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const SideBarNavItem = ({ item, onClick }: SideBarNavProps) => {
  return (
    <div className={"p-0 sidebar-nav-item mb-3"}>
      <Button
        title={item.label}
        className="left-drawer-item w-100 py-2 px-3 text-secondary shadow-none d-flex justify-content-start flex-row text-start"
        variant="outline-primary"
        onClick={onClick}
        as={"button"}
      >
        <span className="text-center w-100">{item.label}</span>
      </Button>
    </div>
  );
};

export default SideBarNavItem;
