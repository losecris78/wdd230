const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
async function getProphets(){
    let response = await fetch(requestURL);
    if (response.ok) {
        let prophets= await response.json();
        console.log(prophets);
        buildProphetCards(prophets)
    } else {
        throw Error(response.statusText);
    }
}
    function buildProphetCards(prophets){
        prophets.prophets.forEach(prophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let image = document.createElement('img');
            
            h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
            p.innerHTML = `Location: ${prophet.birthplace} Birth: ${prophet.birthdate} - Death: ${prophet.death}`;
            image.setAttribute('src', prophet.imageurl);
            image.setAttribute('alt',`Picture of President ${prophet.name} ${prophet.lastname} Order: ${prophet.order}`);
            image.setAttribute('loading', 'lazy');

            card.append(h2);
            card.append(p);
            card.append(image);
            
            cards.append(card);
        });
    };

getProphets();
/*

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

const displayProphets(prophets){
    
        // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
      
        // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = prophet.name + ' ' + prophet.lastname;
      
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    ____.setAttribute('src', prophet.imageurl);
    ____.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
    ____.setAttribute('loading', 'lazy');
      
        // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
      
        // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
    };
  .then(function (jsonObject) {
    console.table(jsonObject);
    prophets.forEach(displayProphets);  // temporary checking for valid response and data parsing
  });
  const prophets = jsonObject['prophets'];
  const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];

    prophets.forEach(displayProphets);

  });
/*
function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let parrafofirst = document.createElement('p');
  let parrafosecond = document.createElement('p');
  let parrafothird = document.createElement('p');
  let portrait = document.createElement('img');
  let tipoorden;
  // Change the textContent property of the h2 element to contain the prophet's full name
  if (prophet.order == 1) {
    tipoorden = "st"
  } else if (prophet.order == 2) {
    tipoorden = "nd"
  } else if (prophet.order == 3) {
    tipoorden = "rd"
  } else {
    tipoorden = "th"
  }
  if (prophet.death == null){
    death = " ";
  }else{
    death = `Death:  ${prophet.death}`;
  }

  h2.textContent = `${prophet.name} ${prophet.lastname} - ${prophet.order}${tipoorden} Latter-day President`;
  parrafofirst.textContent = `Birth:  ${prophet.birthplace} ${prophet.birthdate}`;
  parrafosecond.textContent = death;
  parrafothird.textContent = ``;
  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(parrafofirst);
  card.appendChild(parrafosecond);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}*/