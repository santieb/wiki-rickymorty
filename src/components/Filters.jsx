import constants from '../constants'

const Accordion = ({ status, gender, species, setStatus, setSpecies, setGender, clearFilters }) => {
  const { SPECIES, GENDERS, STATUS } = constants

  return (
    <div className="faq__holder">
      <div className="faq__header">
        <h1 className="faq__heading">Filters</h1>
        <button type="button" onClick={() => clearFilters()}>Clear filter</button>
      </div>
      <p> {`${status} ${species} ${gender}`}</p>
      <details className="faq__detail">
        <summary className="faq__summary"><span className="faq__question">Status</span></summary>

        {STATUS.map(element => <button key={element} type="button" onClick={() => setStatus(element)}>{element}</button>)}
      </details>

      <details className="faq__detail">
        <summary className="faq__summary"><span className="faq__question">Species</span></summary>
        {SPECIES.map(element => <button key={element} type="button" onClick={() => setSpecies(element)}>{element}</button>)}
      </details>

      <details className="faq__detail">
        <summary className="faq__summary"><span className="faq__question">Gender</span></summary>
        {GENDERS.map(element => <button key={element} type="button" onClick={() => setGender(element)}>{element}</button>)}
      </details>

    </div>
  )
}

export default Accordion