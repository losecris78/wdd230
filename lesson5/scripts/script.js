const chapter = document.querySelector('input')
const add= document.querySelector('button');
const fav= document.querySelector('list');
const favChapter = document.createElement('li');
const favText = document.createElement('span');
const favBtn = document.createElement('button');
function addChapter(){ favChapter.appendChild(favText);
    favText.textContent = chapter;
    fav.appendChild(favChapter);
    
}
add.onclick = addChapter(chapter);