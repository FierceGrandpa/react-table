import { FC } from 'react'
import { ITableColumn } from '../types/ITableColumn'
import TableCell from './Cell'

export interface ITableBodyProps {
  columns: Array<ITableColumn>
  data: any
  numberPerPage: number
}

const TableBody: FC<ITableBodyProps> = ({ columns, data, numberPerPage }) => (
  <tbody>
    {data?.map((item, i) => (
      <tr key={item.id ?? i} role="row">
        {columns.map((col, j) => (
          <TableCell key={col.id ?? j} content={item[col.accessor]} />
        ))}
      </tr>
    ))}

    {numberPerPage - data?.length > 0 &&
      Array.from(Array(numberPerPage - data?.length)).map((_, i) => (
        <tr key={i * 9999}>
          {columns.map((col, j) => (
            <TableCell
              key={col.id * 999 ?? j * 999}
              className="empty"
              content="_"
            />
          ))}
        </tr>
      ))}
  </tbody>
)

export default TableBody
