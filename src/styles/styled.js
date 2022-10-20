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
  flex-basis: 50%;

  @media (max-width: 800px) {
    padding-left: 10px;
    min-width: 100%;
  }
`

const Card = styled.div`
  height: 180px;
  cursor: pointer;
  &&:hover {
    transform: scale(0.9, 0.9);
  }
`

const Status = styled.p`
  font-weight: 700;
  color: white;
  background-color: green;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0 0 0;
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
  width: 300px;
  flex-direction: column;
  margin: 0;
`

const HeaderCard = styled.div`
  display: flex;
  gap: 10px;
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
  margin: 1em 0 0 0;
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
  CardContent,
  Status,
  HeaderCard,
  Title,
  Paragraph,
  Span,
}