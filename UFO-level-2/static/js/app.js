// Declare Variables
const tableData = data;
var form = d3.select("#date-filter");
var button = d3.select("#filter-btn");

//Declar Functions

// Filtered Data
filterItemDisplay=()=> {
    let searchParam = [];
    //Grab Data
    let inputDateElement = d3.select("#datetime");
    let inputDateValue = inputDateElement.property("value");

    let inputCountryElement = d3.select("#country");
    let inputCountryValue = inputCountryElement.property("value");

    let inputStateElement = d3.select("#state");
    let inputStateValue = inputStateElement.property("value");

    let inputCityElement = d3.select("#city");
    let inputCityValue = inputCityElement.property("value");

    let inputShapeElement = d3.select("#shape");
    let inputShapeValue = inputShapeElement.property("value");

    var filteredData = data;
    // Filter Data
    if (inputDateValue != "") {
        var filteredData = filteredData.filter(filteredData => filteredData.datetime === inputDateValue.toLowerCase());
        searchParam.push(`Date: ${inputDateValue}`);
    }

    if (inputCountryValue != "") {
        var filteredData = filteredData.filter(filteredData => filteredData.country === inputCountryValue.toLowerCase());
        searchParam.push(`Country: ${inputCountryValue}`);
    }

    if (inputStateValue != "") {
        var filteredData = filteredData.filter(filteredData => filteredData.state === inputStateValue.toLowerCase());
        searchParam.push(`State: ${inputStateValue}`);
    }

    if (inputCityValue != "") {
        var filteredData = filteredData.filter(filteredData => filteredData.city === inputCityValue.toLowerCase());
        searchParam.push(`City: ${inputCityValue}`);
    }

    if (inputShapeValue != "") {
        var filteredData = filteredData.filter(filteredData => filteredData.shape === inputShapeValue.toLowerCase());
        searchParam.push(`Shape: ${inputShapeValue}`);
    }
    // If obj is empty, then alert user.
    if (Object.keys(filteredData).length === 0) {
        var searchParamString ="";
            for (let i=0; i<searchParam.length; i++) {
                    searchParamString += `\r\n${searchParam[i]}`;
            }
        d3.select("#shape").text("");
        alert(`No results came up for the following search paramaters: ${searchParamString} \r\nPlease try again.`);
        var filteredData = data;
        document.getElementById('datetime').value = '';
        document.getElementById('country').value = '';
        document.getElementById('state').value = '';
        document.getElementById('city').value = '';
        document.getElementById('shape').value = '';
    }   
    DisplayData(filteredData);
};

// Display Data
DisplayData=(selectedData)=> {
    let SightingsTable = d3.select("tbody");
    SightingsTable.html("");
    selectedData.forEach(sighting => {
        let item = SightingsTable.append("tr");
        item.append("td").text(`${sighting.datetime}`);
        item.append("td").text(`${sighting.city}`);
        item.append("td").text(`${sighting.state}`);
        item.append("td").text(`${sighting.country}`);
        item.append("td").text(`${sighting.shape}`);
        item.append("td").text(`${sighting.durationMinutes}`);
        item.append("td").text(`${sighting.comments}`);
      });
}

// Display All Data
DisplayData(data);

// Display Filtered data upon event
form.on("submit",filterItemDisplay);
button.on("click", filterItemDisplay);