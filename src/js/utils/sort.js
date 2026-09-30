
export function sortBy(arr, option) {
  if (!arr?.length) return [];

  if (option === 'default') return arr;

  return [...arr].sort((a, b) => {
    switch (option) {
      case 'name-asc':
        return a.name.localeCompare(b.name);

      case 'name-desc':
        return b.name.localeCompare(a.name);

      default:
        return 0;
    }
  });
}
