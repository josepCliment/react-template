import React from "react";
import { Table } from "react-bootstrap";

/**
 * const dummyData = [{ id: 20, type: "Test" }];
 * const dummyHeaders = [{ label: "id" }, { label: "Test" }, { label: "Test 21" }];
 */
interface TableHeader {
  label: string;
}
interface TableRow {
  id: number;
  type: string;
}

interface TableProps {
  columns: Array<TableHeader>;
  rows: TableRow[];
}

/**
 *
 * @param columns - Headers array for the column
 * @param rows - Row array
 * @returns JSXElement
 */

const TableCustom = ({ columns = [], rows }: TableProps) => {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          {columns.map((c) => (
            <th>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr>
            {Object.keys(r).map((rv) => (
              <td>{rv}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default TableCustom;
