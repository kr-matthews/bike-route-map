import { REGIONS } from "../../data/regions";

const options = Object.values(REGIONS);

export function ListTypeDropdown({ selected, setSelected }) {
  return (
    <select
      id="list-type"
      style={{ position: "absolute", top: 25, left: 150, borderRadius: 5 }}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    >
      {options.map(({ name }) => (
        <option key={name} id={name}>
          {name}
        </option>
      ))}
    </select>
  );
}
