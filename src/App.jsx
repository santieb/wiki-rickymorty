import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './components/NotFound'
import Character from './pages/Character';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/character/:id" element={<Character/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
