import styled from 'styled-components'

const Title = styled.h1`
  font-size: 6em;
  text-align: center;
  color: #f96e4d;
  margin: 0;
  padding: 30px;
`;

const ImageContainer = styled.div`
  margin: 0;
  padding: 0;
`

const Nav = () => {
  return (
    <ImageContainer>
      <Title>Rick and Morty Wiki</Title>
    </ImageContainer>
  )
}

export default Nav