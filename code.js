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
formEle.addEventListener("submit", (event) => {
    event.preventDefault();
    
    //
    const cityInputEleValue = cityInputEle.value;
    console.log(cityInputEleValue);

    


});


//this functon will fetch the data from the api
function getWeatherData(){
    try{

    }
    catch (error){
        
    }
}





