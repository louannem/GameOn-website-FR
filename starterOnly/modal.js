function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display= "none";
}


//Variables pour récupérer les valeurs des champs
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let email = document.getElementById('email');
let quantity = document.getElementById('quantity');
let checkBtn = document.getElementsByName('location');
let agreeBtn = document.getElementById('checkbox1');
const submitBtn = document.getElementById('btn-submit');



//Check first name validity function
function firstValidate(){
  var value = firstName.value;
  //On vérifie que l'input n'est pas vide et contient au moins 2 caractères 
  if(value.length >= 2 && value != null) {
    console.log("First Name ok");
    return true
  } else { return false }
}


//Check last name validity function
function lastValidate(){
  var value = lastName.value;
  //On vérifie que l'input n'est pas vide et contient au moins 2 caractères
  if(value.length >= 2 && value != null) {
    console.log("Last Name ok");
    return true
  } else { return false }
}


//Check mail validity function
function emailValidate(){
  //Récupère la longueur du texte
  var value = email.value.length;
  //Récupère la valeur entrée dans l'input
  var emailText = email.value;
  //On vérifie que l'input est de type email, d'au moins 2 caractères et possède un @
  if (email["type"]== "email" && value > 2 && emailText.includes("@")) {
    console.log("Email ok");
    return true 
  } else { return false}
}

//Check number validity function
function quantityValidate() {
  var numberValue = quantity.value;
  //On vérifie que l'input est de type nombre et contient au moins 1 caractère
  if(quantity["type"]=="number" && numberValue.length > 0) {
    console.log('quantity ok',numberValue, quantity["type"] );
    return true
  } else {  return false}
}

//Check at least one selected  button function
function locationValidate(){
  //Pour chaque bouton radio
  for (var i = 0; i<checkBtn.length; i++) {
    //On vérifie si que le type est bien 'radio' et que le bouton est coché
    if (checkBtn[i].type == 'radio' && checkBtn[i].checked) {
      console.log('location ok');
      return true;
    } 
  }
  console.log('location not ok');
  return false;
}


//Check agreement box
function agreeValidate(){
  if(agreeBtn.checked) {
    console.log('Conditions ok');
    return true
  } else { 
    console.log('Conditions not ok');
    return false
    }
}



//Validate function
submitBtn.addEventListener('click', validate);

function validate(e){
  //Exécute les fonctions précédentes
  firstValidate();
  lastValidate();
  emailValidate();
  quantityValidate();
  locationValidate();
  agreeValidate();

  //Si l'une des fonctions suivante ne retourne pas true
  if ( !firstValidate() || 
       !lastValidate() ||
       !emailValidate() ||
       !quantityValidate() ||
       !locationValidate() 
  ) 
  //On empêche le formulaire d'être validé
  {  e.preventDefault();}
}