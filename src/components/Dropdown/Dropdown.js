import { nanoid } from 'nanoid';
import { Option, Select, SelectWrap } from './Dropdown.styled';

export default function Dropdown({ options, value, onChange }) {
  return (
    <SelectWrap>
      <Select value={value} onChange={onChange}>
        {options.map(option => (
          <Option key={nanoid()} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </SelectWrap>
  );
}
