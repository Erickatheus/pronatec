var slideIndex = 1;
                
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {

 
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";

  if(n==1){
    TrocaLegenda("Bolo Panetone de Natal");
    TrocaModo("Misture a manteiga com açúcar fazendo uma mistura homogenias, Colocar na batedeira a mistura, ovos, leite bater ate misturar, colocar a farinha bater até a massa ficar lisa, colocar essência de Panetone, as frutas cristalizadas e as uvas e uma colher de sopa de fermento (pó Royal)")
TrocaIng("3 ovos","2 xicara de açúcar refinado 240 ml cada"," 1|2 de xícara manteiga","2 xicara de farinha de trigo 240 ml cada","1 xicara de leite 240 ml cada"," 6 gotas de essência de panetone","200 gramas de frutas cristalizadas","30 gramas de uva passa","1 colher de sopa fermento (PO ROYAL)","");
  }
  if(n==2){
    TrocaLegenda("Brigadeiro de leite em pó");
    TrocaModo("Em uma panela, coloque a manteiga, o leite condensado e coloque aos poucos o leite em pó para não empelotar, mexendo sem parar, até desgrudar do fundo da panela Coloque a massa de brigadeiro em um prato e deixe esfriar um pouco Pegue um outro prato e coloque o leite em pó, para enrolar passe um pouco de manteiga em suas mãos para poder enrolar os brigadeiros, com uma colher, pegando pequenos pedaços da massa e colocando em sua mão Quando terminar de enrolar, passe no leite em pó e sirva")

    TrocaIng("1 lata de leite condensado","4 colheres (sopa) de leite em pó","1 colher (sopa) manteiga","leite em pó para enrolar os brigadeiros","","","","","","");
  }

  if(n==3){
    TrocaLegenda("Massa versátil para tortas salgadas ");
    TrocaModo("Ferva o leite e dissolva o cubo de caldo knorr, Deixe esfriar, Transfira a mistura para o copo do liquidificador e junte os ovos, o azeite, o queijo parmesão, a farinha e o fermento, Bata até que a massa fique homogênea, Despeje aproximadamente metade da massa em uma forma untada (30 cm de diâmetro) e cubra com o recheio, Cubra com o restante da massa, Asse por cerca de 45 minutos (a massa deve estar corada e ao enfiar um palito nela, ele deve sair limpo) Sirva quente")
    TrocaIng("2 xícaras (chá) de leite","1 cubo de caldo knorr de sua preferencia","3 ovos","1/2 xícara (chá) de azeite","3 colheres (sopa) de queijo parmesão ralado","2 xícaras de farinha de trigo","1 colher (sopa) de fermento em pó","Recheio de sua preferencia","1 lata de creme de leite ou requeijão (opcional)","");
  }
  if(n==4){
    TrocaLegenda("Macarrão com calabresa na panela de pressão");
    TrocaModo("Em uma panela de pressão, doure a cebola e a calabresa Após dourar, adicione o sal, o molho, as 2 medidas de água, o macarrão e o creme de leite, Se o macarrão não tiver completamente coberto, coloque mais água, Misturar bem, adicionar o sal e fechar a panela, Contar 5 minutos a partir do momento em que a panela fizer pressão Polvilhe queijo ralado e bom apetite")
    TrocaIng("1 pacote de macarrão penne, parafuso, ou gravatinha1 caixinha de extrato/polpa/molho de tomate2 caixinha (a mesma medida da caixinha do molho) de água1 lata de creme de leite","1 cebola média picada","3 gomos de calabresa picados em rodelas finas","Sal a gosto","Óleo ou azeite para refogar a cebola e a calabresa","","","","","");
  }

  if(n==5){
    TrocaLegenda("Mousse de limão");
    TrocaModo("No liquidificador, bata o leite condensado e o creme de leite por 3 minutos, Acrescente aos poucos o suco de limão e continue batendo, Despeje o mousse em um refratário e leve à geladeira, Na hora de servir, triture o bis e coloque por cima do mousse para decorar")
    TrocaIng("1 lata de leite condensado","1 lata de creme de leite","1/2 copo (americano) de suco puro de limão","bis de limão","","","","","","");
  }



}

function TrocaLegenda(txt){

  document.getElementById('legenda').innerHTML = "<h2 id ='legenda'>"+txt+"</h2> ";}

function TrocaIng(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10){

  document.getElementById('i1').innerHTML = "<p id ='i1'>"+t1+"</p> ";

  document.getElementById('i2').innerHTML = "<p id ='i2'>"+t2+"</p> ";

  document.getElementById('i3').innerHTML = "<p id ='i3'>"+t3+"</p> ";

  document.getElementById('i4').innerHTML = "<p id ='i4'>"+t4+"</p> ";

  document.getElementById('i5').innerHTML = "<p id ='i5'>"+t5+"</p> ";

  document.getElementById('i6').innerHTML = "<p id ='i6'>"+t6+"</p> ";

  document.getElementById('i7').innerHTML = "<p id ='i7'>"+t7+"</p> ";

  document.getElementById('i8').innerHTML = "<p id ='i8'>"+t8+"</p> ";

  document.getElementById('i9').innerHTML = "<p id ='i9'>"+t9+"</p> ";

  document.getElementById('i10').innerHTML = "<p id ='i10'>"+t10+"</p> ";



}




  function TrocaModo(txt){

  document.getElementById('modo').innerHTML = "<p id ='modo'>"+txt+"</p> ";}