function calculateAge(){
    const birthdate=document.getElementById('birthdate').value;
const result=document.getElementById('result');
if(!birthdate){
    result.innerHTML='Please enter your birthdate.';
    result.style.color='red';
    result.style.opacity=1;
return;
}
const birthDate=new Date(birthdate);
const today=new Date();
let age= today.getFullYear()-birthDate.getFullYear();
const m= today.getMonth()-birthDate.getMonth();
if(m<0 || (m === 0  && today.getDate() < birthDate.getDate())){
    age--;
}
result.style.opacity=0;
setTimeout(()=>{
    result.innerHTML=`You are ${age} years old.`;
    result.style.color='#1abc9c';
    result.style.opacity=1;
    result.style.transition='opacity 0.8s ease-in-out';
},200)
}