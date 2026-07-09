/*==========================================
        EMEJ GAMING v0.1
==========================================*/

console.log("🚀 EMEJ Gaming Loaded Successfully");

/* =========================
   Sticky Navbar Effect
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(0,0,0,.95)";
        header.style.boxShadow = "0 0 25px rgba(57,255,20,.15)";

    }else{

        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "none";

    }

});


/* =========================
      Animated Counters
========================= */

const counters = document.querySelectorAll(".card h2");

const targetValues = [

15000,
50000,
400,
24

];

const suffix = [

"+",
"+",
"+",
"/7"

];

let started = false;

function animateCounters(){

if(started) return;

started = true;

counters.forEach((counter,index)=>{

let start = 0;

let end = targetValues[index];

let speed = end / 100;

const update = ()=>{

start += speed;

if(start < end){

if(index==0){

counter.innerHTML="$"+Math.floor(start).toLocaleString()+suffix[index];

}

else if(index==3){

counter.innerHTML="24"+suffix[index];

}

else{

counter.innerHTML=Math.floor(start).toLocaleString()+suffix[index];

}

requestAnimationFrame(update);

}else{

if(index==0){

counter.innerHTML="$15,000+";

}else if(index==1){

counter.innerHTML="50,000+";

}else if(index==2){

counter.innerHTML="400+";

}else{

counter.innerHTML="24/7";

}

}

}

update();

})

}

window.addEventListener("scroll",()=>{

const stats = document.querySelector(".stats");

const position = stats.getBoundingClientRect().top;

if(position < window.innerHeight){

animateCounters();

}

});


/* =========================
 Hero Button Animation
========================= */

const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

})

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

})

});


/* =========================
 Fake Live Winners
========================= */

const winners=[

"Slow Poison won 25,000 FCFA",

"Chakiz won 10,000 FCFA",

"General Alex joined COD Tournament",

"Billion won PUBG Championship",

"Richi entered Free Fire Tournament",

"Ebob reached Top 10 Leaderboard"

];

function showNotification(){

const notify=document.createElement("div");

notify.className="notification";

notify.innerHTML=winners[Math.floor(Math.random()*winners.length)];

document.body.appendChild(notify);

setTimeout(()=>{

notify.classList.add("show");

},100);

setTimeout(()=>{

notify.classList.remove("show");

setTimeout(()=>{

notify.remove();

},500);

},5000);

}

setInterval(showNotification,9000);


/* =========================
 Welcome Message
========================= */

setTimeout(()=>{

console.log("Welcome to EMEJ Gaming");

},1000);
/*=========================
GAME CARD ANIMATION
=========================*/

const cards=document.querySelectorAll(".game-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});