import Card from './Card'
import Pagination from './Pagination'

const CharacterList = ({ characters, pageNumber, info, updatePageNumber }) => {
  return (
     <>
      {characters ? characters.map(character => <Card key={character.id} character={character}/>) : null}
      <Pagination 
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
        characters={characters} 
      />
    </>
  )
}

export default CharacterList