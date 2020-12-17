// Declare Variables
const tableData = data;
var form = d3.select("#date-filter");
var button = d3.select("#filter-btn");

//Declar Functions

// Filtered Data
filterItemDisplay=()=> {
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");
    let filteredData = data.filter(data => data.datetime === inputValue);
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

// Display Filtered data
form.on("submit",filterItemDisplay);
button.on("click", filterItemDisplay);



