const submit = document.getElementById('form');
const obedienceLevel = document.getElementById('obedience-level');
const selectedObedience = document.getElementById('selected-obedience');

obedienceLevel.addEventListener('change', function() { 
    selectedObedience.textContent = obedienceLevel.value;
});

submit.addEventListener('submit', function() {
    event.preventDefault();
 
    const name = submit.elements.name.value;
    const phonenumber = submit.elements.name.value;
    const email = submit.elements.email.value;
    const street = submit.elements.street.value;
    const city = submit.elements.city.value;
    const country = submit.elements.country.value;
    const key = submit.elements.key.value;

    // const thankYou = document.getElementById('thank-you');
 
    const skill = submit.elements.fightings;
    const skillPreference = [];
 
    for(let i = 0; i < skill.length; i++){
        const fightingChoices = skill[i];
        if(fightingChoices.checked) {
            skillPreference[i] = fightingChoices.value;
        }
    }

    const appSubmission = {
        name: name,
        phonenumber: phonenumber,
        email: email,
        street: street,
        city: city,
        country: country,
        key: key,
        skill: skillPreference,
        obedience: obedienceLevel.value
    };
 
    console.log(appSubmission);

    // const wakanda = JSON.stringify(applicant);
    // window.location = setItem('appticant', wakanda)
    // window.location = 'thanks.html';
});

