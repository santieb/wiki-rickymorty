import { useState, useEffect } from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import CharacterList from '../components/CharacterList'
import NotFoundMessage from '../components/NotFound'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding-top: 0px;
  }
`

const Content = styled.div`
  gap: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 50%;
  min-width: 50%;
`

function App() {
  const [data, setData] = useState('')
  const [info, setInfo] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [pageNumber, updatePageNumber] = useState(1)
 
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await fetch(api)
      const data = await res.json()
      setData(data.results)
      setInfo(data.info)
    }
    getData()
    setLoading(false)
  }, [api])

  const clearFilters = () => {
    setStatus('')
    setGender('') 
    setSpecies('')
  }

  if (loading) return <p>Cargando..</p>

  return (
    <>
      <Container>
      <SideBar status={status} gender={gender} species={species} setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setSearch={setSearch}/>
      <Content>
        { data ? 
            <CharacterList 
              info={info}
              pageNumber={pageNumber}
              updatePageNumber={updatePageNumber}
              characters={data} />
          :
            <NotFoundMessage clearFilters={clearFilters}/>
        }
      </Content>
      </Container>
    </>
  )
}

export default App
