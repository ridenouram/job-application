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

    const weaponAll = form.elements.weapon; //remember this!!!!
    let weaponPref = [];

    for(let i = 0; i < weaponAll.length; i++) {
        const weaponSelect = weaponAll[i];
        if(weaponSelect.checked) {
            weaponPref[i] = weaponSelect.value;
        }
        
        const applicant = {
            name: name,
            city: city,
            state: state,
            prank: prank,
            weapon: weaponPref,
            slider: badScale.textContent
        };
        console.log(applicant);
    }
});
