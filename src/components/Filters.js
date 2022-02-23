import '../styles/components/Filters.scss';

const Filters = (props) => {

  //Handle Submit & Reset
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleReset = () => {
    props.resetBtn();
  };

  //Handle Inputs
  const handleInputs = (ev) => {
    props.handleFilter({
      key: ev.currentTarget.id,
      value: ev.currentTarget.value,
      checked: ev.currentTarget.checked,
    });
  };

  return (
    <form className="filter" onSubmit={handleSubmit}>
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
          onChange={handleInputs}
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
          onChange={handleInputs}
        >
          <option value="gryffindor">Gryffindor</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="slytherin">Slytherin</option>
        </select>
      </div>
      <div className="filter__item">
        <label htmlFor="gender" className="filter__label">
          Selecciona el género:
        </label>
        <select
          className="filter__input"
          name="gender"
          id="gender"
          value={props.filterGender}
          onChange={handleInputs}
        >
          <option value="all">Todos</option>
          <option value="female">Mujer</option>
          <option value="male">Hombre</option>
        </select>
      </div>
      <div className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__input"
          name="checkboxs"
          id="alternate"
          value={props.filterAlternate}
          checked={props.filterAlternate}
          onChange={handleInputs}
        />
        <label htmlFor="sort" className="filter__label">
        Nombres alternativos
        </label>
      </div>
      <div className="filter__checkbox">
        <input
          type="checkbox"
          className="filter__input"
          name="checkboxs"
          id="sort"
          value={props.filterSort}
          checked={props.filterSort}
          onChange={handleInputs}
        />
        <label htmlFor="sort" className="filter__label">
          Orden alfabético
        </label>
      </div>
      <button type="reset" className="filter__button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default Filters;
