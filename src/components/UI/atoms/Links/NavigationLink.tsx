import { Nav } from "react-bootstrap";

interface NavigationLinkProps {
  path: string;
  label: string;
  className?: string;
}

const NavigationLink = ({
  path,
  label,
  className = "",
}: NavigationLinkProps) => {
  return (
    <Nav.Link href={path} className={className}>
      {label}
    </Nav.Link>
  );
};

export default NavigationLink;
