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
const closeBtn2 = document.querySelectorAll('.close-btn');
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal events
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
closeBtn2.forEach((btn2) => btn2.addEventListener("click", closeModal2));

// close modal form
function closeModal() {
  modalbg.style.display= "none";
}
// second function to close modal form (in validation message)
function closeModal2() {
  modalbg.style.display="none";
}


//Variables pour récupérer les valeurs des champs
  //Variables pour le prénom
let firstName = document.getElementById('first');
let parentFirst = document.querySelector('#firstName');
let errorFirst = document.createElement('p');
parentFirst.appendChild(errorFirst);
errorFirst.textContent="Veuillez entrer 2 caractères ou plus.";
errorFirst.style.display="none";

  //Variables pour le nom
let lastName = document.getElementById('last');
let parentLast = document.querySelector('#lastName');
let errorLast = document.createElement('p');
parentLast.appendChild(errorLast);
errorLast.textContent="Veuillez entrer 2 caractères ou plus.";
errorLast.style.display="none";

  //Variables pour l'email
let email = document.getElementById('email');
let parentEmail = document.querySelector('#emailInput');
let errorEmail = document.createElement('p');
parentEmail.appendChild(errorEmail);
errorEmail.textContent="Veuillez entrer une adresse mail valide.";
errorEmail.style.display="none";


  //Variables pour la date de naissance
let birthdate = document.getElementById('birthdate');
let parentBirth = document.getElementById('birthdateInput');
let errorBirth = document.createElement('p');
parentBirth.appendChild(errorBirth);
errorBirth.textContent="Veuillez entrer une date de naissance valide.";
errorBirth.style.display="none";

  //Variables pour le nombre de tournois
let quantity = document.getElementById('quantity');
let parentQuantity = document.getElementById('numberInput');
let errorQuantity = document.createElement('p');
parentQuantity.appendChild(errorQuantity);
errorQuantity.textContent="Veuillez entrer un nombre.";
errorQuantity.style.display="none";


  //Variables pour le lieu des tournois
let checkBtn = document.getElementsByName('location');
let parentLocation = document.getElementById('locationBtn');
let errorLocation = document.createElement('p');
parentLocation.appendChild(errorLocation);
errorLocation.textContent="Veuillez choisir une option.";
errorLocation.style.display="none";

  //Variables pour les Termes & Conditions
let agreeBtn = document.getElementById('checkbox1');
let parentAgree = document.getElementById('agreeBtn');
let errorAgree = document.createElement('p');
parentAgree.appendChild(errorAgree);
errorAgree.textContent="Vous devez accepter les termes et conditions.";
errorAgree.style.display="none";

//Bouton de validation du formulaire
const submitBtn = document.getElementById('btn-submit');


 //Check first name validity function
  function firstValidate(){
    var value = firstName.value;
    //On vérifie que l'input n'est pas vide et contient au moins 2 caractères 
    if(value.length >= 2 && value != null) {
      console.log("First Name ok");
      errorFirst.style.display="none";
      parentFirst.removeAttribute('data-error-visible', 'true');
      return true
    } else { 
      parentFirst.setAttribute('data-error-visible','true');
      errorFirst.classList.add('error');
      errorFirst.style.display="block";
      return false 
    }
  }

   //Check last name validity function
  function lastValidate(){
    var value = lastName.value;
    //On vérifie que l'input n'est pas vide et contient au moins 2 caractères
    if(value.length >= 2 && value != null) {
      console.log("Last Name ok");
      errorLast.style.display="none";
      parentLast.removeAttribute('data-error-visible', 'true');
      return true
    } else { 
      parentLast.setAttribute('data-error-visible','true');
      errorLast.classList.add('error');
      errorLast.style.display="block";
      return false 
    }
  }

   //Check email validity function
  function emailValidate(){
    //Récupère la longueur du texte
    var value = email.value;
    //Regex pour valider le mail
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regex.test(value)){
      errorEmail.style.display="none";
      parentEmail.removeAttribute('data-error-visible', 'true');
      return true
    } else {
      parentEmail.setAttribute('data-error-visible','true');
      errorEmail.classList.add('error');
      errorEmail.style.display="block";
      return false
    }
  }

   //Check birthdate validity function
  function birthdateValidate(){
    var value = birthdate.value;
    var regex = new RegExp(".*[0-9].*");


    if (regex.test(value)){
      parentBirth.removeAttribute('data-error-visible');
      errorBirth.style.display="none";
      return true
    } else {
      parentBirth.setAttribute('data-error-visible','true');
      errorBirth.classList.add('error');
      errorBirth.style.display="block";
      return false;
    }
  }

   //Check number validity function
  function quantityValidate() {
    var numberValue = quantity.value;
    //On vérifie que l'input est de type nombre et contient au moins 1 caractère
    if(quantity["type"]=="number" && numberValue.length > 0) {
      parentQuantity.removeAttribute('data-error-visible');
      errorQuantity.style.display="none";
      return true
    } else {  
      parentQuantity.setAttribute('data-error-visible','true');
      errorQuantity.classList.add('error');
      errorQuantity.style.display="block";
      return false
    }
  }

   //Check checked location function
  function locationValidate(){
    //Pour chaque bouton radio
    for (var i = 0; i<checkBtn.length; i++) {
      //On vérifie si que le type est bien 'radio' et que le bouton est coché
      if (checkBtn[i].type == 'radio' && checkBtn[i].checked) {
        errorLocation.style.display="none";
        return true;
      } 
    }
    errorLocation.classList.add('error');
    errorLocation.style.display="block";
    return false
  }
    
  //Check agreement box
  function agreeValidate(){
    if(agreeBtn.checked) {
      errorAgree.style.display="none";
      return true
    } else { 
      errorAgree.classList.add('error');
      errorAgree.style.display="block";
      return false
      }
  }

//Validate function
function validate(e){
  //Empêche le formulaire de s'envoyer
  e.preventDefault();

  //Exécute les fonctions qui valident les champs
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
    
      // Empêche le formulaire d'être validé si tout ne retourne pas true
      event.preventDefault();
    });  
  }
}

//En cliquant sur le bouton, la fonction validate s'exécute
submitBtn.addEventListener('click', validate);