export const daysSince = (date) => {
  // Get the current date
  const currentDate = new Date();

  // Convert the input date and the current date to timestamps
  const dateTimestamp = date.getTime();
  const currentTimestamp = currentDate.getTime();

  // Calculate the difference in timestamps
  const timestampDifference = currentTimestamp - dateTimestamp;

  // Convert the difference in timestamps to days
  const days = Math.floor(timestampDifference / (1000 * 60 * 60 * 24));

  // Return the number of days
  return days;
}
