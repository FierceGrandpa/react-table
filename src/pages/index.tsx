import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import Table from 'components/Table'

export default function IndexPage() {
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async () => {
      const result = await axios('/data')
      setData(result.data)
    })()
  }, [])

  const columns = useMemo(
    () => [
      {
        id: 1,
        header: 'Дата',
        accessor: 'date',
      },
      {
        id: 2,
        header: 'Название',
        accessor: 'name',
        ordered: true,
      },
      {
        id: 3,
        header: 'Количество',
        accessor: 'count',
        ordered: true,
      },
      {
        id: 4,
        header: 'Расстояние',
        accessor: 'distance',
        ordered: true,
      },
    ],
    []
  )

  return (
    <div className="container" style={{ minHeight: '100vh' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Table columns={columns} data={data} />
      </div>
    </div>
  )
}
