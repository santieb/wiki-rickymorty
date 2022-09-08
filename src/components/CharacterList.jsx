import styled from 'styled-components'
import Character from './Character'

const CardContent = styled.div`
  padding: 50px;
  display: grid;
  gap: 20px;
  justify-items : center;
  grid-template-columns: auto auto auto auto;
  align-content : center;
`

const CharacterList = ({ characters }) => {
  return (
     <CardContent>
      {characters ? characters.map(character => <Character key={character.id} character={character}/>) : null}
    </CardContent>
  )
}

export default CharacterList