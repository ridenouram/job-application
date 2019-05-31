const form = document.getElementById('form');

const slider = document.getElementById('badness');
const badScale = document.getElementById('badScale');

slider.addEventListener('change', function(){
    badScale.textContent = slider.value;
});

form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = form.elements.name.value;
    const city = form.elements.city.value;
    const state = form.elements.state.value;
    const prank = form.elements.prank.value;

    const weaponAll = form.elements.weapon;
    let weaponSelect = [];

    for(let i = 0; i < weaponAll.length; i++) {
        const weaponPref = weaponAll[i];
        if(weaponPref.checked) {
            weaponSelect[i] = weaponPref.value;
            // weaponPref.push(weaponAll.value)
        }
    }

    const applicant = {
        name: name,
        city: city,
        state: state,
        prank: prank,
        weapon: weaponSelect,
        slider: slider.value
    };


    // console.log(applicant);
    //39-43 involved js checking if theres already applicant data in localStorage to input into applicants arary
    let applicants = [];
    const jsonString = window.localStorage.getItem('applicants');
    if(jsonString) {
        applicants = JSON.parse(jsonString);
    }
    
    
    // lines below when new users added it will be pushed into applicants array
    applicants.push(applicant);
    const serialize = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', serialize);

    window.location = 'hello.html';
});


    //code cooking below
    //here we first make an emptry array and define in the if statement that if jsonString exists
    //which is pulling applicants from the local storage, parse this information found on localStorage

//add new applicant info into preexisting applicansts array
//stringify/ serialize applicants
//set item for applicants and serialize remember key/value pair
