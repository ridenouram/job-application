const submit = document.getElementById('form');
const ObedienceRange = document.getElementById('obedienceness');
const averageObedience = document.getElementById('average-obedience');

ObedienceRange.addEventListener('change', function() { 
    averageObedience.textContent = ObedienceRange.value;
});

submit.addEventListener('submit', function() {
    event.preventDefault();
 
    const name = submit.elements.name.value;
    const phonenumber = submit.elements.name.value;
    const Email = submit.elements.Email.value;
    const street = submit.elements.street.value;
    const city = submit.elements.city.value;
    const country = submit.elements.country.value;
    const key = submit.elements.key.value;
 
    const skill = submit.elements.fightings;
    const skillPreference = [];
 
    for(let i = 0; i < skill.length; i++){
        const fightingChoices = skill[i];``
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
        obedience: obedienceyRange.value
    };
 
    console.log(appSubmission);
});




        // form incomplete checker
        // read input
        // evaluate pineapple conformity
            // take care of them
            // in the street fraternity