import { memo, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { TableColumn } from "../../../../utils/typos/TableColum";
import TableAction from "../../atoms/TableActions/TableAction";

interface TableRow {
  [key: string]: any;
}

interface TableProps<T> {
  columns: Array<TableColumn>;
  rows: Array<T>;
  actions?: boolean;
}

/**
 *  Render a table with custom headers and rows
 * @param actions - Boolean to show actions column
 * @param columns - Headers array for the column
 * @param rows - Row array
 * @returns JSXElement
 */

const TableCustom = <T extends TableRow>({
  columns = [],
  rows,
  actions,
}: TableProps<T>) => {
  const [data, setData] = useState<Array<T>>(rows || []);

  useEffect(() => {
    setData([...rows]);
  }, [rows]);


  const MemoizedTableActions = memo(function MemoizedTableActions(){
    return (
      <td>
        <TableAction label={'Edit'} className={""}/>
      </td>
  )
  });


  return (
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
            {actions && <MemoizedTableActions />}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default TableCustom;
