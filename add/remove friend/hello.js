var btn=document.querySelector('#add')
var button=document.querySelector('#remove')
var h5=document.querySelector('h5')
btn.addEventListener('click' , function(){
    h5.innerHTML='Friends'
    h5.style.color='green'
})
button.addEventListener('click' , function(){
    h5.innerHTML='Stranger'
    h5.style.color='Red'
})

