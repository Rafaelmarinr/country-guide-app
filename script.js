const searchBtn = document.querySelector('#search-btn');
const countryInp = document.querySelector('#country-inp');
const result =  document.querySelector('#result');
const errorSpan = document.querySelector('#error-wrapper');
searchBtn.addEventListener('click',() => {
    const countryName = countryInp.value;
    const finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalURL)
    .then(data=> data.json())
    .then((data) =>{
        errorSpan.style.display="none"
        result.innerHTML = `
        <div class="container-wrapper">
            <img class="flags" src=${data[0].flags.svg}>
            <h2>${countryName}</h2>
            <div class="content-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital}</span>
            </div>
            <div class="content-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents}</span>
            </div>
            <div class="content-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
            <div class="content-wrapper">
                <h4>Corrency:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
            <div class="content-wrapper">
                <h4>Common Languages:</h4>
                <span>${data[0].languages[Object.keys(data[0].languages)]}</span>
            </div>
        </div>
        `
    }).catch(()=>{
        errorSpan.style.display="block"
    })
});