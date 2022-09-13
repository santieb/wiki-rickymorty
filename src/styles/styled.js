import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding-top: 0px;
  }
`

const SideBarCotainer = styled.div`
  padding: 0rem 4rem;
  @media (max-width: 800px) {
    width: 100%;
    padding: 2.5rem 0.5rem 0 0.5rem;
  }
`

const NotFoundCotainer = styled.div`
  position: ${props => props.isPage ? 'absolute' : 'flex'};
  margin: auto;
  top: 50%;
  transform: ${props => props.isPage ? 'translateY(-50%)' : ''};
  left: 0;
  right: 0;
  width: fit-content;
  text-align: center;
  z-index: 4;
`

const Content = styled.div`
  gap: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 50%;

  @media (max-width: 800px) {
    padding-left: 10px;
    min-width: 100%;
  }
`

const ImageContainer = styled.div`
  background-image: url("../../background-character.jpg");
  height: 100vh;
  width: 100vw;
`

const Card = styled.div`
  height: 180px;
  cursor: pointer;
  &&:hover {
    box-shadow: 0px 10px 10px -6px black;
  }
`

const CardCharacter = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`

const Status = styled.p`
  font-weight: 700;
  color: white;
  background-color: green;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  background-color: ${props => {
    switch (props.status) {
      case 'Alive': 
        return 'green';
      case 'Dead': 
        return 'red';
      case 'unknown': 
        return 'gray';
    }
  }}
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`

const CardImage = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const HeaderCard = styled.div`
  display: flex;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.div`
  font-size: 1.5em;
  margin: 0.5em;
  font-weight: 700;
  margin: 0;
`

const Paragraph = styled.p`
  margin: 0.5em;
`

const Span = styled.span`
  font-weight: bolder;
`

export {
  Container,
  SideBarCotainer,
  NotFoundCotainer,
  Content,
  Card,
  CardCharacter,
  ImageContainer,
  CardContent,
  CardImage,
  Status,
  HeaderCard,
  Title,
  Paragraph,
  Span,
}