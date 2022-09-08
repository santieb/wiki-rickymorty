import { useState, useEffect } from 'react'
import styled from 'styled-components'
import CharacterList from '../components/CharacterList'
import Nav from '../components/Nav'
import Accordion from '../components/Accordion'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Input = styled.input`
  height: 2.5em;
  width: 30%;
  border: 1px solid black;
`

const Division = styled.div`
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  let [data, setData] = useState('')
  let [status, setStatus] = useState('')
  let [gender, setGender] = useState('')
  let [species, setSpecies] = useState('')
  let [search, setSearch] = useState('')
  let [loading, setLoading] = useState(false)
  const [pageNumber, updatePageNumber] = useState(1)
 
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await fetch(api)
      const data = await res.json()
      setData(data.results)
    }
    getData()
    setLoading(false)
  }, [api])

  if (loading) return <p>Cargando..</p>
  console.log(data)
  return (
    <>
      <Nav/>
      <Division>
        <Input 
          type="text" 
          placeholder='Search for characters'
          onChange={({ target }) => setSearch(target.value)}
        />
      </Division>
      <Container>
        <Accordion setStatus={setStatus} setGender={setGender} setSpecies={setSpecies}/>
        { data ? <CharacterList characters={data} /> : <Division>Characters not found</Division> }
      </Container>
    </>
  )
}

export default App
