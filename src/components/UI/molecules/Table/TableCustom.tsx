import { memo, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { TableColumn } from "../../../../utils/typos/TableColum";
import TableAction from "../../atoms/TableActions/TableAction";
import PaginationList from "../Pagination/PaginationList";

interface TableRow {
  [key: string]: any;
}

interface TableProps<T> {
  columns: Array<TableColumn>;
  rows: Array<T>;
  actions?: boolean;
  onEditActionPressed?: (id: number | string) => void;
  onDeleteActionPressed?: (id: number | string) => void;
  itemsCount: number;
  itemsPerPage: number;
}

/**
 *  Render a table with custom headers and rows
 * @param actions - Boolean to show actions column
 * @param columns - Headers array for the column
 * @param rows - Row array
 * @param onEditActionPressed - Callback for edit action
 * @param onDeleteActionPressed - Callback for delete action
 * @returns JSXElement
 */

const TableCustom = <T extends TableRow>({
  columns = [],
  rows,
  actions,
  onEditActionPressed = () => {},
  onDeleteActionPressed = () => {},
  itemsCount,
  itemsPerPage,
}: TableProps<T>) => {
  const [data, setData] = useState<Array<T>>(rows || []);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setData([...rows]);
  }, [rows]);

  /**
   * Memoized TableActions component
   * @param id - Row identifier
   * @returns JSXElement
   */
  const MemoizedTableActions = memo(function MemoizedTableActions({
    id,
  }: {
    id: number | string;
  }) {
    return (
      <td>
        <div className="w-100 d-flex justify-content-center align-items-center gap-4">
          <TableAction
            label={<i className="bi bi-pencil-square"></i>}
            onClick={() => onEditActionPressed(id)}
          />
          <TableAction
            label={
              <i className="bi bi-trash-fill" style={{ color: "red" }}></i>
            }
            onClick={() => onDeleteActionPressed(id)}
          />
        </div>
      </td>
    );
  });

  return (
    <div className="w-100">
      <Table bordered hover variant="dark" responsive="md">
        <thead>
          <tr>
            {columns.map((c, idx) => (
              <th key={idx}>{c.label.toUpperCase()}</th>
            ))}
            {actions && <th>ACTIONS</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((r, idx) => (
            <tr key={idx}>
              {Object.keys(r).map((rv, idx) => (
                <td key={idx}>{r[rv]}</td>
              ))}
              {actions && <MemoizedTableActions id={r.id} />}
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationList
        currentPage={currentPage}
        itemsCount={itemsCount}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default TableCustom;
