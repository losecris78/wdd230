const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets(){
  let response = await fetch(requestURL);
  if (response.ok) {
      let prophets= await response.json();
      //console.log(prophets);
      displayProphets(prophets)
  } else {
      throw Error(response.statusText);
  }
}
 
  function displayProphets(prophets) {
    prophets.prophets.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let portrait = document.createElement('img');

      h2.innerHTML = `#${prophet.order} ${prophet.name} ${prophet.lastname}`;
      p.innerHTML=`Birthplace: ${prophet.birthplace}<br>
      Birth: ${prophet.birthdate} <br> Death: ${prophet.death} <br>Served as prophet: ${prophet.length} years`;
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt',`${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      card.appendChild(h2);
      card.appendChild(portrait);
      card.appendChild(p);
      cards.appendChild(card);

      });
  };
getProphets();
 