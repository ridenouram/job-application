// Variables
const name = document.getElementById('name');
const whichTrotsky = document.getElementById('which-trotsky');
const communists = document.getElementById('communists');
const grit = document.getElementById('grit');
const referral = document.getElementById('referral');

//Get application from local storage
const json = window.localStorage.getItem('application');
const hydratedApplication = JSON.parse(json);

//Change text content 
name.textContent = hydratedApplication.name;
whichTrotsky.textContent = hydratedApplication.whichTrotsky;
grit.textContent = hydratedApplication.grit;
referral.textContent = hydratedApplication.referral;
communists.textContent = hydratedApplication.communists.join(', ');
