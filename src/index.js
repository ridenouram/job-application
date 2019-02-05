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

    const weapon = form.elements.weapon;
    const weaponPref = [];
    for(let i = 0; i < weapon.length; i++) {
        const weaponSelect = weapon[i];
        if(weaponSelect.checked) {
            weaponPref[i] = weaponSelect.value;
        }
        
    }  
    const applicant = {
        name: name,
        city: city,
        state: state,
        pranks: prank,
        weapon: weaponPref
    };

    console.log(applicant);
})

