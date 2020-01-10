tipoPao = new Array(5);
tipoPao[0] = document.querySelector("#cari");
tipoPao[1] = document.querySelector("#cart");
tipoPao[2] = document.querySelector("#coco");
tipoPao[3] = document.querySelector("#doce");
tipoPao[4] = document.querySelector("#leit");

totalPaes = document.querySelector(".totalPaes");

function add(num){
    switch(num){
        case 0:
            tipoPao[0].innerHTML = parseInt(tipoPao[0].innerHTML) + 1;
            totalPaes.innerHTML = parseInt(totalPaes.innerHTML) + 1;
            break;
        case 1:
            tipoPao[1].innerHTML = parseInt(tipoPao[1].innerHTML) + 1;
            totalPaes.innerHTML = parseInt(totalPaes.innerHTML) + 1;
            break;
        case 2:
            tipoPao[2].innerHTML = parseInt(tipoPao[2].innerHTML) + 1;
            totalPaes.innerHTML = parseInt(totalPaes.innerHTML) + 1;
            break;
        case 3:
            tipoPao[3].innerHTML = parseInt(tipoPao[3].innerHTML) + 1;
            totalPaes.innerHTML = parseInt(totalPaes.innerHTML) + 1;
            break;
        case 4:
            tipoPao[4].innerHTML = parseInt(tipoPao[4].innerHTML) + 1;
            totalPaes.innerHTML = parseInt(totalPaes.innerHTML) + 1;
            break;
    }
}

function sub(num){
    switch(num){   
        case 0:
            tipoPao[0].innerHTML = parseInt(tipoPao[0].innerHTML) - 1;
            parseInt(tipoPao[0].innerHTML) < 0 ? tipoPao[0].innerHTML = 0 : totalPaes.innerHTML = parseInt(totalPaes.innerHTML) - 1;
            break;
        case 1:
            tipoPao[1].innerHTML = parseInt(tipoPao[1].innerHTML) - 1;
            parseInt(tipoPao[1].innerHTML) < 0 ? tipoPao[1].innerHTML = 0 : totalPaes.innerHTML = parseInt(totalPaes.innerHTML) - 1;
            break;
        case 2:
            tipoPao[2].innerHTML = parseInt(tipoPao[2].innerHTML) - 1;
            parseInt(tipoPao[2].innerHTML) < 0 ? tipoPao[2].innerHTML = 0 : totalPaes.innerHTML = parseInt(totalPaes.innerHTML) - 1;
            break;
        case 3:
            tipoPao[3].innerHTML = parseInt(tipoPao[3].innerHTML) - 1;
            parseInt(tipoPao[3].innerHTML) < 0 ? tipoPao[3].innerHTML = 0 : totalPaes.innerHTML = parseInt(totalPaes.innerHTML) - 1;
            break;
        case 4:
            tipoPao[4].innerHTML = parseInt(tipoPao[4].innerHTML) - 1;
            parseInt(tipoPao[4].innerHTML) < 0 ? tipoPao[4].innerHTML = 0 : totalPaes.innerHTML = parseInt(totalPaes.innerHTML) - 1;
            break;
    }
}
