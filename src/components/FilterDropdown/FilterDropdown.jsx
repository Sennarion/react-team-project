import { useState } from 'react';
import {
  SelectWrapper,
  ButtonSelect,
  SelectList,
  SelectItem,
} from './FilterDropdown.styled';

export default function FilterDropdown({
  filters,
  onSelectToggle,
  defValue,
  selectDropdownShown,
  handleDropDown,
}) {
  const [filter, setFilter] = useState(0);
  const filterNames = [defValue];
  filterNames.push(...filters.map(fil => fil.label));

  function handleFilter(e) {
    setFilter(e.target.dataset.id);
    onSelectToggle(e.target.dataset.id);
    handleDropDown();
  }

  return (
    <SelectWrapper>
      <ButtonSelect
        type="button"
        onClick={handleDropDown}
        isOpen={selectDropdownShown}
      >
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
