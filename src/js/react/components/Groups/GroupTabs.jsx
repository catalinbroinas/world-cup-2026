
function GroupTabs({ groups, activeTab, onTabChange }) {
  return (
    <ul className="nav nav-tabs nav-fill group-tabs" role="tablist">
      {groups.map((group) => (
        <li
          key={group.id}
          className="nav-item group-tabs__item"
          role="presentation"
        >
          <button
            type="button"
            role="tab"
            aria-selected={group.id === activeTab}
            className={`group-tabs__link${
              group.id === activeTab ? " active" : ""
            }`}
            onClick={() => onTabChange(group.id)}
          >
            {group.id}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GroupTabs;
