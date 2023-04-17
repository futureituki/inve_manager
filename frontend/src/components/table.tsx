import { fetcher } from '@/lib/swr'
import { Task } from '@prisma/client'
import { FC, useMemo } from 'react'
import useSWR from 'swr'
import { COLUMNS } from './columns'
import { Column, useTable } from 'react-table'

type Props = {
  tasks: Task[]
}

export const BasicTables: FC<Props> = ({ tasks }) => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => tasks, [])

  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    })
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="p-2">{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
          <tr {...row.getRowProps()} className="text-center" key={i}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
