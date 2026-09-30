
function Sort() {
  return (
    <div className="input-group">
      <select className="form-select" aria-label="Sort by">
        <option value="default">Default</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
      </select>
    </div>
  );
}

export default Sort;
