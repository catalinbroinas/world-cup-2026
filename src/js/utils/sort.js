
export function sortBy(arr, option) {
  if (!arr?.length) return [];

  if (option === 'default') return arr;

  return [...arr].sort((a, b) => {
    switch (option) {
      case 'name-asc':
        return a.name.localeCompare(b.name);

      case 'name-desc':
        return b.name.localeCompare(a.name);

      case 'capacity-asc':
        return a.capacity - b.capacity;

      case 'capacity-desc':
        return b.capacity - a.capacity;

      case 'matches-asc':
        return a.matches - b.matches;

      case 'matches-desc':
        return b.matches - a.matches;

      default:
        return 0;
    }
  });
}
