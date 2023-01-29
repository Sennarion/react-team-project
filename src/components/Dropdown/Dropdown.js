import { nanoid } from 'nanoid';

export default function Dropdown({ options, value, onChange }) {
  return (
    <div>
      <select value={value} onChange={onChange}>
        {options.map(option => (
          <option key={nanoid()} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>you choose {value}</p>
    </div>
  );
}
