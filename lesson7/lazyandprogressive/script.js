/*document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to event handlers here
    }
  });*/
  /*const waitingImages = document.querySelectorAll(".lazy");
  const imgOptions = {
    root:document.querySelector('#scrollArea'),
    threshold:0.2, 
    rootMargin:"0% 0% 30% 0%"
  };
  function preloadImage (img){
    const src= img.getAttribute("data-src");
    if (!src){
      return;
    } img.src = src;
  }
  let observer = new IntersectionObserver((entries, imgObserver) => {
    if (!entry.isIntersecting)
    return;
    else {preloadImg(entry.target);
      imgObserver.unobserve(entry.target);} ,imgOptions);

  const loadImages = (image) => {
    image.setAttributes ('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
  }
  if ('IntersectionObserver' in window){
    const imgObserver = newIntersectionObserver((items,observer) =>{
      items.forEach((item) =>{

      });
    },imgOptions);
    imagesToLoad.forEach((img)=>{
      imgObserver.observe(img);
    });
  
}*/
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
/*
imagesToLoad.forEach((img) => {
  loadImages(img);
});*/
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
