fetch("Assets/db/Satdb.json")
.then(res => res.json())
.then(sat_data => {
    let placeholder = document.querySelector("#data-output");
    let out = "";

    for (let display_data of sat_data) {
        out += `
            <tr>
                <td>${display_data.Entry_ID}</td>
                <td>${display_data.NORAD_ID}</td>
                <td>${display_data.COSPAR_ID}</td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;
})
.catch(err => console.error(err));



