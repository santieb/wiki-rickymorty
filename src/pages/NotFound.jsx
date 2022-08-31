import { useNavigate } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
  const navigate = useNavigate()

  return (	
    <div>
        <div className="space"></div>
          <div className="wrapper">
            <div>
              <span className="span">44</span>
            </div>
          <p className="phrase">The page you are trying to search has been <br/> moved to another universe.</p>
        <button onClick={() => navigate('/')} type="button">GET ME HOME</button>
      </div>
    </div>
  )
}

export default NotFound