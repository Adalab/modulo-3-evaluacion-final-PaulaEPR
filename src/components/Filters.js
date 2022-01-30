import '../styles/components/Filters.scss';

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleReset = () => {
    props.resetBtn();
  };
  const handleInputCharacter = (ev) => {
    props.handleFilter({
      key: 'character',
      value: ev.currentTarget.value,
    });
  };
  const handleInputHouse = (ev) => {
    props.handleFilter({
      key: 'house',
      value: ev.currentTarget.value,
    });
  };
  return (
    <form className="filter" onSubmit={handleSubmit} >
      <div className="filter__item">
        <label htmlFor="character" className="filter__label">
          Busca por personaje:
        </label>
        <input
          type="text"
          className="filter__input"
          name="character"
          id="character"
          value={props.filterCharacter}
          onChange={handleInputCharacter}
        />
      </div>
      <div className="filter__item">
        <label htmlFor="house" className="filter__label">
          Selecciona la casa:
        </label>
        <select
          className="filter__input"
          name="house"
          id="house"
          value={props.filterHouse}
          onChange={handleInputHouse}
        >
          <option value="gryffindor">Gryffindor</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="slytherin">Slytherin</option>
        </select>

      </div>
      <button type="reset" className="filter__button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default Filters;
