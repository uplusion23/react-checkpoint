const getFormattedDate = (date) => {
  const year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return month + '/' + day + '/' + year;
}

export default function timeSince(date) {
  date = new Date(date);
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) return getFormattedDate(date);
  interval = seconds / 2592000;
  interval = seconds / 86400;
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours";

  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes";
  return Math.floor(seconds) + " seconds";
}

/*
if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days";

  interval = seconds / 3600;
 */