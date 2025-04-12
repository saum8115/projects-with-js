var btn= document.querySelector('button')
var h5= document.querySelector('h5')
var check=0
btn.addEventListener('click', function(){
    if(check===0){
    btn.style.color='green'
    h5.innerHTML='Friends'
    btn.innerHTML='Remove Friend'
    console.log('friendship done')
    check=1
    }
    else{
        btn.style.color='Red'
    h5.innerHTML='Stranger'
    btn.innerHTML='Add friend'
    console.log('friendship is no more')
    check=0
    }
})