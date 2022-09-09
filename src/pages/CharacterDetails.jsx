import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import Character from '../components/Character'

const ImageContainer = styled.div`
  background-image: url("../../background-character.jpg");
  height: 100vh;
  width: 100vw;
`

const CharacterDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [character, setCharacter] = useState('');

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const data = await res.json()
      setCharacter(data)
    }
    getData()
  }, [])

  return (
    <>
      <ImageContainer>
        <button onClick={() => navigate('/')}>Back</button>
        <Character character={character}/>
      </ImageContainer>
    </>
  )
}

export default CharacterDetails