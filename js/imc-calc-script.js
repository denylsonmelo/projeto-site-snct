// SCRIPT DE CÁLCULO DE IMC - DESENVOLVIDO POR "JOÃO PAULO CARVALHO"
function imc_calc() {
	var massa = parseFloat(document.getElementById('mass-form').value);
	if(massa) {
		var altura = parseFloat(document.getElementById('alt-form').value);
		if(altura) {
			var imc = massa/(altura*altura) ;
			var sex = document.imcalc.sexo.value;
			if(sex) {
				document.getElementById('view_imc').innerHTML = 'Seu IMC é '+arred(imc);
				if(sex=="fem") { //SEXO FEMININO  
					if ( parseFloat(19.1)<=imc && imc<=parseFloat(25.8) ) { //PESO IDEAL
						document.getElementById('sit_imc').innerHTML = 'Parabéns! Você está dentro do peso.';
						document.getElementById("iframe").src = 'iframe/imc-1.html';
					}
					else if ( imc<parseFloat(19.1) ) { //ABAIXO DO PESO
						document.getElementById('sit_imc').innerHTML = 'Você está abaixo do peso.';
						document.getElementById("iframe").src = 'iframe/imc-2.html';
					}
					else if ( parseFloat(25.9)<=imc && imc<=parseFloat(27.3) ) { //POUCO ACIMA DO PESO
						document.getElementById('sit_imc').innerHTML = 'Você está um pouco acima do peso.';
						document.getElementById("iframe").src = 'iframe/imc-3.html';
					}
					else if ( parseFloat(27.4)<=imc && imc<=parseFloat(32.3) ) { //ACIMA DO PESO
						document.getElementById('sit_imc').innerHTML = 'Você está acima do peso.';
						document.getElementById("iframe").src = 'iframe/imc-4.html';
					}
					else if ( imc>parseFloat(32.3) ){ //OBESIDADE
						document.getElementById('sit_imc').innerHTML = 'Cuidado! Você está obesa.';
						document.getElementById("iframe").src = 'iframe/imc-5.html';
					}
				}
				else if (sex=="mas") { //SEXO MASCULINO
					if ( parseFloat(20.7)<=imc && imc<=parseFloat(26.4) ) { //PESO IDEAL
						document.getElementById('sit_imc').innerHTML = 'Parabéns! Você está dentro do peso.';
						document.getElementById("iframe").src = 'iframe/imc-1.html';
					}
					else if ( imc<parseFloat(20.7) ) { //ABAIXO DO PESO
						document.getElementById('sit_imc').innerHTML = 'Você está abaixo do peso.';
						document.getElementById("iframe").src = 'iframe/imc-2.html';
					}
					else if ( parseFloat(26.5)<=imc && imc<=parseFloat(27.8) ) { //POUCO ACIMA DO PESO
						document.getElementById('sit_imc').innerHTML = 'Você está um pouco acima do peso.';
						document.getElementById("iframe").src = 'iframe/imc-3.html';
					}
					else if ( parseFloat(27.9)<=imc && imc<=parseFloat(31.1) ) { //ACIMA DO PESO
						document.getElementById('sit_imc').innerHTML = 'Você está acima do peso.';
						document.getElementById("iframe").src = 'iframe/imc-4.html';
					}
					else if ( imc>parseFloat(31.1) ) { //OBESIDADE
						document.getElementById('sit_imc').innerHTML = 'Cuidado! Você está obeso.';
						document.getElementById("iframe").src = 'iframe/imc-5.html';
					}
				}
			}
			else {
				alert("Informe o seu sexo.")
			}
		}
		else {
			alert("Insira a sua altura em metros (m).")
		}	
	}
	else {
		alert("Insira a sua massa corporal em quilogramas (Kg).")
	}
}
function arred(num){
		return parseInt(num*100)/100;
}
