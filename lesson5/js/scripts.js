/*
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const favChapter = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  favChapter.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  list.appendChild(favChapter);
  
  listBtn.addEventListener('click', () => {
    list.removeChild(favChapter);
  });
  
  input.focus();
});*/
const fav = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const chapters = input.value;
  input.value = '';
  
  const favChapter = document.createElement('li');
  const favText = document.createElement('span');
  const favBtn = document.createElement('button');
  
  favChapter.appendChild(favText);
  favText.textContent = chapters;
  favChapter.appendChild(favBtn);
  //listBtn.textContent = 'Delete';
  favBtn.setAttribute('src','images/favicon-32x32.png');
   fav.appendChild(favChapter);

        favBtn.addEventListener('click', () => {
          fav.removeChild(favChapter);
        });

        input.focus();
      });