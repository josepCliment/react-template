import { ReactNode } from "react";

const TableAction = ({
  label,
  className,
  onClick
}: {
  label: string | ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return <button className="btn btn-sm btn-outline-primary p-2 border-0" onClick={onClick}>{label}</button>;
};

export default TableAction;
