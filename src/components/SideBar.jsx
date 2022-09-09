import styled from 'styled-components'
import Accordion from './Filters'

const Container = styled.div`
  padding: 0rem 2rem;

  @media (max-width: 800px) {
    width: 100%;
    padding: 2.5rem 0.5rem;
  }
`

const Title = styled.h2`
  font-size: 2rem;
`

const SideBar = ({ status, gender, species, setStatus, setSpecies, setGender, setSearch }) => {
  return (
    <Container>
      <Title>Characters</Title>
      <input  type="text" 
        placeholder='Search for characters'
        onChange={({ target }) => setSearch(target.value)}
        className="form__input" id="name"
      />
      <label for="name" class="form__label">Full Name</label>
      <Accordion status={status} gender={gender} species={species} setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} />
    </Container>
  )
}

export default SideBar