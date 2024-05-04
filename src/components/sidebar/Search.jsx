export function Search({ text, setText }) {
  return (
    <div style={{ position: "absolute", top: 25, left: 320 }}>
      <input
        style={{ borderRadius: 5, borderWidth: 1, width: 140 }}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
}
