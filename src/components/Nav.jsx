import styled from 'styled-components'

const Title = styled.h1`
  font-size: 6em;
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 30px;
`;

const ImageContainer = styled.div`
  margin: 0;
  padding: 0;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44w35AjsnhyMybNzl073dj3yYrmWs0hwrbA&usqp=CAU");
  background-color: #d6a8a8;
  height: 40vh;
`

const Nav = () => {
  return (
    <ImageContainer>
      <Title>Rick and Morty Wiki</Title>
    </ImageContainer>
  )
}

export default Nav