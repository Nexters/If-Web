export const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}.${month}.${day}`;
};

export const getFormattedDistance = (distance: string) => {
  if (!distance) return '';
  const numberDist = +distance;
  if (numberDist < 1000) return `${distance}m`;
  return `${(numberDist / 1000).toFixed(1)}km`;
};
