//Job posting class
class posting {
  constructor(title,location,price,description){
    this.title = title;
    this.location = location;
    this.price = price;
    this.description = description;
  }
}

//UI
class UI {

}

//Event listeners

//getting form data
let form = document.querySelector(".posting-form");
let title = document.querySelector("#job-title");
let loc = document.querySelector("#location");
let price = document.querySelector("#price");
let description = document.querySelector("#description");

form.addEventListener("submit",(e) => {
  e.preventDefault();
  console.log(title.value);
  console.log(loc.value);
  console.log(price.value);
  console.log(description.value);
});
