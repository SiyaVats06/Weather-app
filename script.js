
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '479d7fce2dmshdf9ee20280e9755p128f04jsne9dcf4a25beb',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getcity=(city)=>{
    document.getElementById("cityname").innerHTML=city
fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)

    .then(response => response.json())
    .then(response => {
        console.log(response)
        document.getElementById("cloud_pct").innerHTML = response.cloud_pct
        document.getElementById("feels_like").innerHTML = response.feels_like
        document.getElementById("humidity").innerHTML = response.humidity
        document.getElementById("max_temp").innerHTML = response.max_temp
        document.getElementById("min_temp").innerHTML = response.min_temp
        document.getElementById("sunrise").innerHTML = response.sunrise
        document.getElementById("sunset").innerHTML = response.sunset
        document.getElementById("temp").innerHTML = response.temp
        document.getElementById("wind_degrees").innerHTML = response.wind_degrees
        document.getElementById("wind_speed").innerHTML = response.wind_speed
    }
    )
    .catch(err => console.error(err));
}

document.getElementById("submit").addEventListener("click",(e)=>{
  
        const City=document.getElementById("city").value;
        e.preventDefault();
        getcity(City)
        console.log("cityname is",City);
    

})
getcity("Delhi")
const allname=document.getElementsByClassName("othercitybtn")
Array.from(allname).forEach(element => {
    element.addEventListener("click",(e)=>{
       getcity(e.target.value)
    })
});


