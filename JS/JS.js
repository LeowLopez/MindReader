var cont = 0;//contador que será incrementado (somado +1) cada vez que o usuário embaralhar cartas (clicar numa seta)
var reload = 1;//contador para mudar entre as três ordens iniciais, para cada vez que o usuário jogar novamente

function ordemInicial(){

	if(reload == 1){
		Cartas = new Array(21); //criar Array carta com 21 espaços (Cartas[0] até Cartas[20])
			for (i=0; i<21; i++){  //0 à 20
				Cartas[i] = i+1+".jpg";//"1.jpeg" à "21.jpg"
			}
		//Ou seja, resulta em Cartas[0] = "1.jpg"; Cartas[1] = "2.jpg"; ... Assim por diante até a 21ª imagem (Cartas[20] = "21.jpg"), a última.
		/*
		Cartas = new Array("1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg",
		"8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg",
		"15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg");
		*/
	}
	else if(reload == 2){//segunda ordem inicial
		Cartas = new Array("15.jpg", "17.jpg", "19.jpg", "21.jpg", "16.jpg", "18.jpg", "20.jpg",
						   "1.jpg", "3.jpg", "5.jpg", "7.jpg", "2.jpg", "4.jpg", "6.jpg",
						   "8.jpg", "10.jpg", "12.jpg", "14.jpg", "9.jpg", "11.jpg", "13.jpg");
	}
	else{//terceira ordem inicial
		Cartas = new Array("15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg",
						   "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg",
						   "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg");
	}
	
	if(reload == 3){
		reload = 0;//seta novamente para o zero, voltando à primeira ordem inicial
	}
	
	reload++;		
}

function memorizar(){
	//memoriza criando trÊs arrays para guardar as posições e usar nos embaralhamentos
	Sub1 = new Array(Cartas[0], Cartas[3], Cartas[6], Cartas[9], Cartas[12], Cartas[15], Cartas[18]);
	Sub2 = new Array(Cartas[1], Cartas[4], Cartas[7], Cartas[10], Cartas[13], Cartas[16], Cartas[19]);
	Sub3 = new Array(Cartas[2], Cartas[5], Cartas[8], Cartas[11], Cartas[14], Cartas[17], Cartas[20]);

	document.getElementById('p3').innerHTML = cont+1+"/3 jogadas";//mostra contador de jogadas cada vez que clicar em um botão embaralhar
}

/* Atenção, as três funções que seguem são de embaralhamento. Uma para cada botão que o usuário clicar, entre os três...
Se tiver dificuldade com o algoritmo aconselho que pesquise primeiramente no youtube por "mágica de 21 cartas", depois
algo ensinando fazê-la. É na verdade uma lógica matemática. Quando aprender fazer, comece virando as cartas das colunas restantes
de costas, e então entenderá como a escolhida será a 11ª. Que no caso aqui será a Array "Cartas[10]". */

function embaralhar1(){
	
	memorizar();
	Cartas[0] = Sub3[0];
	Cartas[1] = Sub3[1];
	Cartas[2] = Sub3[2]; 
	Cartas[3] = Sub3[3]; 
	Cartas[4] = Sub3[4];
	Cartas[5] = Sub3[5];
	Cartas[6] = Sub3[6];

	Cartas[7] = Sub1[0];
	Cartas[8] = Sub1[1];
	Cartas[9] = Sub1[2]; 
	Cartas[10] = Sub1[3]; 
	Cartas[11] = Sub1[4];
	Cartas[12] = Sub1[5];
	Cartas[13] = Sub1[6];
	
	Cartas[14] = Sub2[0];
	Cartas[15] = Sub2[1];
	Cartas[16] = Sub2[2]; 
	Cartas[17] = Sub2[3]; 
	Cartas[18] = Sub2[4];
	Cartas[19] = Sub2[5];
	Cartas[20] = Sub2[6];
	
	for(j=1	; j<22; j++){
		document.getElementById(j).src = Cartas[j-1];
	}
	cont++;
	
	if(cont == 3){
		Mostrar();
	}
}

