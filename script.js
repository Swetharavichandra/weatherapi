let button=document.querySelector("#submitbtn");
let input = document.querySelector('#inputbox');
let cityname=document.querySelector("#cityname");
let temperature=document.querySelector("#temperature");
let description=document.querySelector("#description");

button.addEventListener('click', function(){
fetch("https://api.openweathermap.org/data/2.5/weather?q="+input.value+"&appid=bcbc801c4bcb6bc5beb50e72d3505673")
.then(response => response.json())
.then(data =>{
    
    //fetches the data from the object
    var namevalue=data["name"];
    var tempvalue=data["main"] ["temp"];
    var descvalue=data["weather"][0]["description"];

    cityname.innerText=namevalue;
    temperature.innerText=tempvalue;
    description.innerText=descvalue;
    //  console.log(data)
})
.catch(err=>alert("Wrong city name"))


})

