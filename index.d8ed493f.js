function t(t,n,e,o){Object.defineProperty(t,n,{get:e,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},a=n.parcelRequire7d1f;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in o){var n=o[t];delete o[t];var a={id:t,exports:{}};return e[t]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){o[t]=n},n.parcelRequire7d1f=a),a.register("27Lyk",(function(n,e){var o,a;t(n.exports,"register",(()=>o),(t=>o=t)),t(n.exports,"resolve",(()=>a),(t=>a=t));var i={};o=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)i[n[e]]=t[n[e]]},a=function(t){var n=i[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),a("27Lyk").register(JSON.parse('{"dZpbI":"index.d8ed493f.js","9k2AR":"piedra.2312c16f.png","1IT0P":"papel.343f43f3.png","jlyPo":"tijera.ad4321ba.png","ijrVJ":"ganaste.9c034240.png","9PGIl":"perdiste.760d9b42.png"}')),customElements.define("my-button",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){this.render()}render(){let t=this.getAttribute("title")||"button";this.title=t,this.shadow.innerHTML=`\n            <button>${this.title}</button>\n            `;let n=document.createElement("style");n.textContent="\n            button {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 335px;\n\t\t\t\theight:84px;\n                border: 10px solid #001997;\n                border-radius: 10px;\n                font-family: 'Odibee Sans';\n                font-weight: 400;\n                font-size: 45px;\n                background-color: #006CFC;\n                color: #D8FCFC;\n             }\n            ",this.shadow.appendChild(n)}});var i;i=new URL(a("27Lyk").resolve("9k2AR"),import.meta.url).toString();var r;r=new URL(a("27Lyk").resolve("1IT0P"),import.meta.url).toString();var s;s=new URL(a("27Lyk").resolve("jlyPo"),import.meta.url).toString(),customElements.define("hand-command",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super()}connectedCallback(){let t=this.getAttribute("option");"piedra"==t?this.option=i:"papel"==t?this.option=r:"tijera"==t&&(this.option=s),this.render()}render(){this.shadow.innerHTML=`\n\t\t\t<img class="hand" src=${this.option} />\n\t\t\t`;const t=document.createElement("style");t.textContent="\n            .hand{\n                height: 100%;\n                width: 100%;\n            }\n            ",this.shadow.appendChild(t)}});const l={data:{currentGame:{myPlay:"",computerPlay:""},historyGame:{myCounter:0,computerCounter:0}},listeners:[],addMove(t){const n=this.getState();let e=["piedra","papel","tijera"];n.currentGame.computerPlay=e[Math.floor(Math.random()*e.length)],n.currentGame.myPlay=t,this.setState(n)},resetMove(){const t=this.getState().currentGame;t.myPlay="",t.computerPlay=""},whoWin(){const t=this.getState().currentGame,n=["tijera"==t.myPlay&&"tijera"==t.computerPlay,"piedra"==t.myPlay&&"piedra"==t.computerPlay,"papel"==t.myPlay&&"papel"==t.computerPlay],e=["piedra"==t.myPlay&&"tijera"==t.computerPlay,"papel"==t.myPlay&&"piedra"==t.computerPlay,"tijera"==t.myPlay&&"papel"==t.computerPlay],o=["piedra"==t.myPlay&&"papel"==t.computerPlay,"papel"==t.myPlay&&"tijera"==t.computerPlay,"tijera"==t.myPlay&&"piedra"==t.computerPlay];return n.includes(!0)?"empate":e.includes(!0)?(this.pushToHistory("win"),"win"):o.includes(!0)?(this.pushToHistory("lose"),"lose"):"error"},getHistory(){const t=this.getState(),n=JSON.parse(localStorage.getItem("history"));localStorage.getItem("history")&&(t.historyGame=n)},pushToHistory(t){const n=this.getState();"win"==t?n.historyGame.myCounter++:"lose"==t&&n.historyGame.computerCounter++,this.setState(n)},resetHistory(){let t=l.getState();t.historyGame={myCounter:0,computerCounter:0},l.setState(t)},getState(){return this.data},setState(t){this.data=t;for(const n of this.listeners)n(t);localStorage.setItem("history",JSON.stringify(t.historyGame))},subscribe(t){this.listeners.push(t)}};var c;c=new URL(a("27Lyk").resolve("ijrVJ"),import.meta.url).toString();var d;d=new URL(a("27Lyk").resolve("9PGIl"),import.meta.url).toString();const m=[{path:/\/welcome/,handler:function(t){const n=document.createElement("div"),e=document.createElement("style");return n.innerHTML='\n    <div class="home__container-content">\n\t\t\t\t<div class="home__container-title">\n\t\t\t\t\t<h1 class="home__title">Piedra Papel <span>ó</span> Tijera</h1>\n\t\t\t\t</div>\n\t\t\t\t<my-button class="button" title="Empezar"></my-button>\n\t\t\t\t<div class="home__container-comands">\n                <hand-command option="piedra"></hand-command>\n                <hand-command option="papel"></hand-command>\n                <hand-command option="tijera"></hand-command>\n\t\t\t\t</div>\n\t\t\t</div>\n    ',n.setAttribute("class","home"),e.textContent='\n    .home {\n        height: 100vh;\n        display: flex;\n        justify-content: center;\n        align-items: flex-end;\n    }\n    \n    .home__container-content {\n        height: 90vh;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    \n    .home__container-title {\n        width: 300px;\n        margin-bottom: 45px;\n    }\n    \n    .home__title {\n        margin: 0;\n        color: #009048;\n        font-family: "Special Elite", cursive;\n        font-style: normal;\n        font-weight: 700;\n        font-size: 80px;\n    }\n\n    .home__title > span {\n        color: #91CCAF;\n\n    }\n    \n    .home__container-comands {\n        width: max-content;\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        gap: 36px;\n        position: fixed;\n        bottom: -60px;\n    }\n    \n    ',n.appendChild(e),n.querySelector(".button")?.addEventListener("click",(n=>{t.goTo("./roules")})),n}},{path:/\/roules/,handler:function(t){const n=document.createElement("div"),e=document.createElement("style");return n.innerHTML='\n    <div class="home__container-content">\n\t\t\t\t<div class="home__container-title">\n\t\t\t\t\t<p class="home__title">Presioná jugar\n\t\t\t\t\ty elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>\n\t\t\t\t</div>\n\t\t\t\t<my-button class="button" title="¡Jugar!"></my-button>\n\t\t\t\t<div class="home__container-comands">\n                <hand-command option="piedra"></hand-command>\n                <hand-command option="papel"></hand-command>\n                <hand-command option="tijera"></hand-command>\n\t\t\t\t</div>\n\t\t\t</div>\n    ',n.setAttribute("class","home"),e.textContent='\n    .home {\n        height: 100vh;\n        display: flex;\n        justify-content: center;\n        align-items: flex-end;\n    }\n    \n    .home__container-content {\n        height: 90vh;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    \n    .home__container-title {\n        width: 300px;\n        margin-bottom: 30px;\n    }\n    \n    .home__title {\n        margin: 0;\n        text-align: center;\n        font-family: "Special Elite", cursive;\n        font-style: normal;\n\t\tfont-weight: 600;\n\t\tfont-size: 40px;\n    }\n\n    .home__container-comands {\n        width: max-content;\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        gap: 36px;\n        position: fixed;\n        bottom: -65px;\n    }\n    \n    ',n.appendChild(e),n.querySelector(".button")?.addEventListener("click",(n=>{l.resetMove(),t.goTo("./start")})),n}},{path:/\/start/,handler:function(t){const n=document.createElement("div"),e=document.createElement("style");n.innerHTML='\n    <div class="home__container-content">\n      <div class="container-counter">\n        <div class="counter"></div>\n      </div>\n        <div class="container-commands">\n        <hand-command option="piedra" class="hand disabled"></hand-command>\n        <hand-command option="papel" class="hand disabled"></hand-command>\n        <hand-command option="tijera" class="hand disabled"><hand-commands>\n        </div>\n\t</div>\n    ',n.setAttribute("class","home"),e.textContent='\n    .home {\n        height: 100vh;\n    }\n    \n    .home__container-content {\n       height: 100vh;\n       display: grid;\n       grid-template-rows: 60% 40%;\n    }\n\n    .container-counter{\n        margin-top: 125px;\n        justify-self: center;\n        align-items: end;\n    }\n    .counter{\n        height: 230px;\n        width: 230px;\n        border-radius: 50%;\n        border: 17px solid #000000;\n        font-weight: 700;\n        font-size: 90px;\n        font-family: "Special Elite", cursive;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    \n    .container-commands{\n        max-width: 360px;\n        justify-self: center;\n       display: grid;\n       grid-template-columns: 1fr 1fr 1fr;\n       gap: 20px;\n    }\n\n    .disabled{\n        transform: translateY(95px);\n        opacity: 70%;\n    }\n    ',n.appendChild(e);const o=n.querySelector(".counter");return n.querySelectorAll(".hand").forEach((t=>{t.addEventListener("click",(t=>{t.target.classList.toggle("disabled")}))})),function(e){let o=n.querySelectorAll(".hand"),a=4,i=setInterval((()=>{if(a--,e.innerText=a.toString(),0==a){for(const t of o){if(!t.classList.value.includes("disabled")){let n=t.getAttribute("option");l.addMove(n)}}t.goTo("/results"),clearInterval(i)}return a}),1e3)}(o),n}},{path:/\/results/,handler:function(t){const n=document.createElement("div"),e=document.createElement("style");function o(){let t=l.getState().currentGame;const e=n.querySelector(".player"),o=n.querySelector(".computer");e?.setAttribute("option",t.myPlay),o?.setAttribute("option",t.computerPlay)}function a(t){const e=n.querySelector(".score-p"),o=n.querySelector(".score-c");e.textContent=t.myCounter,o.textContent=t.computerCounter}return n.innerHTML='\n\t<hand-command option="piedra" class="hand computer"></hand-command>\n\t<hand-command option="papel" class="hand player"></hand-command>\n\t    <div class="results">\n\t     <img class="results-img" src= />\n\t        <div class="score">\n\t            <h3 class="score__title">Score</h3>\n\t\t        <div class="score__data">\n\t\t            <h4 class="score__data-number">Vos: <span class="score-p">0</span></h4> \n\t\t            <h4 class="score__data-number">Maquina: <span class="score-c">0</span></h4> \n\t\t        </div>\n\t        </div>\n\t\t\t<my-button class="button" title="Volver a Jugar"></my-button>\n\t\t\t<button class="reset">reset</button>\n\t    </div>\n\t',n.querySelector(".button")?.addEventListener("click",(n=>{t.goTo("/roules")})),n.querySelector(".reset")?.addEventListener("click",(t=>{l.resetHistory(),a(l.getState().historyGame)})),n.setAttribute("class","page"),e.textContent="\n     .page{\n\t\theight: 100vh;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t }\n\n\t .hand {\n      height: 40%;\n\t }\n\n\t .computer{\n\t\ttransform: rotate(180deg)\n\t }\n \n\t .results{\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tpadding: 35px 20px;\n        display: none;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t }\n\n\t .win {\n\t\tbackground-color: #888949E5;\n\t }\n\n\t .lose {\n\t\tbackground-color: #894949E5;\n\t }\n\n\t .empate {\n\t\tbackground-color: #798795;\n\t\tfont-family: 'Odibee Sans';\n        font-weight: 400;\n        font-size: 55px;\n\t\ttext-align: center;\n       }\n\t \n\t.error {\n\t\tbackground-color: #ff6258;\n\t\tcolor: #FFFFFF;\n\t\tfont-family: 'Odibee Sans';\n        font-weight: 400;\n        font-size: 55px;\n\t\ttext-align: center;\n       }\n      \n     .results-img{\n\t\theight: 250px;\n\t\twidth: 250px;\n\t }\n\n\t .score{\n\t\twidth: 259px;\n        height: 217px;\n\t\tborder: 10px solid #000000;\n        border-radius: 10px;\n\t\tbackground-color: #FFFFFF;\n\t\tpadding: 10px;\n\t }\n\n\t .score__title{\n\t\tfont-family: 'Odibee Sans';\n        font-weight: 400;\n        font-size: 55px;\n\t\ttext-align: center;\n\t\tmargin: 0;\n\t }\n\n\t .score__data-number{\n\t\tfont-family: 'Odibee Sans';\n        font-weight: 400;\n        font-size: 45px;\n\t\ttext-align: end;\n\t\tmargin: 0;\n\t }\n\n\t .reset{\n\t\tposition: absolute;\n\t\ttop: 0;\n        left: 0;\n        width: 90px;\n        height: 61px;\n        border: 10px solid #FC0303;\n        border-radius: 10px;\n        font-family: 'Odibee Sans';\n        font-weight: 400;\n        font-size: 34px;\n        background-color: #FF6161;\n        color: #D8FCFC;\n\t }\n\t ",function(){let e=l.whoWin();const i=n.querySelector(".results"),r=n.querySelector(".results-img");"win"==e?(i?.classList.add("win"),r.src=c,o(),a(l.getState().historyGame)):"lose"==e?(i?.classList.add("lose"),r.src=d,o(),a(l.getState().historyGame)):"empate"==e?(i?.classList.add("empate"),i.textContent="EMPATE",o(),setTimeout((()=>{t.goTo("/roules")}),2e3)):"error"==e&&(i?.classList.add("error"),i.textContent="ERROR",setTimeout((()=>{t.goTo("/roules")}),2e3)),setTimeout((()=>{i.style.display="flex"}),1e3)}(),n.appendChild(e),n}}];function p(){return location.host.includes("github.io")}function h(t){function n(t){const n=p()?"/desafio-m5"+t:t;history.pushState({},"",n),e(n)}function e(e){const o=p()?e.replace("/desafio-m5",""):e;for(let e of m)if(e.path.test(o)){let o=e.handler({goTo:n});t.firstChild&&t.firstChild.remove(),t.appendChild(o)}}"/"==location.pathname?n("/welcome"):e(location.pathname),window.onpopstate=()=>{e(location.pathname)}}!function(){const t=document.querySelector(".root");l.getHistory(),h(t)}();
//# sourceMappingURL=index.d8ed493f.js.map
