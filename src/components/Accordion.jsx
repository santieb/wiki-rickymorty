import constants from '../constants'

const Accordion = ({ setStatus, setGender, setSpecies }) => {
  const { species, genders, status } = constants

  const clearFilters = () => {
    setStatus('')
    setGender('') 
    setSpecies('')
  }

  return (
    <div>
      <button type="button" onClick={() => clearFilters()}>Clear filter</button>
      {status.map(element => <button type="button" onClick={() => setStatus(element)}>{element}</button>)}
      {genders.map(element => <button type="button" onClick={() => setGender(element)}>{element}</button>)}
      {species.map(element => <button type="button" onClick={() => setSpecies(element)}>{element}</button>)}
    </div>
  )
}

export default Accordion