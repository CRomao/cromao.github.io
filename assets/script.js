tipoPao = new Array(5);
tipoPao[0] = document.querySelector("#cari");
tipoPao[1] = document.querySelector("#cart");
tipoPao[2] = document.querySelector("#coco");
tipoPao[3] = document.querySelector("#doce");
tipoPao[4] = document.querySelector("#leit");

totalValor = document.querySelector(".total-valor");

totalPaes = document.querySelector(".totalPaes");



if (!localStorage.primeiraVisita){    
    localStorage.setItem("totalPaes", totalPaes.innerHTML);
    localStorage.setItem("totalValor", totalValor.innerHTML);
    for(let i=0; i<tipoPao.length; i++){
        localStorage.setItem(String(i), tipoPao[parseInt(i)].innerHTML);
    }
    localStorage.primeiraVisita = 1;
}else{    
    totalPaes.innerHTML = localStorage.getItem("totalPaes");
    totalValor.innerHTML = localStorage.getItem("totalValor");
    for(let i=0; i<tipoPao.length; i++){
        tipoPao[parseInt(i)].innerHTML = localStorage.getItem(String(i));
    }
}


function cleanStorage(){
    localStorage.setItem("totalPaes", 0);
    localStorage.setItem("totalValor", "R$ 0,00");
    totalPaes.innerHTML = 0;
    totalValor.innerHTML = "R$ 0,00";
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
            let valor = (parseInt(totalPaes.innerHTML)*0.25).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            totalValor.innerHTML = (valor);
            localStorage.setItem("totalValor", valor);
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
            let valor = (parseInt(totalPaes.innerHTML)*0.25).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            totalValor.innerHTML = (valor);
            localStorage.setItem("totalValor", valor);
            break;
        }
    }
}

