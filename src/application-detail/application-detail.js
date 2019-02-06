const first = document.getElementById('first');
const last = document.getElementById('last');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const street = document.getElementById('street');
const city = document.getElementById('city');
const country = document.getElementById('country');
const kills = document.getElementById('kills');
const obedience = document.getElementById('obedience');
const skill = document.getElementById('skill');

const json = window.localStorage.getItem('appSubmission');
const hydratedApp = JSON.parse(json); 

first.textContent = hydratedApp.firstName;
last.textContent = hydratedApp.lastName;
phone.textContent = hydratedApp.phone;
email.textContent = hydratedApp.email; 
street.textContent = hydratedApp.street;
city.textContent = hydratedApp.city;
country.textContent = hydratedApp.country;
kills.textContent = hydratedApp.kills;
obedience.textContent = hydratedApp.obedience;
skill.textContent = hydratedApp.skill.join(', ');

