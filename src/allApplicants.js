const json = window.localStorage.getItem('applicants');

//new instance of applicants not from index.js
let applicants = null;
if(json) {
    applicants = JSON.parse(json);
} else {
    applicants = [];
}

const tbody = document.getElementById('applicants');

for(let i = 0; i < applicants.length; i++) {
    const singleApplicant = applicants[i];
    
    const tr = document.createElement('tr');

    //repeat bottom 3 lines of code for each input type
    const nameCell = document.createElement('td');
    nameCell.textContent = singleApplicant.name;
    tr.appendChild(nameCell);

    const cityCell = document.createElement('td');
    cityCell.textContent = singleApplicant.city;
    tr.appendChild(cityCell);


    //appendChild stays at bottom of code block
    tbody.appendChild(tr);
}




const json = window.localStorage.getItem('applicants');

let applicants = null;

if(json) {
    applicants = JSON.parse(json);
} else {
    applicants = [];
}

const tbody = document.getElementById('applicants');

for(let i = 0; i < applicants.length; i++) {
    const singleApplicant = applicants[i];

    const tr = document.createElement('tr');

    
}














// for(let i = 0; i < applicants.length; i++) {
//     const singleApplicant = applicants[i];

//     const tr = document.createElement('tr');

//     const nameCell = document.createElement('td');
//     nameCell.textContent = singleApplicant.name;
//     tr.appendChild(nameCell);

//     tbody.appendChild(tr);

// }