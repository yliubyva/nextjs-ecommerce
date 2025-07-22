export function isSelected<T>(selectedOptions: T | T[], item: T): boolean {
  if (Array.isArray(selectedOptions)) {
    return selectedOptions.includes(item);
  }
  return selectedOptions === item;
}

export function toggleItem<T>(items: T[], item: T): T[] {
  if (items.includes(item)) {
    return items.filter((i) => i !== item);
  }
  return [...items, item];
}
