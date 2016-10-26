var g = {
    i:0,
    timer: setInterval(nextText, 6000),
    stick: setInterval(stick, 300)
};
function stick(){
    var top = window.pageYOffset;
    var navMargin = document.getElementById('nav');
    var height = document.getElementsByClassName('header-height');
    var logo = document.getElementById('logoColors');
    if (screen.width > 990) {
        if (top > 50) {
            for(var i =0; i < height.length; i++){
                height[i].style.height = '50px';
            }
            logo.style.width = '80px';
            logo.style.marginLeft = '-30px';
            logo.style.marginTop = '10px';
            navMargin.style.marginTop = "0";
        } else {
            for(var i =0; i < height.length; i++){
                height[i].style.height = '100px';
            }
            logo.style.width = '';
            logo.style.marginTop = '';
            navMargin.style.marginTop = "";
        }
    }
}

function nextText(){
    var caroussel = document.getElementsByClassName('carousselDiv');
    var boutonCarroussel = document.getElementsByClassName('boutonCarroussel');
    hide();
    caroussel[g.i].style.display = 'inline';
    move(caroussel[g.i], -100, 0);
    boutonCarroussel[g.i].style.color = 'black';
    g.i= g.i+1;
    if(g.i>2){
        g.i=0;
    }
}
function prevText(){
    var caroussel = document.getElementsByClassName('carousselDiv');
    var boutonCarroussel = document.getElementsByClassName('boutonCarroussel');
    hide();
    caroussel[g.i].style.display = 'inline';
    move(caroussel[g.i], 100, 0);
    boutonCarroussel[g.i].style.color = 'black';
    g.i= g.i-1;
    if(g.i<0){
        g.i=2;
    }
}
function selectText(i){
    var caroussel = document.getElementsByClassName('carousselDiv');
    var boutonCarroussel = document.getElementsByClassName('boutonCarroussel');
    hide();
    caroussel[i].style.display = 'inline';
    move(caroussel[i], -100, 0);
    boutonCarroussel[i].style.color = 'black';
}
function hide(){
    var caroussel = document.getElementsByClassName('carousselDiv');
    var boutonCarroussel = document.getElementsByClassName('boutonCarroussel');
    for(var i=0; i < caroussel.length; i++){
        caroussel[i].style.display = 'none';
    }
    for(var i=0; i < caroussel.length; i++){
        boutonCarroussel[i].style.color = 'white';
    }
}
function stop(){
    clearInterval(g.timer);
}
function play(){
    g.timer = setInterval(nextText, 6000);
}
function move(elem, initial, left) {
    var timer = setInterval(frame, 5);
    if (initial > left){ inc = -1;}
    else { inc = +1;}
    function frame() {
        left += inc;
        elem.style.left = initial + left + '%';
        if (elem.style.left === '0%'){
            clearInterval(timer);
        }
    }
}