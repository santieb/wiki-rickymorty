import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './components/NotFound'
import CharacterDetails from './pages/CharacterDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/character/:id" element={<CharacterDetails/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
