"use strict";
(()=>{
//var grosArbre = document.getElementsByClassName("arbre")[0];
var feuille1 = document.getElementById("feuille1");
var feuille2 = document.getElementById("feuille2");
var feuille3 = document.getElementById("feuille3");
var feuille4 = document.getElementById("feuille4");
var feuille5 = document.getElementById("feuille5");
var feuille6 = document.getElementById("feuille6");
var lesFeuilles = document.getElementsByClassName('feuilles');

var gDown = {};



addEventListener("keydown", function(e)
	{
		gDown[e.keyCode]=true;
		//console.log('sew');
		feuille1.classList.remove("feuillesRapide1");
		feuille1.className = "feuillesMontantes";
		feuille2.classList.remove("feuillesRapide2");
		feuille2.className = "feuillesMontantes";
		feuille3.classList.remove("feuillesNeutre1");
		feuille3.className = "feuillesMontantes";
		feuille4.classList.remove("feuillesNeutre2");
		feuille4.className = "feuillesMontantes";
		feuille5.classList.remove("feuillesLente1");
		feuille5.className = "feuillesMontantes";
		feuille6.classList.remove("feuillesLente2");
		feuille6.className = "feuillesMontantes";
		
	}, false);	

addEventListener("keyup", function(e)
	{
		delete gDown[e.keyCode];
		//console.log('dead o c sick');
		feuille1.classList.remove("feuillesMontantes");
		feuille1.className = "feuillesTombantes feuillesRapide1";
		feuille2.classList.remove("feuillesMontantes");
		feuille2.className = "feuillesTombantes feuillesRapide2";
		feuille3.classList.remove("feuillesMontantes");
		feuille3.className = "feuillesTombantes feuillesNeutre1";
		feuille4.classList.remove("feuillesMontantes");
		feuille4.className = "feuillesTombantes feuillesNeutre2";
		feuille5.classList.remove("feuillesMontantes");
		feuille5.className = "feuillesTombantes feuillesLente1";
		feuille6.classList.remove("feuillesMontantes");
		feuille6.className = "feuillesTombantes feuillesLente2";
	},false);
	

	})()

