import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import images from '../assets/images'

const ImageContainer = styled.div`
  background-image: url("../../fondo-de-rick-y-morty-papel-pintado-1920x1280_38.jpg");
  background-color: #d6a8a8;
  height: 100vh;
  width: 100vw;
`

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 700px;
  color: black;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &&:hover {
    box-shadow: 0px 0px 20px 0px #000;
  }
`

const Status = styled.p`
  font-weight: 500;
`

const Circle = styled.div`
  border-radius: 100%;
  width: 10px;
  height: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: ${props => {
    switch (props.status) {
      case 'Alive': 
        return 'green';
      case 'Dead': 
        return 'red';
      case 'unknown': 
        return 'gray';
    }
  }}
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`

const CardImage = styled.img`
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

const Division = styled.div`
  display: flex;
`

const Title = styled.div`
  font-size: 1.5em;
  margin: 1em;
`

const Genre = styled.p`
  font-size: 1.5em;
  background-color: #7676f7;
`

const Character = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState('');
  const { name, image, species, status, gender, origin, location } = character
  console.log(character)
  const locationn = location?.name
  const originn = origin?.name

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
        <Card>
          <CardImage src={image}></CardImage>

          <CardContent>
            <Title>{name}</Title>
            <Division>
              <Circle status={status}></Circle>
              <Status>{`${status}`}</Status>
            </Division>
            <Division>
              <img src={images.mutation}></img>
              <p>{species}</p>
            </Division>
            
            <Genre>{gender}</Genre>
            <p>{locationn}</p>
            <p>{originn}</p>
          </CardContent>
        </Card>
      </ImageContainer>
    </>
  )
}

export default Character