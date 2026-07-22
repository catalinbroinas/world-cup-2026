
function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <ul className="nav nav-tabs nav-fill tabs" role="tablist">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className="nav-item tabs__item"
          role="presentation"
        >
          <button
            type="button"
            role="tab"
            aria-selected={tab.id === activeTab}
            className={`tabs__link${
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

export default Tabs;
