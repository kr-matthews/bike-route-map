import {
  ALL,
  BURNABY,
  NEW_WESTMINSTER,
  NORTH_VANCOUVER,
  RICHMOND,
  UBC,
  VANCOUVER,
  VISIBLE,
  WEST_VANCOUVER,
} from "../../data/routes";

const options = [
  ALL,
  VISIBLE,
  VANCOUVER,
  UBC,
  BURNABY,
  NEW_WESTMINSTER,
  RICHMOND,
  NORTH_VANCOUVER,
  WEST_VANCOUVER,
];

export function ListTypeDropdown({ selected, setSelected }) {
  return (
    <select
      id="list-type"
      style={{ position: "absolute", top: 25, left: 180, borderRadius: 5 }}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} id={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
