// SCRIPT DE EFEITO FADE-IN BY "JOÃO PAULO CARVALHO"
function fadein(domElement) {
	document.getElementById(domElement).style.opacity = 1;
}
function fadeH2(type) {
	if ( type == "in" ) {
		document.getElementById("fadeinH2").style.color = 'white';
		document.getElementById("fadeinH2").style.background = '#23532f';
	}
	else if ( type == "out" ) {
		document.getElementById("fadeinH2").style.color = 'black';
		document.getElementById("fadeinH2").style.background = '#b9f9b1';
	}
}