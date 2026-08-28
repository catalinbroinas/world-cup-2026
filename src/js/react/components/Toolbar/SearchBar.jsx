import { useEffect } from "react";
import { Input, initMDB } from "mdb-ui-kit/js/mdb.es.min";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ name, query, onQueryChange }) {
  useEffect(() => {
    initMDB({ Input });
  }, []);

  return (
    <div className="input-group">
      <div className="form-outline" data-mdb-input-init>
        <input
          type="search"
          id={`search-${name}`}
          className="form-control"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />

        <label className="form-label" htmlFor={`search-${name}`}>Search</label>
      </div>

      <label className="input-group-text border-0" htmlFor={`search-${name}`}>
        <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden="true" />
      </label>
    </div>
  );
}

export default SearchBar;
