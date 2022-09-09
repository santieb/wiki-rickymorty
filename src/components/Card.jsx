import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  height: 180px;
  cursor: pointer;
  &&:hover {
    box-shadow: 0px 0px 20px 0px #000;
  }
`

const Image = styled.img`
  height: 180px;
`

const Character = ({ character }) => {
  const navigate = useNavigate()
  const { name, image, id } = character
  return (
    <Card onClick={() => navigate(`/character/${id}`)}>
      <Image src={image}/>
    </Card>
  )
}

export default Character