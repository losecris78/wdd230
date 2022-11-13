const requestURL = 'json/data.json';
const cards = document.querySelector('.partners');

async function getInfo(){
  let response = await fetch(requestURL);
  if (response.ok) {
      let members= await response.json();
      displayCompanies(members)
  } else {
      throw Error(response.statusText);
  }
}
 
  function displayCompanies(members) {
    members.members.forEach(member => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let portrait = document.createElement('img');

      h2.innerHTML = `${member.name}`;
      p.innerHTML=`Address: ${member.address}<br>
      ${member.url} <br> Phone: ${member.phone} <br>Membership type: ${member.color}<br>Business area: ${member.type}`;
      portrait.setAttribute('src', member.image);
      portrait.setAttribute('alt',member.name);
      portrait.setAttribute('loading', 'lazy');
      card.appendChild(h2);
      card.appendChild(portrait);
      card.appendChild(p);
      cards.appendChild(card);

      });
  };
getInfo();
const gridbutton = document.querySelector("#complete");
const listbutton = document.querySelector("#simple");
const display = document.querySelector("section");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("partners");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("partners");
}

 