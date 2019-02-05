const form = document.getElementById('form');
const gritty = document.getElementById('gritty');
const grittiness = document.getElementById('grittiness');

gritty.addEventListener('change', function(event) {
    grittiness.textContent = gritty.value;
});


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = form.elements.first.value;
    const lastName = form.elements.last.value;
    const whichTrotsky = form.elements.trotsky.value;
    const referral = form.elements.referral.value;
    
    const communists = form.elements.communists;
    const communistFavs = [];

    for(let i = 0; i < communists.length; i++) {
        const communistSelection = communists[i];
        if(communistSelection.checked) {
            communistFavs.push(communistSelection.value);
        }
    }

    const application = {
        name: [lastName, firstName],
        whichTrotsky: whichTrotsky,
        communists: communistFavs,
        grit: gritty.value,
        referral: referral
    };

    console.log(application);

    const serialize = JSON.stringify(application);
    window.localStorage.setItem('application', serialize);

    window.location = "thanks.html";
});
    


