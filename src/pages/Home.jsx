import styled from 'styled-components'
import CharacterList from '../components/CharacterList'
import Nav from '../components/Nav'

const Container = styled.div`
  display: flex;
  justify-content: center;
`


function App() {
  return (
    <>
      <Nav/>
      <Container>
        <CharacterList/>
      </Container>
    </>
  )
}

export default App

