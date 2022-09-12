import images from '../assets'
import { SideBarCotainer } from '../styles/styled'
import Accordion from './Filters'

const SideBar = ({ status, gender, species, setStatus, setSpecies, setGender, setSearch, clearFilters }) => {
  return (
    <SideBarCotainer>
      <img style={{ width: '350px'}} src={images.title}></img>
      <h2 style={{ fontSize: '2rem'}}>Characters</h2>
      <input type='text'
        placeholder='Search for characters'
        onChange={({ target }) => setSearch(target.value)}
        className="form__input" id="name"
      />
      <label htmlFor="name" className="form__label">Full Name</label>
      <Accordion status={status} gender={gender} species={species} setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} clearFilters={clearFilters} />
    </SideBarCotainer>
  )
}

export default SideBar
