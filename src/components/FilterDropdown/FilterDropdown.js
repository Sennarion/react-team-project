import { useState } from 'react';
import {
  SelectWrapper,
  ButtonSelect,
  SelectList,
  SelectItem,
} from './FilterDropdown.styled';
// import icons from '../../images/icons.svg';

export default function FilterDropdown({ filters, onSelectToggle, defValue }) {
  const [selectDropdownShown, setSelectDropdownShown] = useState(false);
  const [filter, setFilter] = useState(0);
  const filterNames = [defValue];

  filterNames.push(...filters.map(fil => fil.label));

  function handleDropDown() {
    setSelectDropdownShown(prev => !prev);
  }

  function handleFilter(e) {
    setFilter(e.target.dataset.id);
    onSelectToggle(e.target.dataset.id);
    handleDropDown();
  }

  return (
    <SelectWrapper>
      <ButtonSelect type="button" onClick={handleDropDown}>
        <p>{filterNames[filter]}</p>
      </ButtonSelect>
      {selectDropdownShown && (
        <SelectList>
          {filters.map((filter, i) => {
            return (
              <SelectItem
                key={filter.value}
                data-label={filter.label}
                data-id={i + 1}
                onClick={handleFilter}
              >
                {filter.label}
              </SelectItem>
            );
          })}
        </SelectList>
      )}
    </SelectWrapper>
  );
}
