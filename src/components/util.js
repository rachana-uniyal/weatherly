import dayjs from 'dayjs'

function kelvinToCelsius(kelvinTemp) {
    return Math.round(kelvinTemp - 273.15)
}

function convertUnixTimestampToReadableTime(unixTimestamp) {
  // Convert Unix timestamp to milliseconds and create a Date object
  const date = new Date(unixTimestamp * 1000);

  // Convert UTC date to IST by adding 5 hours and 30 minutes
  date.setHours(date.getUTCHours() + 5);
  date.setMinutes(date.getUTCMinutes() + 30);

  // Extract hours and minutes
  const hours = date.getHours(); // Note: Not using getUTCHours() since we've manually adjusted the date to IST
  const minutes = date.getMinutes();

  // Format the time in HH:MM format, converting to 12-hour format with AM/PM
  const hoursIn12HourFormat = hours % 12 || 12; // Convert 24-hour time to 12-hour format
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes; // Ensure two-digit formatting
  const amOrPm = hours < 12 ? 'AM' : 'PM'; // Determine AM/PM

  const formattedTime = `${hoursIn12HourFormat}:${formattedMinutes} ${amOrPm}`;

  return formattedTime;
}

function getCompassDirection(degrees) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'];
    const index = Math.round(((degrees % 360) / 22.5));
    return directions[index]; // Returns the compass direction
}

function groupWeatherDataByDate(weatherDataArray) {
    const groupedByDate = {};
  
    // Group data by date
    weatherDataArray.forEach(item => {
      const date = item.dt_txt.split(' ')[0];
      if (!groupedByDate[date]) {
        groupedByDate[date] = [];
      }
      groupedByDate[date].push(item);
    });
  
    // Convert grouped data into an array format
    const groupedDataArray = Object.keys(groupedByDate).map(date => {
      return {
        date: date,
        data: groupedByDate[date]
      };
    });
  
    return groupedDataArray;
}

function convertToReadableTime(datetimeStr) {
  const formatString = 'h:mm A'
  const readableTime = dayjs(datetimeStr).format(formatString)

  return readableTime
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}
  

export {kelvinToCelsius, convertUnixTimestampToReadableTime, getCompassDirection, groupWeatherDataByDate, convertToReadableTime, formatDate}