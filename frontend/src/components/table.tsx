import { Task } from '@prisma/client'
import { FC, useMemo } from 'react'
import { useSortBy, useTable } from 'react-table'
import { COLUMNS } from '@/components/columns'

type Props = {
  tasks: Task[]
}

export const BasicTables: FC<Props> = ({ tasks }) => {
  const columns = useMemo(() => COLUMNS, [])
  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } =
    useTable(
      {
        data: tasks,
        columns: columns,
        initialState: {
          //@ts-ignore
          sortBy: [{ id: 'transactionDate', asc: true }],
        },
      },
      useSortBy,
    )
  return (
    <table {...getTableProps()} border={1}>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column, i) => (
              <th
                {
                  //@ts-ignore
                  ...column.getHeaderProps(column.getSortByToggleProps())
                }
                className='p-2'
                key={i}
              >
                {column.render('Header')}
                {
                  //@ts-ignore
                  column.canSort &&
                    (() => {
                      return (
                        <div>
                          {
                            //@ts-ignore
                            column.isSorted
                              ? //@ts-ignore
                                column.isSortedDesc
                                ? '🔽'
                                : '🔼'
                              : ''
                          }
                        </div>
                      )
                    })()
                }
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
