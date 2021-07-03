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
let birthdate = document.getElementById('birthdate');
let quantity = document.getElementById('quantity');
let checkBtn = document.getElementsByName('location');
let agreeBtn = document.getElementById('checkbox1');
const submitBtn = document.getElementById('btn-submit');


 //Check first name validity function
  function firstValidate(){
    var value = firstName.value;
    let parentElt = document.querySelector('#firstName');
    let errorMess = document.createElement('p');
    //On vérifie que l'input n'est pas vide et contient au moins 2 caractères 
    if(value.length >= 2 && value != null) {
      console.log("First Name ok");
      return true
    } else { 
      parentElt.setAttribute('data-error-visible','true');
      parentElt.appendChild(errorMess);
      errorMess.textContent="Veuillez entrer 2 caractères ou plus.";
      errorMess.classList.add('error');
      return false 
    }
  }

  function lastValidate(){
    var value = lastName.value;
    //On vérifie que l'input n'est pas vide et contient au moins 2 caractères
    if(value.length >= 2 && value != null) {
      console.log("Last Name ok");
      return true
    } else { 
      let parentElt = document.querySelector('#lastName');
      parentElt.setAttribute('data-error-visible','true');
      let errorMess = document.createElement('p');
      parentElt.appendChild(errorMess);
      errorMess.textContent="Veuillez entrer 2 caractères ou plus.";
      errorMess.classList.add('error');
      return false 
    }
  }

  function emailValidate(){
    //Récupère la longueur du texte
    var value = email.value;
    //Regex pour valider le mail
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //Récupère la valeur entrée dans l'input
    let parentElt = document.getElementById('emailInput');
    let errorMess = document.createElement('p'); 

    if(regex.test(value)){
      return true
    } else {
      parentElt.setAttribute('data-error-visible','true');
      parentElt.appendChild(errorMess);
      errorMess.textContent="Veuillez entrer une adresse mail valide.";
      errorMess.classList.add('error');
      return false
    }
  }

  function birthdateValidate(){
    var value = birthdate.value;
    var regex = new RegExp(".*[0-9].*");
    let parentElt = document.getElementById('birthdateInput');
    let errorMess = document.createElement('p');


    if (regex.test(value)){
      return true
    } else {
      console.log(value);
      parentElt.setAttribute('data-error-visible','true');
      parentElt.appendChild(errorMess);
      errorMess.textContent="Veuillez entrer une date de naissance valide.";
      errorMess.classList.add('error');
      return false;
    }
  }

  function quantityValidate() {
    var numberValue = quantity.value;
    //On vérifie que l'input est de type nombre et contient au moins 1 caractère
    if(quantity["type"]=="number" && numberValue.length > 0) {
      return true
    } else {  
      let parentElt = document.querySelector('#numberInput');
      parentElt.setAttribute('data-error-visible','true');
      let errorMess = document.createElement('p');
      parentElt.appendChild(errorMess);
      errorMess.textContent="Veuillez entrer un chiffre.";
      errorMess.classList.add('error');
      return false
    }
  }

  function locationValidate(){
    //Pour chaque bouton radio
    for (var i = 0; i<checkBtn.length; i++) {
      //On vérifie si que le type est bien 'radio' et que le bouton est coché
      if (checkBtn[i].type == 'radio' && checkBtn[i].checked) {
        console.log('location ok');
        return true;
      } 
    }
    let parentElt = document.querySelector('#locationBtn');
    let errorMess = document.createElement('p');
    parentElt.appendChild(errorMess);
    errorMess.classList.add('error');
    errorMess.textContent="Vous devez choisir une option.";
    return false
  }
    
  //Check agreement box
  function agreeValidate(){
    let parentElt = document.querySelector('#agreeBtn');
    let errorMess = document.createElement('p');
    if(agreeBtn.checked) {
      console.log('Conditions ok');
      return true
    } else { 
      parentElt.appendChild(errorMess);
      errorMess.textContent="Vous devez accepter les termes et conditions.";
      errorMess.classList.add('error');
      return false
      }
  }

//Validate function
function validate(e){
  e.preventDefault();

  firstValidate();
  lastValidate();
  emailValidate();
  birthdateValidate()
  locationValidate();
  quantityValidate();
  agreeValidate();

    //Si toutes les entrées du formulaire sont correctes
    if(firstValidate() && lastValidate() && emailValidate() && birthdateValidate() && quantityValidate() && locationValidate() && agreeValidate()) {
    //On cache le formulaire
    var form = document.querySelector('form');
    form.style.display="none";

    //Event listener pour valider le formulaire onclick
    form.addEventListener('click', function before_submit(event){
      //Message de validation
      let validation = document.getElementById('formValidation');
      validation.style.display="inline";
      //Fonction pour afficher le message une certaine durée
      setTimeout(function wait(){
        // Attends 3 secondes avant de valider le formulaire
        form.submit();
      },3000);
    
      // Empêche le formulaire d'être validé
      event.preventDefault();
    });  
  }
}

submitBtn.addEventListener('click', validate);