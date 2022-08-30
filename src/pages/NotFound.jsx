import { useNavigate } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
  const navigate = useNavigate()

  return (	
    <div>
        <div class="space"></div>
          <div class="wrapper">
            <div>
              <span>44</span>
            </div>
          <p>The page you are trying to search has been <br/> moved to another universe.</p>
        <button onClick={() => navigate('/')} type="button">GET ME HOME</button>
      </div>
    </div>
  )
}

export default NotFound