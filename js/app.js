
document.getElementById('search-btn').addEventListener('click', function () {
    loadWeatherData();
})

const loadWeatherData = () => {
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;
    const API_KEY = `37df53a877aaf9e887db5018b90ed335`;
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}`;
    fetch(API)
        .then(res => res.json())
        .then(data => displayTemp(data))

}

const displayTemp = (tempData) => {

    const tempSec = document.getElementById('temp-sec');
    tempSec.innerHTML = `
            <div class="card mx-auto" style="width: 18rem;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                    <p>Aug 29, 06:45pm</p>
                    <h3 class="card-title">${tempData.name}, ${tempData.sys.country}</h3>
                    <p class="card-text">Feels like 18°C. Overcast clouds. Light breeze</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${tempData.base}</li>
                    <li class="list-group-item">${tempData.main.temp / 10}19°C</li>
                    <li class="list-group-item">Humidity: ${tempData.main.humidity}%</li>

                </ul>
            </div>
    `;
}