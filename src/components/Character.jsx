import { CardCharacter, CardImage, HeaderCard, CardContent, Title, Status, Paragraph, Span } from '../styles/styled'

const Character = ({ character }) => {
  const { name, image, species, status, gender, origin, location } = character

  const locationn = location?.name
  const originn = origin?.name

  return (
    <CardCharacter>
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
    </CardCharacter>
  )
}

export default Character