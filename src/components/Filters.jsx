import constants from '../constants'

const Accordion = ({ status, gender, species, setStatus, setSpecies, setGender }) => {
  const { SPECIES, GENDERS, STATUS } = constants

  const clearFilters = () => {
    setStatus('')
    setGender('')
    setSpecies('')
  }

  return (
    <div class="faq__holder">
      <div class="faq__header">
        <h1 class="faq__heading">Filters</h1>
        <button type="button" onClick={() => clearFilters()}>Clear filter</button>
      </div>
      <p> {`${status} ${species} ${gender}`}</p>
      <details class="faq__detail">
        <summary class="faq__summary"><span class="faq__question">Status</span></summary>

        {STATUS.map(element => <button type="button" onClick={() => setStatus(element)}>{element}</button>)}
      </details>

      <details class="faq__detail">
        <summary class="faq__summary"><span class="faq__question">Species</span></summary>
        {SPECIES.map(element => <button type="button" onClick={() => setSpecies(element)}>{element}</button>)}
      </details>

      <details class="faq__detail">
        <summary class="faq__summary"><span class="faq__question">Gender</span></summary>
        {GENDERS.map(element => <button type="button" onClick={() => setGender(element)}>{element}</button>)}
      </details>

    </div>
  )
}

export default Accordion