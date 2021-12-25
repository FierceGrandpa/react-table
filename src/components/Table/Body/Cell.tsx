import { FC, memo } from 'react'

export interface ITableCellProps {
  className?: string
  content?: any
}

const TableCell: FC<ITableCellProps> = ({ className, content, children }) => (
  <td className={className} role="cell">
    {content ? <span>{content}</span> : children}
  </td>
)

export default memo(TableCell)
