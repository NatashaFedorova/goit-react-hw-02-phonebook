import { Description, FilterInput } from './Filter.styled';

const changeFilter = e => {
  this.setState({ filter: e.target.value });
};

const FilterBlock = ({ value }) => {
  return (
    <>
      <Description>Find contacts by name</Description>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={changeFilter}
      />
    </>
  );
};
export default FilterBlock;
