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
  
    weatherDataArray.forEach(item => {
      // Extract the date part from the dt_txt property
      const date = item.dt_txt.split(' ')[0];

      if (!groupedByDate[date]) {
        groupedByDate[date] = [];
      }
  
      groupedByDate[date].push(item);
    });
  
    return groupedByDate;
  }

export {kelvinToCelsius, convertUnixTimestampToReadableTime, getCompassDirection, groupWeatherDataByDate}