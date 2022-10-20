import styled from 'styled-components'

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
  Card,
  CardContent,
  Status,
  HeaderCard,
  Title,
  Paragraph,
  Span,
}