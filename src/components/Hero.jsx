import "./Hero.css";
import { useState } from "react";
import confetti from "canvas-confetti";

import Gallery from "./Gallery";
import Message from "./Message";

function Hero(){

const [showContent,setShowContent]=useState(false);

const celebrate=()=>{

confetti({

particleCount:250,

spread:180,

origin:{y:0.6}

});

const music=document.getElementById("birthdayMusic");

if(music){

music.play();

}

setShowContent(true);

};

return(

<>

<div className="hero">

<div className="content">

<h1 className="hero-title">

Happy Birthday ❤️

</h1>

<h2 className="name">

Shoeb

</h2>

<p className="message">

Have a wonderful birthday!

</p>

<button

className="celebrate-btn"

onClick={celebrate}

>

🎉 Celebrate

</button>

</div>

<div className="hearts">

<span>❤️</span>

<span>💖</span>

<span>💕</span>

<span>💗</span>

<span>💝</span>

<span>❤️</span>

</div>

</div>

<audio
id="birthdayMusic"
src="/music/birthday.mp3"
/>

{
showContent &&

<>

<Gallery/>

<Message/>

</>

}

</>

);

}

export default Hero;