import { Task } from '@prisma/client'
import { FC, useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from '@/components/columns'

type Props = {
  tasks: Task[]
}

export const BasicTables: FC<Props> = ({ tasks }) => {
  const columns = useMemo(() => COLUMNS, [])
  const data = tasks
  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    })
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column, i) => (
              <th {...column.getHeaderProps()} className='p-2' key={i}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} className='text-center' key={i}>
              {row.cells.map((cell, i) => {
                return (
                  <td {...cell.getCellProps()} key={i}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
