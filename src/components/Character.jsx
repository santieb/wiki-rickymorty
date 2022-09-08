import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  background-color:  #3c3c44;
  width: 250px;
  height: 250px;
  border: 0px;
  margin: 0;
  cursor: pointer;
  justify-content: flex-end;

  &&:hover {
    box-shadow: 0px 0px 20px 0px #000;
  }
`

const Image = styled.img`
  height: 250px;
`

const CardContent = styled.div`
  display: flex;
  position: absolute;
  background-color: #000;
  opacity: 0.7;
  align-items: bottom;
  width: 250px;
`

const Name = styled.p`
  font-weight: 500;
  font-size: 1.5em;
  opacity: 1;
  margin: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 5%;
  color: white;
`

const Character = ({ character }) => {
  const navigate = useNavigate()
  const { name, image, id } = character
  return (
    <Card onClick={() => navigate(`/character/${id}`)}>
      <Image src={image}/>
      <CardContent>
        <Name>{name}</Name>
      </CardContent>
    </Card>
  )
}

export default Character