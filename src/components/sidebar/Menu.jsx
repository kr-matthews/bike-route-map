import { useState } from "react";
import {
  UNIDIRECTIONAL_COLOUR_FULL,
  UNIDIRECTIONAL_COLOUR_LIGHT,
} from "../../utils/params";

export default function Menu({ options, setSelectedId }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Menu</h1>
      {options.map(({ id, name }) => (
        <Option key={id} name={name} onClick={() => setSelectedId(id)} />
      ))}
    </>
  );
}

function Option({ name, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        backgroundColor: hover
          ? UNIDIRECTIONAL_COLOUR_FULL
          : UNIDIRECTIONAL_COLOUR_LIGHT,
        borderRadius: "1em",
        padding: "1em",
        marginTop: "2em",
        marginLeft: "auto",
        marginRight: "auto",
        cursor: "pointer",
        width: "10em",
        textAlign: "center",
        color: "White",
        fontWeight: hover ? "bold" : "",
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={onClick}
    >
      {name}
    </div>
  );
}
