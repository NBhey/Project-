import getWeatherCityData from "./getWeatherCityData"
let img = document.querySelector('img');
export default async function changeCity(value){
    const dataCIty = await getWeatherCityData(value);
    document.querySelector('.city').textContent = dataCIty.name;
    document.querySelector('.temperature').textContent = dataCIty.main.temp;
    img = `http://openweathermap.org/img/wn/${dataCIty.weather[0].icon}@2x.png`
}