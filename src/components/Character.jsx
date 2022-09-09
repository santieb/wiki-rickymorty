import styled from 'styled-components'

const Card = styled.div`
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


const Character = ({ character }) => {
  const { name, image, species, status, gender, origin, location } = character

  const locationn = location?.name
  const originn = origin?.name

  return (
    <Card>
      <CardImage src={image}></CardImage>
      <CardContent>
        <HeaderCard>
          <Title>{name}</Title>
          <Status status={status}>{status}</Status>
        </HeaderCard>
        <Paragraph><Span>Species: </Span>{species}</Paragraph>
        <Paragraph><Span>Gender: </Span>{gender}</Paragraph>
        <Paragraph><Span>Location: </Span>{locationn}</Paragraph>
        <Paragraph><Span>Origin: </Span>{originn}</Paragraph>
      </CardContent>
    </Card>
  )
}

export default Character