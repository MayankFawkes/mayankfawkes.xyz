const svgdata={
  lightsvg:'<path d="M9,2C7.95,2 6.95,2.16 6,2.46C10.06,3.73 13,7.5 13,12C13,16.5 10.06,20.27 6,21.54C6.95,21.84 7.95,22 9,22A10,10 0 0,0 19,12A10,10 0 0,0 9,2Z"></path>',
  darksvg:'<path d="M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"></path>'
}
var getbody="";
function runname(){
  alphabet = new Array("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", "/", "?","<", ">", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  letter_count = 0;
  el = $("#loading");
  word = el.html().trim();
  finished = false;

  el.html("");
  for (var i = 0; i < word.length; i++) {
    el.append("<span>"+word.charAt(i)+"</span>");
}

setTimeout(write, 45);
incrementer = setTimeout(inc, 1000);
}


function write() {
  for (var i = letter_count; i < word.length; i++) {
    var c = Math.floor(Math.random() * 36);
    $("span")[i].innerHTML = alphabet[c];
  }
  if (!finished) {
    setTimeout(write, 45);
  }
}

function inc() {
  $("span")[letter_count].innerHTML = word[letter_count];
  $("span:eq("+letter_count+")").addClass("glow");
  letter_count++;
  if (letter_count >= word.length) {
    finished = true;
    setTimeout(reset, 1500);
  } else {
    setTimeout(inc, 1000);
  }
}

function reset() {
  letter_count = 0;
  finished = false;
  setTimeout(inc, 1000);
  setTimeout(write, 75);
  $("span").removeClass("glow");
}

function setstor(m){
  window.document.getElementsByClassName("topright")[0].innerHTML=svgdata[m+"svg"];
  localStorage.setItem('theme', m);
}

function autoDL() {
  let theme=localStorage.getItem("theme");
  if (theme){
    window.document.getElementsByClassName("topright")[0].innerHTML=svgdata[theme+"svg"];
    window.document.body.classList.value=theme;
    setstor(theme);
  }
  else{
    window.document.getElementsByClassName("topright")[0].innerHTML=svgdata["lightsvg"];
    window.document.body.classList.value="light";
    setstor('light');
  }
}

function switchDL() {
  let theme=localStorage.getItem("theme");
  if (theme=="dark"){
    window.document.body.classList.value="light";
    setstor('light');
  }
  else{
    window.document.body.classList.value="dark";
    setstor('dark');
  }
}

function whendone() {
  window.document.getElementsByClassName("topright")[0].addEventListener("click", switchDL);
  window.document.getElementsByClassName("fab fa-twitter")[0].addEventListener("click", function(){
    open("https://twitter.com/MayankFawkes")
  });
  window.document.getElementsByClassName("fab fa-github")[0].addEventListener("click", function(){
    open("https://github.com/MayankFawkes")
  });
  window.document.getElementsByClassName("fas fa-at")[0].addEventListener("click", function(){
    open("mailto:mayankfawkes@gmail.com")
  });

}
function inits() {
  autoDL();
  runname();
  whendone();
}
const getBody = async () => {
	let res = await fetch("/body.html");
	if (res.ok) {
		return await res.text()
	}
	else {
		console.log(res);
	}
}

window.onload = async () => {
	window.document.body.innerHTML = await getBody();inits()
}