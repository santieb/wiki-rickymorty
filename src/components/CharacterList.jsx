import { List, SideBar, Div } from '../styles/styled'
import Character from './Character'
import Pagination from './Pagination'

const CharacterList = ({ characters, pageNumber, info, updatePageNumber }) => {
  return (
    <>
    <Div>
      <List>
        {characters ? characters.map(character => <Character key={character.id} character={character} />) : null}
      </List>
      </Div>
      <SideBar>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          updatePageNumber={updatePageNumber}
          characters={characters}
        />
      </SideBar>
    </>
  )
}

export default CharacterList
