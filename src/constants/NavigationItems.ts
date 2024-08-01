
type RouteType= "menu"| "submenu";
export type Route = {
  path: string;
  label: string;
  icon?: string;
  submenu?: Array<Route>;
  type: RouteType;
};

export const NavigationItems: Array<Route> = [
  {
    label: "Overview",
    icon: "bi bi-house",
    type: "submenu",
    path: "",
    submenu: [
      {
        path: "/",
        label: "Home",
        icon: "bi bi-house",
        type: 'menu'
      },
    ],
  },
  {
    path: "/profile",
    label: "Profile",
    icon: 'bi bi-person',
    type: "menu"
  },
];
