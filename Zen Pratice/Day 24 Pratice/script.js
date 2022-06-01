var form = document.createElement("form");
form.setAttribute("id", "myform");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "country");
input.setAttribute("required", true);
var sub = document.createElement("input");
sub.setAttribute("type", "submit");
sub.setAttribute("value", "search");
form.append(input, sub);
document.body.append(form);

// code here??

let division = document.createElement("div");
division.setAttribute("id", "confirmed");
document.body.append(division);

let recovered = document.createElement("div");
recovered.setAttribute("id", "recovered");
document.body.append(recovered);

let dead = document.createElement("div");
dead.setAttribute("id", "deadth");
document.body.append(dead);

var formres = document.getElementById("myform");
formres.addEventListener("submit", (event) => {
  event.preventDefault(); // to overcome default behaviour
  var country = document.getElementById("country").value;
  var url = `https://api.covid19api.com/dayone/country/${country}`;

  covid(url);
});

async function covid(url) {
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  console.log(data);
  let index = data.length - 1;

  let confirmed = document.getElementById("confirmed");
  let recovered = document.getElementById("recovered");
  let deaths = document.getElementById("deaths");

  confirmed.innerHTML = " ";

  confirmed.append(`Total confirmed cases: ${data[index].Confirmed}`);

  recovered.innerHTML = " ";
  recovered.append(`Total recovered cases: ${data[index].Recovered}`);

  dead.innerHTML = " ";
  dead.append(`Total deadths: ${data[index].Dead}`);
}
