const TableAction = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return <button className="btn btn-sm btn-outline-primary">{label}</button>;
};

export default TableAction;
