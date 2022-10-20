import { useState } from 'react'
import Modal from 'react-modal';
import { Card, HeaderCard, CardContent, Title, Status, Paragraph, Span } from '../styles/character'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const Character = ({ character }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  const { id, name, image, species, status, gender, origin, location } = character
  const locationn = location?.name
  const originn = origin?.name

  return (
    <Card>
      <img onClick={openModal} style={{ height: "180px" }} src={image} alt={`${id} character`} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="character"
      >
        <img src={image} alt={`${id} character`} />
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
      </Modal>
    </Card>
  )
}

export default Character