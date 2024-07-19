//open weather Api
//we stor api in in variable
const apikey = "e5df4d8470ed9d2e8f7b5d8d5c173e41";



// use it in our application
const weatherDataEle = document.getElementById("weather-data");

//get input form data and store
//if input is london we gonan request for london
const cityInputEle = document.getElementById("city-input");


//NOTE:
//every time we sumbit the form so we need to trigger function
//which they get the data from the Api


//form doesnit have any id or class so we used querySelector
const formEle = document.querySelector("form");


//add event listner on form to triger function
// hum nay submit per prevent lagaya hay kay page refresh na ho
//or go event argument pass kiya hay wo by default go event laga hua hay 
//us ko prevent kernay kay liye
formEle.addEventListener("submit", (event) => {
    event.preventDefault();
    
    //
    const cityInputEleValue = cityInputEle.value;
    console.log(cityInputEleValue);


    //pass argument in the function
    getWeatherData(cityInputEleValue);

});


//this functon will fetch the data from the api
async function getWeatherData(cityInputEleValue){

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputEleValue}&appid=${apikey}&units=metric`);

        // check response is ok or not
        if (!response.ok){
            throw new Error(" NETWORK RESPONSE WAS NOT OK");
        }



        // convert api data into useable json format
        const data =  await response.json();



        console.log(data);



        // lets retrive data from the json object 

        //main is key name > temp is another key name inside main you can see these things inside console
        const temperature = Math.round(data.main.temp);


        //we used index because weather is array that why we used index num
        const description = data.weather[0].description;
        
        const icon = data.weather[0].icon

        const details = [
            
            `Feels Like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}`,
            `Wind Speed: ${data.wind.speed}` 
        
        ]


        // let change the data on the front end and replace it with our fetch data
        const  iconimage = document.querySelector(".icon");

        iconimage.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">`;

        const changetemp = document.querySelector(".temperature");
        changetemp.textContent =  `${temperature} °C `;


        const chanedescp = document.querySelector(".description");
        chanedescp.textContent = `${description}`;

        // its time to change feels like humidity and wind speed
        const changefee = document.querySelectorAll("details");


    }
    catch(error){
        
    }
};


