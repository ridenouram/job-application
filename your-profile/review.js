// Variables
const json = window.localStorage.getItem('allProfiles');

let allProfiles = [];

let profile = [];
if(json) {
    allProfiles = JSON.parse(json);
} else {
    window.location = '/';
}


const searchParam = new URLSearchParams(window.location.search);
const nameToFind = searchParam.get('name');

for(let i = 0; i < allProfiles.length; i++) {
    const currentApplicant = allProfiles[i];
    if (currentApplicant.name === nameToFind) {
        profile = currentApplicant;
        break;
    }
}


const name = document.getElementById('name');
const whichTrotsky = document.getElementById('which-trotsky');
const communists = document.getElementById('communists');
const grit = document.getElementById('grit');
const referral = document.getElementById('referral');

//Change text content 
name.textContent = profile.name;
whichTrotsky.textContent = profile.whichTrotsky;
grit.textContent = profile.grit;
referral.textContent = profile.referral;
communists.textContent = profile.communists.join(', ');
