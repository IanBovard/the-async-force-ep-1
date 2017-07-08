let person4Hame = document.getElementById('person4Name');
let person4Homeworld = document.getElementById('person4HomeWorld');

var oReq = new XMLHttpRequest();
function getName () {
  personName = JSON.parse(this.responseText);
  person4Name.innerHTML = personName.name;
}
oReq.addEventListener('load', getName);
oReq.open('GET', 'http://swapi.co/api/people/4/', true);
oReq.send();

var oReq = new XMLHttpRequest();
function getHomeworld () {
  homeworld = JSON.parse(this.responseText);
  console.log(homeworld);
  console.log(person4Homeworld);
  person4Homeworld.innerHTML = homeworld.name;
}
oReq.addEventListener('load', getHomeworld);
oReq.open('GET', 'http://swapi.co/api/planets/1/', true);
oReq.send();

