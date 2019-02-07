const json = window.localStorage.getItem('allProfiles');

let allProfiles = [];
if(json) {
    allProfiles = JSON.parse(json);
}

const tbody = document.getElementById('all-profiles');

for (let i = 0; i < allProfiles.length; i++) {
    const profile = allProfiles[i];
    
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    const a = document.createElement('a');
    a.href = '/your-profile/review.html?name=' + encodeURIComponent(profile.name);  //****** */
    a.textContent = profile.name;
    nameCell.appendChild(a);
    tr.appendChild(nameCell);


    const communistsCell = document.createElement('td');
    communistsCell.textContent = profile.communists;
    tr.appendChild(communistsCell);

    const whichTrotskyCell = document.createElement('td');
    whichTrotskyCell.textContent = profile.whichTrotsky;
    tr.appendChild(whichTrotskyCell);
    
    const gritCell = document.createElement('td');
    gritCell.textContent = profile.grit;
    tr.appendChild(gritCell);

    const referralCell = document.createElement('td');
    referralCell.textContent = profile.referral;
    tr.appendChild(referralCell);

    tbody.appendChild(tr);
}