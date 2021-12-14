/* Api configuration */ 
const apiConfig = {
    countryUrl : " https://api.countrystatecity.in/v1/countries",
    countryKey : " ",
    WeatherUrl : "https://api.openweathermap.org/data/2.5/",
    weatherKey : "aa545e53cce6c7640429fe26b05cb90b",
}               

// selcting countries from drop down 

const getCountries = async() => {
    let apiEndPoint = apiConfig.countryUrl;
    const response = await fetch(apiEndPoint, {headers:{"x-CSCAPI-KEY" : apiConfig.countryKey},
});
    if(response.status!=200){
        throw new Error(`Something went wrong ,status code: ${response.status}`);
    }
    const countries =await response.json();
    return countries;
};

document.addEventListener("DOMContentLoaded", async() => {
    const countries=await getCountries();
})



/* search inputs on key press*/
const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress' , (event) => {
    
    console.log(searchInputBox.value);
})