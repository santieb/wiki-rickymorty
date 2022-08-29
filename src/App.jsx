import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const data = await res.json()
      setData(data)
    }
    getData()
  }, [])

  return (
    <div>
    </div>
  )
}

export default App
