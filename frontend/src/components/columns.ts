import { format } from 'date-fns'

export const COLUMNS: any[] = [
  {
    Header: '取引相手',
    accessor: 'counterparty',
    Footer: '取引相手',
    // Filter: ColumnFilter
  },
  {
    Header: '元金(万)',
    accessor: 'capital',
    Footer: '元金',
    // Filter: ColumnFilter
  },
  {
    Header: '利率',
    accessor: 'rate',
    Footer: '利率',
    // Filter: ColumnFilter
  },
  {
    Header: '期間',
    accessor: 'period',
    Footer: '期間',
    // Filter: ColumnFilter
  },
  {
    Header: '取引日時',
    accessor: 'transactionDate',
    Footer: '取引日時',
    sortTypes: 'datetime',
    Cell: ({ value }: { value: Date }) => {
      return format(new Date(value), 'yyyy-MM-dd')
    },
    // Filter: ColumnFilter
  },
]
