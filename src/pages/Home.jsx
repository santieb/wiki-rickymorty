import { useState, useEffect } from 'react'

import { Container, Content } from '../styles/styled'
import SideBar from '../components/SideBar'
import CharacterList from '../components/CharacterList'
import NotFoundMessage from '../components/NotFound'
import Spinner from '../components/Spinner'

function App() {
  const [data, setData] = useState('')
  const [info, setInfo] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [pageNumber, updatePageNumber] = useState(1)
 
  useEffect(() => {
    updatePageNumber(1)
  }, [status, gender, species, search])

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

    setTimeout(() => {
      setLoading(false)
    }, 600)

  }, [api])

  const clearFilters = () => {
    setStatus('')
    setGender('') 
    setSpecies('')
    updatePageNumber(1)
  }

  return (
    <>
      <Container>
      <SideBar 
        status={status} 
        gender={gender} 
        species={species} 
        setStatus={setStatus} 
        setGender={setGender} 
        setSpecies={setSpecies} 
        setSearch={setSearch}
        clearFilters={clearFilters} 
      />
      <Content>
        { loading ? <Spinner/> :
          data ?  
            <CharacterList 
            info={info}
            pageNumber={pageNumber}
            updatePageNumber={updatePageNumber}
            characters={data}
          /> :
            <NotFoundMessage clearFilters={clearFilters}/>
        }
      </Content>
      </Container>
    </>
  )
}

export default App
