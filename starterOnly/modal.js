function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM entrees: Recuperation de la div radion son input avec la class et les id
const modalBg     = document.querySelector(".bground");
const modalBtn    = document.querySelectorAll(".modal-btn");
const formData    = document.querySelectorAll(".formData");
const btnValid    = document.querySelectorAll(".validForm");
const corpsRemerc = document.querySelector(".bground-remerciement");


// launch modal event = bouton pour s'inscrire
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form  = donc là le formulaire se change en block
function launchModal() {
    modalBg.style.display = "block";
}

// fermer formulaire via croix
  document.getElementById("fermeForm").addEventListener("click", function(a) {
    modalBg.style.display = "none";
});


// fermer modal remerciement par le button
  document.querySelector(".fermRemerciement").addEventListener("click", function(b) {
    corpsRemerc.style.display = "none";
    modalBg.style.display = "none";
});

// button croix du remerciement
  document.getElementById("croixRemerciement").addEventListener("click", function(b) {
    corpsRemerc.style.display = "none";
    modalBg.style.display = "none";
});



  // recupération des entrees du Dom spécifiques au formulaire

const formulaire    = document.querySelector("#formulaire"); 
const prenom        = document.getElementById("first");
const nom           = document.getElementById("last");
const emailValid    = document.getElementById("email");
const dNaissance    = document.getElementById("birthdate");
const nbrJeux       = document.getElementById("quantity");
const btnRadio      = document.querySelectorAll("input[type=radio]");
const radiosDiv     = document.getElementById("radios");
const box1          = document.getElementById("checkbox1");

// regle regex pour faciliter la validation

let regleString = /^[a-z,A-Z]+$/i;
let regleEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;


//creation ecoute sur input

prenom.addEventListener("focusout", prenomValid); 
nom.addEventListener("focusout", nomValid); 
emailValid.addEventListener("focusout", verifEmail); 
dNaissance.addEventListener("focusout", verifAnnif); 
nbrJeux.addEventListener("focusout", verifTournois);
 

// verfication des entrees prenom et nom

function prenomValid() {console.log(prenom.value);


  if (prenom.value.length < 2 || prenom.value.length > 25 || !prenom.value.match(regleString)) {
      prenom.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  prenom.parentElement.setAttribute('data-error-visible', 'false');
  return true;
  } 

  //----------------------------------------------------------------


  function nomValid() {console.log(nom.value);

    if (nom.value.length < 2 || nom.value.length > 31 || !nom.value.match(regleString)) {
  
        nom.parentElement.setAttribute('data-error-visible', 'true');    
      return false;
    }
       nom.parentElement.setAttribute('data-error-visible', 'false');
    return true;
    } 



// verification de l'email 

function verifEmail() {

  if (emailValid.value.match(regleEmail)) {console.log(emailValid.value);
      emailValid.parentElement.setAttribute('data-error-visible', 'false');
  return true;
  }
     emailValid.parentElement.setAttribute('data-error-visible', 'true');    
  return false;
  } 
  

// verification de l'entrée anniversaire

function verifAnnif() {console.log(dNaissance.value);
  if (dNaissance.value.length == 0) {
      dNaissance.parentElement.setAttribute('data-error-visible', 'true');  
  return false;
  }
     dNaissance.parentElement.setAttribute('data-error-visible', 'false');
  return true;
  } 

  
  //verification des tournois
  
  function verifTournois() {console.log(nbrJeux.value);
  if (isNaN(nbrJeux.value) === true || nbrJeux.value == false || nbrJeux.value < 0 || nbrJeux.value > 99 ) {
    nbrJeux.parentElement.setAttribute('data-error-visible', 'true');    
  return false;
  }
   nbrJeux.parentElement.setAttribute('data-error-visible', 'false');
  return true;
  } 
  

// verification des boutons radios
function validRadio() {


let valid = false;
let nomVille  = "";

  for (var i = 0; i < btnRadio.length; i++) {  console.log(nomVille);

    if (btnRadio[i].checked) {
       radiosDiv.setAttribute('data-error-visible', 'false');
       nomVille = btnRadio[i].value;
       valid=true;
    }   
  }  
  
    if(!valid) {
      radiosDiv.setAttribute('data-error-visible', 'true'); 
      return false;
    }
    
    return true;
}



// verification de la checkbox obligatoire

function verifcheckbox1() { console.log(box1.checked);
  if (!box1.checked) {
    box1.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  box1.parentElement.setAttribute('data-error-visible', 'false');
  return true;
  }

  
  // function pour la validation sur le submit
  
document.getElementById("inscription").addEventListener("click", function(formRempli) {  
  
  if(
  prenomValid() === true &&
  nomValid() === true &&
  verifEmail() === true &&
  verifAnnif() === true &&
  verifTournois() === true&&
  validRadio()=== true &&
  verifcheckbox1() === true
  ){

		{
      corpsRemerc.style.display = "block";
      modalBg.style.display = "none";
			formulaire.reset(); 
       		
		  }
       formRempli.preventDefault();
		}
    
});



