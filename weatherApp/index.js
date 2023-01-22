const inputbox = document.getElementById("input")
const h3=document.getElementById("h3")
const h4=document.getElementById("h4")
const h5=document.getElementById("h5")
const span=document.getElementById("spn")

async function hello() {
    const location = inputbox.value

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric
     `)
    // console.log(res);

    const data = await res.json()
    // console.log(data);
    span.innerText=`${location}`
    h3.innerText=`Sky conditions : ${data.weather[0].description}`
    h4.innerText=`Temprature : ${data.main.temp}`
    h5.innerText=`Wind speed : ${data.wind.speed}`

}