export type Route = {
  path: string;
  label: string;
  icon?: string;
};

export const NavigationItems: Array<Route> = [
  {
    path: "/",
    label: "Home",
    icon: 'bi bi-house'
  },
  {
    path: "/profile",
    label: "Profile",
    icon: 'bi bi-person'
  },
];
