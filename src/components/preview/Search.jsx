export function Search({ text, setText }) {
  return (
    <div style={{ position: "absolute", top: 25, left: 220 }}>
      <input
        style={{ borderRadius: 5 }}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
}
