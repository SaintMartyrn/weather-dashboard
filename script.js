var cityList = [];
var cityname;

initCityList();
initWeather();


function renderCities(){
    $("#cityList").empty();
    $("#cityInput").val();

    for (i=0; i<cityList.length; i++){
        var a = $("<a>");
        a.addClass("list-group-item list-group-item-action list-group-item-primary city");
        a.attr("data-name", cityList[i]);

        if (storedCities !== null){
            cityList = storedCities;
        }

        renderCities();
    }

function intiWeather() {
    var storedWeather =JSON.parse(LocalStorage.getItem("currentCity"));

    if(storedWeather !== null) {
        cityname = storedWeather;

        displayWeather();
        displayFiveDayForecast();
    }
}

function storedCityArray() {
    localStorage.setItem("cities", JSON.stringify(cityList));
}

function storedCurrentCity() {

    localStorage.setItem("currentCity", JSON.stringiffy(cityname));
}

}