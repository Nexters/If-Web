export const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}.${month}.${day}`;
};

export const getFormattedFullDate = (dateString: string) => {
  const rand = Math.floor(Math.random() * 10);
  const arr = [
    '2021-01-02 12:11:11',
    '2021-02-02 12:11:11',
    '2021-02-07 12:11:11',
    '2021-02-13 12:11:11',
    '2021-01-11 12:11:11',
    '2021-01-22 12:11:11',
    '2021-01-30 12:11:11',
    '2021-02-14 12:11:11',
    '2021-02-02 12:11:11',
    '2021-01-23 12:11:11',
    '2021-02-09 12:11:11',
  ];
  return arr[rand];
  return new Date(dateString)
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');
};

export const getFormattedDistance = (distance: string) => {
  if (!distance) return '';
  const numberDist = +distance;
  if (numberDist < 1000) return `${distance}m`;
  return `${(numberDist / 1000).toFixed(1)}km`;
};
