export default function getTime(date) {
  const newDate = new Date(date);

  const hour = newDate.getHours();
  const minute = newDate.getMinutes();
  const second = newDate.getSeconds();
  return hour + ":" + minute + ":" + second;
}
