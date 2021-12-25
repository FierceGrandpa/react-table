import { FC, useEffect, useMemo, useState } from 'react'
import { ITableColumn } from './types/ITableColumn'
import { OrderBy } from './types/OrderBy'
import TableHeader from './Header'
import TableBody from './Body'
import TableFooter from './Footer'
import TableFiltering from './Filtering'
import { FilterCondition } from './types/FilterCondition'

export interface ITableProps {
  columns: Array<ITableColumn>
  data?: any
  numberPerPage?: number
  numberPageOfText?: string
  className?: string
}

const Table: FC<ITableProps> = (props) => {
  const {
    columns,
    data: initData,
    numberPerPage: initNumberPerPage,
    numberPageOfText,
    className,
  } = props

  const [data, setData] = useState([])

  const [orderBy, setOrderBy] = useState(OrderBy.None)
  const [orderField, setOrderField] = useState('')

  const [page, setPage] = useState(1)
  const [numberPerPage, setNumberPerPage] = useState(10)
  const [numberOfPage, setNumberOfPage] = useState(0)

  const [filterValue, setFilterValue] = useState('')
  const [filterField, setFilterField] = useState('')
  const [filterCondition, setFilterCondition] = useState(
    FilterCondition.Contains
  )

  const filteredData = useMemo(() => {
    if (!filterValue || filterValue === '') {
      return initData
    }

    switch (filterCondition) {
      case FilterCondition.Contains:
        return initData.filter((e) =>
          String(e[filterField]).toLowerCase().includes(filterValue)
        )
      case FilterCondition.Equals:
        return initData.filter((e) => String(e[filterField]) === filterValue)
      case FilterCondition.Less:
        return initData.filter(
          (e) => Number(e[filterField]) < Number(filterValue)
        )
      case FilterCondition.More:
        return initData.filter(
          (e) => Number(e[filterField]) > Number(filterValue)
        )
      default:
        return initData
    }
  }, [initData, filterValue, filterField, filterCondition])
  const sortedData = useMemo(() => {
    switch (orderBy) {
      case OrderBy.Descending:
        return filteredData.sort((a, b) =>
          a[orderField] > b[orderField] ? 1 : -1
        )
      case OrderBy.Ascending:
        return filteredData.sort((a, b) =>
          a[orderField] < b[orderField] ? 1 : -1
        )
      default:
        return filteredData
    }
  }, [orderField, orderBy, filteredData])

  useEffect(() => {
    setNumberPerPage(initNumberPerPage || 10)
  }, [initData, initNumberPerPage])

  useEffect(() => {
    setNumberOfPage(Math.ceil(sortedData.length / numberPerPage))
    setData(sortedData?.slice((page - 1) * numberPerPage, page * numberPerPage))
  }, [
    initData,
    filterValue,
    filterField,
    filterCondition,
    orderField,
    orderBy,
    numberPerPage,
    page,
  ])

  const sort = (item) => {
    if (orderBy === OrderBy.None) {
      setOrderField(item)
      setOrderBy(OrderBy.Descending)
    } else if (orderBy === OrderBy.Descending) {
      setOrderField(item)
      setOrderBy(OrderBy.Ascending)
    } else {
      setOrderField(null)
      setOrderBy(OrderBy.None)
    }
  }

  const nextPage = () => {
    if (page + 1 <= numberOfPage) {
      setPage(page + 1)
    }
  }

  const previousPage = () => {
    if (page - 1 >= 1) {
      setPage(page - 1)
    }
  }

  const handleNumberPerPageChange = (e) => {
    setNumberPerPage(e.target.value)
    setPage(1)
  }

  return (
    <div className="custom-table-wrapper">
      <TableFiltering
        columns={columns}
        filterCondition={filterCondition}
        setFilterCondition={setFilterCondition}
        filterField={filterField}
        setFilterField={setFilterField}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <table className={['custom-table', className].join(' ')}>
        <TableHeader
          columns={columns}
          orderBy={orderBy}
          orderField={orderField}
          sort={sort}
        />
        <TableBody
          data={data}
          columns={columns}
          numberPerPage={numberPerPage}
        />
      </table>
      <TableFooter
        previousPage={previousPage}
        nextPage={nextPage}
        page={page}
        numberOfPage={numberOfPage}
        numberPerPage={numberPerPage}
        handleChange={handleNumberPerPageChange}
        numberPageOfText={numberPageOfText}
      />
    </div>
  )
}

export default Table