function embaralhar2(){
	
	memorizar();
	Cartas[0] = Sub1[0];
	Cartas[1] = Sub1[1];
	Cartas[2] = Sub1[2]; 
	Cartas[3] = Sub1[3]; 
	Cartas[4] = Sub1[4];
	Cartas[5] = Sub1[5];
	Cartas[6] = Sub1[6];

	Cartas[7] = Sub2[0];
	Cartas[8] = Sub2[1];
	Cartas[9] = Sub2[2]; 
	Cartas[10] = Sub2[3]; 
	Cartas[11] = Sub2[4];
	Cartas[12] = Sub2[5];
	Cartas[13] = Sub2[6];
	
	Cartas[14] = Sub3[0];
	Cartas[15] = Sub3[1];
	Cartas[16] = Sub3[2]; 
	Cartas[17] = Sub3[3]; 
	Cartas[18] = Sub3[4];
	Cartas[19] = Sub3[5];
	Cartas[20] = Sub3[6];
	
	for(j=1	; j<22; j++){
		document.getElementById(j).src = Cartas[j-1];
	}
	cont++;
	
	if(cont == 3){
		Mostrar();
	}
}

function embaralhar3(){
	
	memorizar();
	Cartas[0] = Sub2[0];
	Cartas[1] = Sub2[1];
	Cartas[2] = Sub2[2]; 
	Cartas[3] = Sub2[3]; 
	Cartas[4] = Sub2[4];
	Cartas[5] = Sub2[5];
	Cartas[6] = Sub2[6];

	Cartas[7] = Sub3[0];
	Cartas[8] = Sub3[1];
	Cartas[9] = Sub3[2]; 
	Cartas[10] = Sub3[3]; 
	Cartas[11] = Sub3[4];
	Cartas[12] = Sub3[5];
	Cartas[13] = Sub3[6];
	
	Cartas[14] = Sub1[0];
	Cartas[15] = Sub1[1];
	Cartas[16] = Sub1[2]; 
	Cartas[17] = Sub1[3]; 
	Cartas[18] = Sub1[4];
	Cartas[19] = Sub1[5];
	Cartas[20] = Sub1[6];
	
	for(j=1	; j<22; j++){
		document.getElementById(j).src = Cartas[j-1];
	}
	cont++;
	
	if(cont == 3){
		Mostrar();
	}
}

function Mostrar(){
	document.getElementById(1336).src = Cartas[10];//Como já disse, será a 11º posição. Esta array.
	emb1.style.display = "none";
	emb2.style.display = "none";
	emb3.style.display = "none";
	p1.style.display = "none";
	p2.style.display = "inline";
	for(i = 1; i<22; i++){
		document.getElementById(i).src = "costas.jpg";
	}
	cont = 0;
}

function buttonsOff(){ //Desabilitar botões e flechas
	atualizar.style.display = "none";
	emb1.style.display = "none";
	emb2.style.display = "none";
	emb3.style.display = "none";
	person.style.display = "none";
	cards.style.display = "none";
}

function buttonsOn(){ //Habilitar botões
	atualizar.style.display = "inline";
	emb1.style.display = "inline";
	emb2.style.display = "inline";
	emb3.style.display = "inline";
	person.style.display = "inline";
	cards.style.display = "inline";
}

function darCartas(){
	cont = 0;
	document.getElementById('p3').innerHTML = cont+"/3 jogadas";//mostra contador ao reiniciar, aqui não coloca cont+1 pois não fez nenhum embaralhamento ainda
	p2.style.display = "none";//esconde parágrafo "Sua carta é"
	p1.style.display = "inline";//habilita parágrafo de instrução
	document.getElementById(1337).src = "costas.jpg";
	ordemInicial();//chama a função onde a Array com as cartas é criada
	for(j=1	; j<22; j++){ //1 à 21
		document.getElementById(j).src = Cartas[j-1]; //inicia em 1 (pois a primeira imagem tem esse nº de id), e atribui o endereço da imagem conforme a Array
		jogar.style.display = "none";//esconder botão "jogar"
		buttonsOn();
	}
}
