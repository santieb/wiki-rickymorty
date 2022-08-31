import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Character from './Character'

const CardContent = styled.div`
  padding: 50px;
  position: absolute;
  display: grid;
  gap: 20px;
  justify-items : center;
  grid-template-columns: auto auto auto auto;
  align-content : center;
`

const CharacterList = () => {
  const [characters, setCharacters] = useState()

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const data = await res.json()
      setCharacters(data.results)
    }
    getData()
  }, [])

  return (
     <CardContent>
      {characters ? characters.map(character => <Character key={character.id} character={character}/>) : null}
    </CardContent>
  )
}

export default CharacterList