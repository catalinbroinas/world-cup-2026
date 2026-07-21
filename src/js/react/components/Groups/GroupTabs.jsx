
function GroupTabs({ tabs, activeTab, onTabChange }) {
  return (
    <ul className="nav nav-tabs nav-fill group-tabs" role="tablist">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className="nav-item group-tabs__item"
          role="presentation"
        >
          <button
            type="button"
            role="tab"
            aria-selected={tab.id === activeTab}
            className={`group-tabs__link${
              tab.id === activeTab ? " active" : ""
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GroupTabs;
