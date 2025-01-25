const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

const temperature = 25;
const windspeed = 5;

function calculateWindChill(tempC, windSpeedKmh) {
    if (windSpeedKmh > 4.8) {
        return (
            13.12 + 0.6215 * tempC -11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * tempC * Math.pow(windSpeedKmh, 0.16)
        ).toFixed(2);
    } else {
        return "N/A";
    }
}

const windChillValue = calculateWindChill(temperature, windspeed);

document.addEventListener("DOMContentLoaded", () => {
    const windload = document.getElementById("Windchill");
    if (windload) {
        windload.innerHTML = `<b>Windchill:</b> ${windChillValue}°C`;
    }
});
