import { useNavigate } from "react-router-dom";
import { Card } from '../styles/styled'

const Character = ({ character }) => {
  const navigate = useNavigate()
  const { image, id } = character
  return (
    <Card onClick={() => navigate(`/character/${id}`)}>
      <img style={{ height: "180px"}} src={image} alt={`${id} character`} />
    </Card>
  )
}

export default Character