/* jshint esversion:6*/
const person4Name = document.getElementById('person4Name');
const person4Homeworld = document.getElementById('person4HomeWorld');
const person14Name = document.getElementById('person14Name');
const person14Species = document.getElementById('person14Species');
const filmList = document.getElementById('filmList');



fetch('http://swapi.co/api/people/4/').then((response) => {
  return response.json();
}).then((response) => {
  person4Name.innerHTML = response.name;
  return response.homeworld;
}).then((response) => {
  return fetch (response);
}).then((response) => {
  return response.json();
}).then((response) => {
  person4Homeworld.innerHTML = response.name;
});

fetch('http://swapi.co/api/people/14/').then((response) => {
  return response.json();
}).then((response) => {
  console.log(response);
  person14Name.innerHTML = response.name;
  return fetch(response.species);
}).then((response) => {
  return response.json();
}).then((response) => {
  person14Species.innerHTML = response.name;
});






/*var oReq = new XMLHttpRequest();
function getName4 () {
  name4 = JSON.parse(this.responseText);
  person4Name.innerHTML = name4.name;
}
oReq.addEventListener('load', getName4);
oReq.open('GET', 'http://swapi.co/api/people/4/', true);
oReq.send();

var oReq = new XMLHttpRequest();
function getHomeworld4 () {
  homeworld = JSON.parse(this.responseText);
  person4Homeworld.innerHTML = homeworld.name;
}
oReq.addEventListener('load', getHomeworld4);
oReq.open('GET', 'http://swapi.co/api/planets/1/', true);
oReq.send();

var oReq = new XMLHttpRequest();
function getName14 () {
  name14 = JSON.parse(this.responseText);
  person14Name.innerHTML = name14.name;
}
oReq.addEventListener('load', getName14);
oReq.open('GET', 'http://swapi.co/api/people/14/', true);
oReq.send();

var oReq = new XMLHttpRequest();
function getSpecies14 () {
  species14 = JSON.parse(this.responseText);
  person14Species.innerHTML = species14.name;
}
oReq.addEventListener('load', getSpecies14);
oReq.open('GET', 'http://swapi.co/api/species/1/', true);
oReq.send();

var oReq = new XMLHttpRequest();
function getFilms () {
  films = JSON.parse(this.responseText);

  for (let i = 0; i < films.results.length; i++){
    let filmLi = document.createElement('li');
    let filmTitle = document.createElement('h2');
    let planetTitle = document.createElement('h3');
    let planetUl = document.createElement('ul');
    filmTitle.innerHTML = films.results[i].title;
    planetTitle.innerHTML = 'Planets';
    filmList.appendChild(filmLi);
    filmLi.appendChild(filmTitle);
    filmLi.appendChild(planetTitle);
    planetTitle.appendChild(planetUl);
    for (let j = 0; j < films.results[i].planets.length; j++){

      let planetLi = document.createElement('li');
      planetUl.appendChild(planetLi);

      var oReq = new XMLHttpRequest();
      function getFilmPlanets () {
        filmPlanets = JSON.parse(this.responseText);
        planetLi.innerHTML = filmPlanets.name;
      }
      oReq.addEventListener('load', getFilmPlanets);
      oReq.open('GET',films.results[i].planets[j], true);
      oReq.send();
    }
  }
}
oReq.addEventListener('load', getFilms);
oReq.open('GET', 'http://swapi.co/api/films/', true);
oReq.send();*/
