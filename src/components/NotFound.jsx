import '../NotFound.css'
import { useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components'

const Container = styled.div`
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

const NotFound = ({ clearFilters }) => {
  const navigate = useNavigate()
  const params = useParams()

  const isPage = Object.entries(params).length !== 0

  return (
    <>
      <Container isPage={Object.entries(params).length !== 0}>
        <div>
          <span className="span">44</span>
        </div>
        <p className="phrase">
          {isPage ? 'The page you are trying to search has been' : 'The characters you are trying to find have'}
          <br/> moved to another universe.</p>
        {isPage ? 
           <button onClick={() => navigate('/')} type="button">GET ME HOME</button>:
           <button onClick={() => clearFilters()} type="button">Clear Filters</button>}
      </Container>
    </>
  )
}

export default NotFound