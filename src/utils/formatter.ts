export const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDay().toString().padStart(2, '0');
  return `${year}.${month}.${day}`;
};