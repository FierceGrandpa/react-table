import { FC } from 'react'
import { ITableColumn } from '../types/ITableColumn'
import { FilterCondition } from '../types/FilterCondition'

export interface ITableFilteringProps {
  columns: Array<ITableColumn>
  setFilterCondition: any
  filterCondition: FilterCondition
  setFilterField: any
  filterField: string
  filterValue: string | undefined
  setFilterValue: any
}

const conditions = Object.keys(FilterCondition).map(
  (key) => FilterCondition[key]
)

const TableFiltering: FC<ITableFilteringProps> = ({
  columns,
  setFilterCondition,
  filterCondition,
  setFilterField,
  filterField,
  filterValue,
  setFilterValue,
}) => (
  <div className="custom-table__header">
    <span>
      <select
        value={filterField}
        onChange={(e) => setFilterField(e.target.value)}
      >
        {columns.map((option, i) => (
          <option key={option.id ?? i}>{option.accessor}</option>
        ))}
      </select>
    </span>
    <span>
      <select
        value={filterCondition}
        onChange={(e) => setFilterCondition(e.target.value)}
      >
        {conditions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </span>
    <input
      type="text"
      name="value"
      value={filterValue}
      onChange={(e) => setFilterValue(e.target.value)}
    />
  </div>
)

export default TableFiltering
