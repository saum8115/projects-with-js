var postimage=document.getElementById('postimage');
var heart=document.getElementById('heart')
postimage.addEventListener("dblclick",function(){
    heart.style.opacity=1;
    setTimeout(function(){
heart.style.opacity=0;
    },800)
});