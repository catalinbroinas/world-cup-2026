
function Sort({ name, value, options, onChange }) {
  if (!options?.length) {
    console.error(
      `Sort: no sorting options provided for "${name}".`
    );
    
    return null;
  }

  return (
    <div className="input-group">
      <select
        id={`sort-${name}`}
        className="form-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Sort by"
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Sort;
