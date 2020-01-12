tipoPao = new Array(5);
tipoPao[0] = document.querySelector("#cari");
tipoPao[1] = document.querySelector("#cart");
tipoPao[2] = document.querySelector("#coco");
tipoPao[3] = document.querySelector("#doce");
tipoPao[4] = document.querySelector("#leit");

totalPaes = document.querySelector(".totalPaes");

function add(num){
    for(let i=0; i<tipoPao.length; i++){
        if(num == i){
            parseInt(tipoPao[i].innerHTML++);
            parseInt(totalPaes.innerHTML++);
            break;
        }
    }
}

function sub(num){
    for(let i=0; i<tipoPao.length; i++){
        if(num == i){
            parseInt(tipoPao[i].innerHTML--);
            parseInt(tipoPao[i].innerHTML) < 0 ? tipoPao[i].innerHTML = 0 : parseInt(totalPaes.innerHTML--);
            break;
        }
    }
}