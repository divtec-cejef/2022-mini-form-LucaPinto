/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

// Récupérer les éléments html
const formulaire = document.querySelector('form');
const listBackground = document.getElementById('background');

// Ecoute envoi du formulaire
formulaire.addEventListener('submit', function (event){
    event.preventDefault(); // Annule le comportement par défaut
    alert('Envoyé !');
});

// Ecoute changement du formulaire
listBackground.addEventListener('change', function() {
     const image = document.body.style.backgroundImage =
        `url(./img/backgrounds/${listBackground.value})`;
});
