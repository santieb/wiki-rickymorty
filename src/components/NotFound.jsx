import '../NotFound.css'
import { useParams, useNavigate } from "react-router-dom";
import { NotFoundCotainer } from '../styles/styled'

const NotFound = ({ clearFilters }) => {
  const navigate = useNavigate()
  const params = useParams()

  const isPage = Object.entries(params).length !== 0

  return (
    <>
      <NotFoundCotainer isPage={Object.entries(params).length !== 0}>
        <div>
          <span className="span">44</span>
        </div>
        <p className="phrase">
          {isPage ? 'The page you are trying to search has been' : 'The characters you are trying to find have'}
          <br/> moved to another universe.</p>
        {isPage ? 
           <button onClick={() => navigate('/')} type="button">GET ME HOME</button>:
           <button onClick={() => clearFilters()} type="button">Clear Filters</button>}
      </NotFoundCotainer>
    </>
  )
}

export default NotFound