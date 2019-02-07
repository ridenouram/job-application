// Variables
const json = window.localStorage.getItem('allProfiles');

let profile = null;
if(json) {
    const allProfiles = JSON.parse(json);
    profile = allProfiles[allProfiles.length - 1];
} else {
    window.location = '/';
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
