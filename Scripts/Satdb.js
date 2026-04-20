let satellites = [];

// fetch data
fetch("Assets/db/Satdb.json") // the file path to the database 
.then(res => res.json())
.then(sat_data => {
    satellites = sat_data;
    console.log(satellites); // logs all the data from the database into the console 
    displayData(satellites);
})
.catch(err => console.error(err)); // logs errors in the console


// this function displays the data into the table
function displayData(data) {
    let placeholder = document.querySelector("#data-output");
    let out = "";

    for (let sat of data) {
        out += ` 
        <tr>
            <td>${sat.Entry_ID}</td>
            <td>${sat.NORAD_ID}</td>
            <td>${sat.COSPAR_ID}</td>

            <td>${sat.Satellite_Name}</td>
            <td>${sat.Satellite_alternative_Name}</td>
            <td> <img class="table_img" src="${sat.Satellite_Image_URL}"> </td>
            <td>${sat.Satellite_Type}</td>
            <td>${sat.Satellite_Orbit_Type}</td>
            <td class="${sat.Satellite_Orbit_Status}">${sat.Satellite_Orbit_Status}</td>
            <td>${sat.Satellite_Manufacturer}</td>
            <td>${sat.Satellite_Operator}</td>

            <td>${sat.Satellite_Launch_Date}</td>
            <td>${sat.Satellite_Launch_Vehicle_Name}</td>
            <td> <img class="table_img" src="${sat.Satellite_Launch_Image_URL}"> </td>

            <td class="${sat.Satellite_Mission_Status}">${sat.Satellite_Mission_Status}</td>
            <td class="${sat.Satellite_Functionality_Status}">${sat.Satellite_Functionality_Status}</td>

            <td>${sat.Satellite_Notes}</td>
            <td class="${sat.Satellite_Tracked}">${sat.Satellite_Tracked}</td>
            <td>${sat.Satellite_First_Observation_Date}</td>
        </tr>
        `; // this html for those who are wondering
    }

    placeholder.innerHTML = out;
}

// this is the search rules and stuff
document.querySelector("#search-input").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();

    let filtered = satellites.filter(sat => {
    let combined = `
        ${sat.Entry_ID}
        ${sat.NORAD_ID}
        ${sat.COSPAR_ID}

        ${sat.Satellite_Name}
        ${sat.Satellite_alternative_Name}
        ${sat.Satellite_Type}
        ${sat.Satellite_Orbit_Type}
        ${sat.Satellite_Orbit_Status}
        ${sat.Satellite_Manufacturer}
        ${sat.Satellite_Operator}

        ${sat.Satellite_Launch_Date}
        ${sat.Satellite_Launch_Vehicle_Name}

        ${sat.Satellite_Mission_Status}
        ${sat.Satellite_Functionality_Status}

        ${sat.Satellite_Tracked}
        ${sat.Satellite_First_Observation_Date}
    `.toLowerCase();

    return combined.includes(searchValue);
});

   displayData(filtered);
});
