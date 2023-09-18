export const truncateWords = (value, limit) => {
  const words = value.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  }
  return value;
}