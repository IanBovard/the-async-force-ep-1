let person4Name = document.getElementById('person4Name');
let person4Homeworld = document.getElementById('person4HomeWorld');
let person14Name = document.getElementById('person14Name');
let person14Species = document.getElementById('person14Species');

var oReq = new XMLHttpRequest();
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

