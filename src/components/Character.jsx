import styled from 'styled-components'
import { motion } from "framer-motion"

const Card = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: center;
  width: 250px;
  flex-direction: column;
  background-color:  #3c3c44;
  border-radius: 10px;
  border: 0px;
  margin: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 0px 20px 0px #000;
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

const Image = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 250px;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

const CardStatus = styled.div`
  display: flex;
  align-items: center;
`

const Status = styled.p`
  font-weight: 500;
`
const Name = styled.p`
  margin: 0;
  margin-top: 10px;
  font-weight: 900;
  font-size: 1.5em;
`

const Character = ({ character }) => {
  const { name, image, status, species } = character
  return (
    <Card>
      <Image src={image}/>
      <CardContent>
        <Name>{name}</Name>
        <CardStatus>
          <Circle status={status}></Circle>
          <Status>{`${status} - ${species}`}</Status>
        </CardStatus>
      </CardContent>
    </Card>
  )
}

export default Character