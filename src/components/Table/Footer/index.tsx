import { FC } from 'react'

export interface ITableFooterProps {
  previousPage: any
  nextPage: any
  page: number
  numberOfPage: number
  numberPerPage: number
  handleChange: any
  numberPageOfText: string
}

const numberInPages = [5, 10, 20, 50, 100]

const TableFooter: FC<ITableFooterProps> = ({
  previousPage,
  nextPage,
  page,
  numberOfPage,
  numberPerPage,
  handleChange,
  numberPageOfText,
}) => (
  <div className="custom-table__footer">
    <button type="button" onClick={() => previousPage()}>
      <i className="chevron">&#x3c;</i>
    </button>
    <button type="button" onClick={() => nextPage()}>
      <i className="chevron">&#x3e;</i>
    </button>
    <div className="number-of-page-text">
      {page} {numberPageOfText || 'из'} {numberOfPage}
    </div>
    <span>
      <select value={numberPerPage} onChange={(event) => handleChange(event)}>
        {numberInPages.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </span>
  </div>
)

export default TableFooter
