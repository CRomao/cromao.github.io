tipoPao = new Array(5);
tipoPao[0] = document.querySelector("#cart");
tipoPao[1] = document.querySelector("#leit");
tipoPao[2] = document.querySelector("#cari");
tipoPao[3] = document.querySelector("#doce");
tipoPao[4] = document.querySelector("#coco");

totalPaes = document.querySelector(".totalPaes");

function add(num){
    switch(num){
        case 0:
            tipoPao[0].innerHTML = parseInt(tipoPao[0].innerHTML) + 1;
            totalPaes.innerHTML = parseInt(totalPaes.innerHTML) + 1;
            break;
        case 1:
            tipoPao[1].innerHTML = eval(parseInt(tipoPao[1].innerHTML) + 1);
            totalPaes.innerHTML = parseInt(totalPaes.innerHTML) + 1;
            break;
        case 2:
            tipoPao[2].innerHTML = eval(parseInt(tipoPao[2].innerHTML) + 1);
            totalPaes.innerHTML = parseInt(totalPaes.innerHTML) + 1;
            break;
        case 3:
            tipoPao[3].innerHTML = eval(parseInt(tipoPao[3].innerHTML) + 1);
            totalPaes.innerHTML = parseInt(totalPaes.innerHTML) + 1;
            break;
        case 4:
            tipoPao[4].innerHTML = eval(parseInt(tipoPao[4].innerHTML) + 1);
            totalPaes.innerHTML = parseInt(totalPaes.innerHTML) + 1;
            break;
    }
}