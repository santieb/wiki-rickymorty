import styled from 'styled-components'
import Accordion from './Filters'

const Container = styled.div`
  padding: 0rem 4rem;
  @media (max-width: 800px) {
    width: 100%;
    padding: 2.5rem 0.5rem 0 0.5rem;
  }
`

const SideBar = ({ status, gender, species, setStatus, setSpecies, setGender, setSearch, clearFilters }) => {
  return (
    <Container>
      <h2 style={{ fontSize: "2rem"}}>Characters</h2>
      <input  type="text" 
        placeholder='Search for characters'
        onChange={({ target }) => setSearch(target.value)}
        className="form__input" id="name"
      />
      <label for="name" class="form__label">Full Name</label>
      <Accordion status={status} gender={gender} species={species} setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} clearFilters={clearFilters} />
    </Container>
  )
}

export default SideBar
