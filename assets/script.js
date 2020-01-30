tipoPao = new Array(5);
tipoPao[0] = document.querySelector("#cari");
tipoPao[1] = document.querySelector("#cart");
tipoPao[2] = document.querySelector("#coco");
tipoPao[3] = document.querySelector("#doce");
tipoPao[4] = document.querySelector("#leit");

totalPaes = document.querySelector(".totalPaes");

totalPaes.innerHTML = localStorage.getItem("totalPaes");

for(let i=0; i<tipoPao.length; i++){
    tipoPao[parseInt(i)].innerHTML = localStorage.getItem(String(i));
}

function cleanStorage(){
    localStorage.setItem("totalPaes", 0);
    totalPaes.innerHTML = 0;
    for(let i=0; i<tipoPao.length; i++){
        tipoPao[i].innerHTML = 0;
        localStorage.setItem(String(i), 0);
        parseInt(i);
    }
}

function add(num){
    for(let i=0; i<tipoPao.length; i++){
        if(num == i){
            parseInt(tipoPao[i].innerHTML++);
            localStorage.setItem(String(i), tipoPao[parseInt(i)].innerHTML);
            parseInt(i);
            parseInt(totalPaes.innerHTML++);
            localStorage.setItem("totalPaes", totalPaes.innerHTML);
            break;
        }
    }
}

function sub(num){
    for(let i=0; i<tipoPao.length; i++){
        if(num == i){
            parseInt(tipoPao[i].innerHTML--);
            parseInt(tipoPao[i].innerHTML) < 0 ? tipoPao[i].innerHTML = 0 : parseInt(totalPaes.innerHTML--);
            localStorage.setItem(String(i), tipoPao[parseInt(i)].innerHTML);
            parseInt(i);
            localStorage.setItem("totalPaes", totalPaes.innerHTML);
            break;
        }
    }
}

