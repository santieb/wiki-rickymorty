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

const Content = styled.div`
  width: 50%;

  @media (max-width: 800px) {
    min-width: 100%;
  }
`

const Div = styled.div`
  height: 82vh;

  @media (max-width: 800px) {
    height: 100%;
  }
`

const List = styled.div`
  gap: 10px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  flex-basis: 50%;

  @media (max-width: 800px) {
    justify-content: center;
  }
`

const SideBar = styled.div`
  display: flex;
  justify-content: center;
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

export {
  Container,
  SideBar,
  Div,
  SideBarCotainer,
  NotFoundCotainer,
  Content,
  List
}