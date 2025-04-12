// var btn=document.querySelector('button')
// var percent=document.querySelector('#percent')
// var growth=document.querySelector('#growth')
// var grow=0
// btn.addEventListener('click',function(){
//     var int=setInterval(function() {
// console.log('hello')
//         grow++
//         percent.innerHTML=grow + '%'
//         growth.style.width=grow +' %'
//         },50);

// setTimeout(function(){
//     clearInterval(int)

//     btn.innerHTML='downloaded'
//     btn.style.opacity='0.5'
// },5000)
// })
// var btn = document.querySelector('button');
// var percent = document.querySelector('#percent');
// var growth = document.querySelector('#growth');

var grow = 0;
var btn = document.querySelector('button');
btn.addEventListener('click', function() {
    var int = setInterval(function() {
        if (grow >= 100) {
            clearInterval(int); 
            btn.innerHTML = 'Downloaded';
            btn.style.opacity = '0.5';
        } else {
            grow++;
            percent.innerHTML = grow + '%';
            growth.style.width = grow + '%';
        }
    }, 50);
});
