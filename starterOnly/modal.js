function editNav() {
  let x = document.getElementById("myTopnav");
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

// Events listener pour fermer le modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
closeBtn2.forEach((btn2) => btn2.addEventListener("click", closeModal2));

/**
 * Fonction pour fermer le modal
 */
function closeModal() {
  modalbg.style.display= "none";
}
/**
 * Seconde fonction pour fermer le modal (bouton dans le message de validation)
 */
function closeModal2() {
  modalbg.style.display="none";
}


//Variables pour récupérer les valeurs des champs
  //Variables pour le prénom
let firstName = document.getElementById('first');
let parentFirst = firstName.parentElement;


  //Variables pour le nom
let lastName = document.getElementById('last');
let parentLast = lastName.parentElement;

  //Variables pour l'email
let email = document.getElementById('email');
let parentEmail = email.parentElement;


  //Variables pour la date de naissance
let birthdate = document.getElementById('birthdate');
let parentBirth = birthdate.parentElement;


  //Variables pour le nombre de tournois
let quantity = document.getElementById('quantity');
let parentQuantity = quantity.parentElement;


  //Variables pour le lieu des tournois
let checkBtn = document.getElementsByName('location');


  //Variables pour les Termes & Conditions
let agreeBtn = document.getElementById('checkbox1');
let parentAgree = agreeBtn.parentElement;


//Bouton de validation du formulaire
const submitBtn = document.getElementById('btn-submit');



 /**
  * Check first name validity function
  * @returns {boolean} Retourne true ou false selon la validation du champ
  */
  function firstValidate(){
    //Récupère la valeur de l'input sans espace blanc
    let value = firstName.value.trim();

    //On vérifie que l'input n'est pas vide et contient au moins 2 caractères 
    if(value.length >= 2) {
      parentFirst.removeAttribute('data-error-visible', 'true');
      return true;
    }     
    else { 
      parentFirst.setAttribute('data-error-visible','true');
      parentFirst.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus.');
      return false ;
    }
  }


   /**
    * Check last name validity function
    * @returns {boolean} Retourne true ou false selon la validation du champ
    */
  function lastValidate(){
    //Récupère la valeur de l'input sans espace blanc
    let value = lastName.value.trim();
    //On vérifie que l'input n'est pas vide et contient au moins 2 caractères
    if(value.length >= 2) {
      parentLast.removeAttribute('data-error-visible', 'true');
      return true;
    } else { 
      parentLast.setAttribute('data-error-visible','true');
      parentLast.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus.');
      return false ;
    }
  }

   /**
    * Check email validity function
    * @returns {boolean} Retourne true ou false selon la validation du champ
    */
  function emailValidate(){
    //Récupère la valeur de l'input
    let value = email.value;
    //Regex pour valider le mail
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regex.test(value)){
      parentEmail.removeAttribute('data-error-visible', 'true');
      return true;
    } else {
      parentEmail.setAttribute('data-error-visible','true');
      parentEmail.setAttribute('data-error', 'Veuillez entrer une adresse mail valide.');
      return false;
    }
  }
  
   /**
    * Check birthdate validity function
    * @returns {boolean} Retourne true ou false selon la validation du champ
    */
  function birthdateValidate(){
    //Récupère la valeur de la date entrée par l'utilisateur
    let value = birthdate.value;
    //Regex pour valider la date
    let regex = new RegExp(".*[0-9].*");


    if (regex.test(value)){
      parentBirth.removeAttribute('data-error-visible');
      return true;
    } else {
      parentBirth.setAttribute('data-error-visible','true');
      parentBirth.setAttribute('data-error', 'Veuillez entrer une date de naissance valide.')
      return false;
    }
  }


   /**
    * Check number validity function
    * @returns {boolean} Retourne true ou false selon la validation du champ
    */
  function quantityValidate() {
    //Récupère la valeur numérique entrée
    let numberValue = quantity.value;

    //On vérifie que l'input est de type nombre et contient au moins 1 caractère
    if(quantity["type"]=="number" && numberValue.length > 0) {
      parentQuantity.removeAttribute('data-error-visible');
      return true;
    } else {  
      parentQuantity.setAttribute('data-error-visible','true');
      parentQuantity.setAttribute('data-error', 'Veuillez entrer un nombre.')
      return false;
    }
  }



   /**
    * Check checked location function
    * @returns {boolean} Retourne true ou false selon la validation du champ
    */
  function locationValidate(){
    //Pour chaque bouton radio
    for (let i = 0; i<checkBtn.length; i++) {
      //On vérifie si que le type est bien 'radio' et que le bouton est coché
      if (checkBtn[i].type == 'radio' && checkBtn[i].checked) {
        
        //Récupère le parent du bouton radio coché
        let parentLocation = checkBtn[i].parentElement;
        parentLocation.removeAttribute('data-error-visible', 'true');
        console.log(parentLocation)
        return true;
      } else {
        let parentLocation = checkBtn[i].parentElement;
        parentLocation.setAttribute('data-error-visible', 'true');
        parentLocation.setAttribute('data-error', 'Veuillez choisir une option.')
      }
    }
    return false;
  }

    
  /**
   * Check agreement box
   * @returns {boolean} Retourne true ou false selon la validation du champ
   */
  function agreeValidate(){
    if(agreeBtn.checked) {
      parentAgree.removeAttribute('data-error-visible', 'true');
      return true;
    } else { 
      parentAgree.setAttribute('data-error-visible', 'true');
      parentAgree.setAttribute('data-error', 'Vous devez accepter les termes et conditions.');
      return false;
      }
  }


/**
 * Fonction validate pour valider et envoyer le formulaire
 * @param {event} e - event object
 */
function validate(e){
  //Empêche le formulaire de s'envoyer
  e.preventDefault();

  //Récupère et stocke la valeur booléenne retournée par les fonctions qui valident les champs
  let firstValidation = firstValidate();
  let lastValidation = lastValidate();
  let emailValidation = emailValidate();
  let birthdateValidation = birthdateValidate()
  let locationValidation = locationValidate();
  let quantityValidation= quantityValidate();
  let agreeValidation = agreeValidate();

    //Si toutes les entrées du formulaire sont correctes
    if(
      firstValidation && 
      lastValidation && 
      emailValidation && 
      birthdateValidation && 
      quantityValidation && 
      locationValidation && 
      agreeValidation) {
        
    //On cache le formulaire
    let form = document.querySelector('form');
    form.style.display="none";

    /**
     * Event listener pour valider le formulaire onclick
     * @param {MouseEvent} event 
     */
    form.addEventListener('click', function before_submit(event){
      //Message de validation
      let validation = document.getElementById('formValidation');
      validation.style.display="inline";

      //Appels de la fonction pour envoyer le formulaire au click
      document.getElementById('submitFormBtn').addEventListener('click', submit);
      document.getElementById('submitForm').addEventListener('click', submit);

      /**
       * Fonction pour envoyer le formulaire en appuyant sur le bouton 'Fermer' ou la croix
       */
      function submit(){
        form.submit();
      }

      // Empêche le formulaire d'être validé si tout ne retourne pas true
      event.preventDefault();
    });  
  }
}

//En cliquant sur le bouton, la fonction validate s'exécute
submitBtn.addEventListener('click', validate);