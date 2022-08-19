const contPlanes = document.querySelector('#contPlanes');
const simple = document.querySelector('.simple');
const searching = document.querySelector('.searching');
const easy = document.querySelector('.easy');


simple.addEventListener('click', () => {
    searching.removeAttribute('id');
    easy.removeAttribute('id');
    simple.setAttribute('id', 'menActive');

    contPlanes.innerHTML = `
    <div class="col-md-6 sm-12 menBarra">
     <img class="img-fluid menImg" src="./img/illustration-hero.svg" alt="">
    </div>
    <div class="bookmark col-md-6 sm-12">
        <h3>Bookmark in one click</h3>
        <p class="opacity-50">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you
         complete control over how you manage your favorite sites.</p>
        <button class="more">More Info</button>
    </div>
    `
})


searching.addEventListener('click', () => {
    simple.removeAttribute('id');
    easy.removeAttribute('id');
    searching.setAttribute('id', 'menActive')

    contPlanes.innerHTML = `
    <div class="col-md-6 sm-12 menBarra">
            <img class="img-fluid menImg" src="./img/illustration-features-tab-2.svg" alt="">
        </div>
        <div class="bookmark col-md-6 sm-12">
            <h3>Intelligent search</h3>
            <p class="opacity-50">Our power ful search feature will help you find 
            save sites in no time al all. No need to trawl through all of your bookmarks.</p>
            <button class="more">More Info</button>
        </div>
    `
})

easy.addEventListener('click', () => {
    searching.removeAttribute('id');
    simple.removeAttribute('id');
    easy.setAttribute('id', 'menActive');

    contPlanes.innerHTML = `
    <div class="col-md-6 sm-12 menBarra">
            <img class="img-fluid menImg" src="./img/illustration-features-tab-3.svg" alt="">
        </div>
        <div class="bookmark col-md-6 sm-12">
            <h3>Share your bookmarks</h3>
            <p class="opacity-50">Easily share your bookmarks and collections with others.
             Create a shareable link that you can send at the click of a button.</button>
        </div>
    `
})