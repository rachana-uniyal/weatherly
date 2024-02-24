function kelvinToCelsius(kelvinTemp) {
    return Math.round(kelvinTemp - 273.15)
}

function convertUnixTimestampToReadableTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);

    // Extract hours and minutes
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    // Format the time in HH:MM format, converting to 12-hour format with AM/PM
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' + minutes : minutes} ${hours < 12 ? 'AM' : 'PM'}`;

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
    // Parse the datetime string into a Date object
    const date = new Date(datetimeStr);

    const istOffset = 5.5 * 60; 
    const localOffset = date.getTimezoneOffset(); 
    const totalOffset = istOffset - localOffset; 
    const istDate = new Date(date.getTime() + totalOffset * 60000); 

    const options = { hour: 'numeric', hour12: true };
    const readableTime = istDate.toLocaleTimeString('en-US', options);
    console.log("jjjj", readableTime)
    return readableTime;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}
  

export {kelvinToCelsius, convertUnixTimestampToReadableTime, getCompassDirection, groupWeatherDataByDate, convertToReadableTime, formatDate}