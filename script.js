const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");

enterBtn.addEventListener("click",()=>{

music.play();

document.getElementById("loading-screen").style.display="none";
document.getElementById("main-content").style.display="block";

});

function updateCountdown(){

const start = new Date("2026-05-30T00:00:00");

const now = new Date();

const diff = now - start;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor(diff/(1000*60*60)%24);

const mins = Math.floor(diff/(1000*60)%60);

const secs = Math.floor(diff/1000%60);

const el = document.getElementById("countdown");

if(el){
el.innerHTML=
`${days} Hari ${hours} Jam ${mins} Menit ${secs} Detik`;
}

}

setInterval(updateCountdown,1000);

function answer(correct){

const result=document.getElementById("quiz-result");

if(correct){
result.innerHTML="betul! gua semantep itu";
}
else{
result.innerHTML="yang bener aja jir?";
}

}

function ending(){

document.getElementById("final").style.display="block";

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

}

for(let i=0;i<30;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(Math.random()*6+4)+"s";

heart.style.fontSize=
(Math.random()*20+15)+"px";

document.body.appendChild(heart);

}
