import { FC } from 'react'
import { ITableColumn } from '../types/ITableColumn'
import { OrderBy } from '../types/OrderBy'

export interface ITableHeaderProps {
  columns: Array<ITableColumn>
  orderField: string
  orderBy: OrderBy
  sort: any
}

const TableHeader: FC<ITableHeaderProps> = ({
  columns,
  orderBy,
  orderField,
  sort,
}) => (
  <thead>
    <tr role="row">
      {columns?.map((col, i) => (
        <th
          key={col.id ?? i}
          onClick={() =>
            col.accessor !== '' && col.ordered ? sort(col.accessor) : ''
          }
          className={col.ordered && 'ordered'}
          role="columnheader"
        >
          {col.ordered && orderField === col.accessor && (
            <i className="caret">
              {orderBy === OrderBy.Descending ? '▲' : '▼'}
            </i>
          )}

          {col.header}
        </th>
      ))}
    </tr>
  </thead>
)

export default TableHeader
