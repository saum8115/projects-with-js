// let arr=['CSK','MI','RCB','KKR','SRH','DC','PBKS','RR','LSG','GT']
// var btn=document.querySelector('button')
// var h1=document.querySelector('h1')

// btn.addEventListener('click',function(){
//     let num= Math.floor(Math.random()*arr.length)
//     let winner=arr[num]
//     console.log(winner);
//     h1.innerHTML=winner
// })


var arr=[
    {
        team:'CSK',
        primary:'yellow',
        secondary:'green'
    },
    {
        team:'CSK',
        primary:'yellow',
        secondary:'green'
    },
    {
        team:'RCB',
        primary:'black',
        secondary:'blue'
    },
    {
        team:'KKR',
        primary:'navyblue',
        secondary:'red'
    },
    {
        team:'MIK',
        primary:'blue',
        secondary:'golden'
    },
    {
        team:'KKR',
        primary:'purple',
        secondary:'gold'
    },
    {
        team:'SRH',
        primary:'orange',
        secondary:'black'
    }
]

var btn=document.querySelector('button')
var h1=document.querySelector('h1')
btn.addEventListener('click', function(){

    var num=Math.floor(Math.random()*arr.length)
var winner=arr[num]
console.log(winner);
h1.innerHTML=winner.team
h1.style.backgroundColor=winner.primary
h1.style.color=winner.secondary
})