// SCRIPT DE CÁLCULO DE IMC - DESENVOLVIDO POR "JOÃO PAULO CARVALHO"
function imc_calc() {
	var massa = parseFloat(document.getElementById('massform').value);
	if(massa) {
		var altura = parseFloat(document.getElementById('altform').value);
		if(altura) {
			var imc = massa/(altura*altura) ;
			var sex = document.imcalc.sexo.value;
			if ( sex=="0" ) {
				alert("Informe o seu sexo.")
			}
			else {
				if(sex) {
					document.getElementById('viewimc').innerHTML = 'Seu IMC é '+arred(imc);
					window.location.href = "#linkH";
					if(sex=="fem") { //SEXO FEMININO
						if ( parseFloat(19.1)<=imc && imc<=parseFloat(25.8) ) { //PESO IDEAL
							document.getElementById('sitimc').innerHTML = 'Parabéns! Você está dentro do peso.';
							document.getElementById("iframe").src = 'iframe/imc-1.html';
							document.getElementById("corpo").innerHTML =
							'<div id="corpo">'+
							'<header id="secundario">'+
					           	'<nav class ="menu-sec">'+
					            	'<ul>'+
					            		'<li><a href="imc-1/dicas.html">Sugestão de cardápio</a></li>'+
					            		'<li><a href="imc-1/alimentacao.html">Dicas</a></li>'+
					            		'<p id="avis">NAVEGUE AO LADO</p>'+
									'</ul>'+
								'</nav>'+
							'</header>'+
							'<figure id="talk2">'+
								'<img class="balao" id="balao4" src="../img/talk/balao4.png"/>'+
								'<img class="balao" id="balao5" src="../img/talk/balao5.png"/>'+
								'<img class="balao" id="balao6" src="../img/talk/balao6.png"/>'+
								'<figcaption>'+
									'<p id="ex">Diálogo meramente demonstrativo, sem distinção de sexo.</p>'+
								'</figcaption>'+
							'</figure>'+
							'<article id="inf">'+
								'<h2>LEMBRE-SE</h2>'+
								'<figure>'+
									'<img id="like" src="../img/like.png"/>'+
									'<figcaption id="figScrr">'+
										'<p id="scrr">O(a) nutricionista é sempre o melhor caminho!</p>'+
										'<p id="scrr2">Não faça nada sem acompanhamento.</p>'+
									'</figcaption>'+
								'</figure>'+
							'</article>'+
							'</div>'
							;
						}
						else if ( imc<parseFloat(19.1) ) { //ABAIXO DO PESO
							document.getElementById('sitimc').innerHTML = 'Você está abaixo do peso.';
							document.getElementById("iframe").src = 'iframe/imc-2.html';
						}
						else if ( parseFloat(25.9)<=imc && imc<=parseFloat(27.3) ) { //POUCO ACIMA DO PESO
							document.getElementById('sitimc').innerHTML = 'Você está um pouco acima do peso.';
							document.getElementById("iframe").src = 'iframe/imc-3.html';
						}
						else if ( parseFloat(27.4)<=imc && imc<=parseFloat(32.3) ) { //ACIMA DO PESO
							document.getElementById('sitimc').innerHTML = 'Você está acima do peso.';
							document.getElementById("iframe").src = 'iframe/imc-4.html';
						}
						else if ( imc>parseFloat(32.3) ){ //OBESIDADE
							document.getElementById('sitimc').innerHTML = 'Cuidado! Você está obesa.';
							document.getElementById("iframe").src = 'iframe/imc-5.html';
						}
					}
					else if (sex=="mas") { //SEXO MASCULINO
						if ( parseFloat(20.7)<=imc && imc<=parseFloat(26.4) ) { //PESO IDEAL
							document.getElementById('sitimc').innerHTML = 'Parabéns! Você está dentro do peso.';
							document.getElementById("iframe").src = 'iframe/imc-1.html';
						}
						else if ( imc<parseFloat(20.7) ) { //ABAIXO DO PESO
							document.getElementById('sitimc').innerHTML = 'Você está abaixo do peso.';
							document.getElementById("iframe").src = 'iframe/imc-2.html';
						}
						else if ( parseFloat(26.5)<=imc && imc<=parseFloat(27.8) ) { //POUCO ACIMA DO PESO
							document.getElementById('sitimc').innerHTML = 'Você está um pouco acima do peso.';
							document.getElementById("iframe").src = 'iframe/imc-3.html';
						}
						else if ( parseFloat(27.9)<=imc && imc<=parseFloat(31.1) ) { //ACIMA DO PESO
							document.getElementById('sitimc').innerHTML = 'Você está acima do peso.';
							document.getElementById("iframe").src = 'iframe/imc-4.html';
						}
						else if ( imc>parseFloat(31.1) ) { //OBESIDADE
							document.getElementById('sitimc').innerHTML = 'Cuidado! Você está obeso.';
							document.getElementById("iframe").src = 'iframe/imc-5.html';
						}
					}
				}
				else {
					alert("Informe o seu sexo.")
				}
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
