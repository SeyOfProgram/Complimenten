//fetch de complimenten uit de JSON file
async function fetchCompliments() {
    try {

        const response = await fetch('./data/complimenten.json');
        if (!response.ok) throw new error('Het JSON bestand is niet gevonden');
            const data = await response.json();
            console.log('response', response, 'data', data);
            return data.complimenten;
        

    } catch(error) {
        console.error('Eyyy fout bij laden van complimenten', error);
        return ['hou u bek' ,'kes lan' ];


    } finally {
        console.log('fetchCompliments is afgerond')

    }
    
};

//display een random comment
function DisplayRandomCompliment(compliments)  {
    console.log('na kijken of dat ik complimenten krijg', compliments)
    // haal het element uit HTML op
    const complimentElements = document.getElementById('compliment');
    //kies random vompliment
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    //wet je random compliment in je HTML element
    complimentElements.textContent = randomCompliment;
    
}



// main function IIFE
(async () => {
    const compliments = await fetchCompliments();
    const button = document.getElementById('generate-btn');
    button.addEventListener('click', () => DisplayRandomCompliment
        (compliments));
})();