import Character from './Character'
import Pagination from './Pagination'

const CharacterList = ({ characters, pageNumber, info, updatePageNumber }) => {
  return (
     <>
      {characters ? characters.map(character => <Character key={character.id} character={character}/>) : null}
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
