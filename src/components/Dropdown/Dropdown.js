import { nanoid } from 'nanoid';
import { Select } from './Dropdown.styled';

export default function Dropdown({ options, value, onChange }) {
  return (
    <div>
      <Select value={value} onChange={onChange}>
        {options.map(option => (
          <option key={nanoid()} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {/* <p>you choose {value}</p> */}
    </div>
  );
}
